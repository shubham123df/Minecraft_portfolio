import { useState, useEffect } from 'react';
import { GITHUB_USERNAME, PINNED_REPOS } from '../utils/constants';

const CACHE_KEY = 'github_repos_cache';
const CACHE_DURATION = 1000 * 60 * 30;

export function useGitHub() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setRepos(filterAndSort(data));
            setLoading(false);
            return;
          }
        }

        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`
        );

        if (!response.ok) {
          const remaining = response.headers.get('X-RateLimit-Remaining');
          if (remaining === '0') {
            throw new Error('GitHub API rate limit reached. Try again in an hour.');
          }
          throw new Error('Failed to fetch repositories.');
        }

        const data = await response.json();

        const processed = data
          .filter((repo) => !repo.fork && !repo.archived)
          .map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'No description available',
            url: repo.html_url,
            homepage: repo.homepage,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            topics: repo.topics || [],
            updatedAt: repo.updated_at,
          }));

        localStorage.setItem(CACHE_KEY, JSON.stringify({ data: processed, timestamp: Date.now() }));
        setRepos(filterAndSort(processed));
        setLoading(false);
      } catch (err) {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data } = JSON.parse(cached);
          setRepos(filterAndSort(data));
        } else {
          setError(err.message);
        }
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
}

function filterAndSort(repos) {
  if (PINNED_REPOS.length === 0) return repos.slice(0, 6);

  const pinned = PINNED_REPOS
    .map((name) => repos.find((r) => r.name === name))
    .filter(Boolean);

  const rest = repos
    .filter((r) => !PINNED_REPOS.includes(r.name))
    .sort((a, b) => b.stars - a.stars);

  return [...pinned, ...rest].slice(0, 6);
}
