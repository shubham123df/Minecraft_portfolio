import {
  BookIcon,
  PickaxeIcon,
  PaintingIcon,
  ChestIcon,
  EnderIcon,
  CompassIcon,
} from '../components/icons/MinecraftIcons';

export const GITHUB_USERNAME = 'shubham123df';

export const RESUME_URL =
  import.meta.env.VITE_RESUME_URL ||
  'https://drive.google.com/file/d/1cTjQ6o1aVa2385hZHtH_60NODsht3xU4/view?usp=sharing';

// Shown on site (Hero, footer, Quick Links mailto)
export const PUBLIC_EMAIL = 'krishkumargupta7631@gmail.com';

// Contact form submissions are delivered via Web3Forms to soulgaming7631reaper@gmail.com
// (configured at web3forms.com with your access key in .env.local)

export const SOCIAL_LINKS = {
  github: `https://github.com/${GITHUB_USERNAME}`,
  linkedin: 'https://www.linkedin.com/in/shubham-kumar-gupta-b760b8334/',
  email: PUBLIC_EMAIL,
};

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const FEATURED_PROJECTS = [
  {
    id: 'chess-online',
    name: 'Chess Online',
    iconSrc: null,
    description:
      'Production-ready real-time multiplayer chess with rooms, live gameplay, and unlimited spectators. Built with React, Node.js, Socket.IO, and Redis.',
    features: [
      'Room creation, live gameplay, and unlimited spectator support via Socket.IO',
      'Server-side chess move validation and game state management',
      'In-game chat and scalable architecture using Redis pub/sub',
      'FIDE-compliant rules, draw offers, and reconnection support',
    ],
    tech: ['React', 'Node.js', 'Socket.IO', 'Redis', 'TypeScript', 'Docker'],
    github: 'https://github.com/shubham123df/Chess_Online',
    live: null,
  },
  {
    id: 'face-attendance',
    name: 'Face Authentication Attendance System',
    iconSrc: null,
    description:
      'AI-powered attendance system using ArcFace face recognition embeddings for real-time authentication, anti-spoofing, and secure attendance tracking.',
    features: [
      'ArcFace embeddings for real-time face authentication and attendance',
      'Anti-spoofing via texture analysis and movement detection',
      'SQLite database for users and attendance history',
      'Responsive Streamlit UI for registration and punch in/out',
    ],
    tech: ['Python', 'OpenCV', 'DeepFace', 'Streamlit', 'SQLite'],
    github: 'https://github.com/shubham123df/Facial_Recognition_Attendance_System',
    live: null,
  },
  {
    id: '2d-adventure',
    name: '2D Adventure Game',
    iconSrc: null,
    description:
      'Classic tile-based 2D adventure game in Java Swing — explore a 50×50 world, collect keys, unlock doors, and find the treasure chest.',
    features: [
      'Tile-based world with collision detection and object interaction',
      'Modular architecture: player movement, collectibles, and UI rendering',
      '60 FPS game loop with sound effects and victory screen',
      'Keys, doors, speed boots, and treasure win condition',
    ],
    tech: ['Java', 'Java Swing', 'OOP'],
    github: 'https://github.com/shubham123df/2D-Game',
    live: null,
  },
];

export const PINNED_REPOS = [
  'Chess_Online',
  'Facial_Recognition_Attendance_System',
  '2D-Game',
];

export const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    iconComponent: BookIcon,
    color: 'mc-gold',
    skills: ['TypeScript', 'JavaScript', 'Go', 'Python', 'SQL', 'Java', 'C++'],
  },
  {
    name: 'Backend',
    iconComponent: PickaxeIcon,
    color: 'mc-grass',
    skills: ['Node.js', 'Express', 'REST APIs', 'WebSockets'],
  },
  {
    name: 'Frontend',
    iconComponent: PaintingIcon,
    color: 'mc-diamond',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    name: 'Databases',
    iconComponent: ChestIcon,
    color: 'mc-oak',
    skills: ['MongoDB', 'SQLite', 'MySQL', 'Prisma'],
  },
  {
    name: 'Infrastructure',
    iconComponent: EnderIcon,
    color: 'mc-obsidian',
    skills: ['Docker', 'Kubernetes'],
  },
  {
    name: 'Cloud & DevOps',
    iconComponent: CompassIcon,
    color: 'mc-lapis',
    skills: ['AWS', 'GitHub Actions', 'CI/CD', 'Render'],
  },
];
