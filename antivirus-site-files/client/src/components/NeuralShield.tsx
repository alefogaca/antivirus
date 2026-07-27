export function NeuralShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 2L4 8V16C4 22 9 27 16 30C23 27 28 22 28 16V8L16 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M16 8L10 11V16C10 20 12.5 23 16 25C19.5 23 22 20 22 16V11L16 8Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
      <line x1="16" y1="14" x2="16" y2="10" stroke="currentColor" strokeWidth="0.75" opacity="0.7" />
      <line x1="16" y1="18" x2="16" y2="22" stroke="currentColor" strokeWidth="0.75" opacity="0.7" />
      <line x1="14" y1="16" x2="10" y2="16" stroke="currentColor" strokeWidth="0.75" opacity="0.7" />
      <line x1="18" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="0.75" opacity="0.7" />
      <circle cx="16" cy="10" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="16" cy="22" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="10" cy="16" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="22" cy="16" r="1" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
