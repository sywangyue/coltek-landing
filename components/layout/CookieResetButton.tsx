'use client';

export default function CookieResetButton({ label }: { label: string }) {
  const handleClick = () => {
    localStorage.removeItem('cookie-consent');
    window.dispatchEvent(new StorageEvent('storage', { key: 'cookie-consent' }));
    window.location.reload();
  };

  return (
    <button
      onClick={handleClick}
      className="text-xs text-foreground-muted hover:text-primary transition-colors"
    >
      {label}
    </button>
  );
}
