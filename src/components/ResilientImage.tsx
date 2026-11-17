import {useState} from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'lazy' | 'eager';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F4EAD9] via-[#FAF7F2] to-[#EAD9BC] p-6 text-center text-[#3B1230] ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          className="mb-3 h-9 w-9 text-[#C59B5F]"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="6"
            y="8"
            width="36"
            height="32"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M24 16c2 4 2 8 0 11-2-3-2-7 0-11zm0 11c4.5-2 8-.5 10 2.5-4 2-7.5 1-10-2.5zm0 0c-4.5-2-8-.5-10 2.5 4 2 7.5 1 10-2.5z"
            fill="currentColor"
          />
        </svg>
        <span className="font-display text-lg font-semibold leading-snug">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
