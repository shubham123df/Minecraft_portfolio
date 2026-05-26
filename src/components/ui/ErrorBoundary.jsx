import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="pixel-card p-8 text-center m-4 md:m-8"
        >
          <p className="font-pixel text-xs text-mc-redstone mb-4">Something went wrong</p>
          <p className="text-sm text-pixel-text-light/70 dark:text-pixel-text-dark/70 mb-6 max-w-sm mx-auto">
            This section failed to load. You can try resetting it or refresh the page.
          </p>
          <button
            onClick={this.handleReset}
            className="pixel-btn text-xs"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
