import {type ScreenTone} from '../data/invitations';
import {ResilientImage} from './ResilientImage';

interface IPhoneMockupProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  screenTone?: ScreenTone;
  size?: 'compact' | 'gallery' | 'hero';
  loading?: 'eager' | 'lazy';
  className?: string;
}

export function IPhoneMockup({
  src,
  alt,
  fallbackTitle,
  screenTone = 'dark',
  size = 'gallery',
  loading = 'lazy',
  className = '',
}: IPhoneMockupProps) {
  const isIvory = screenTone === 'ivory';
  const screenBg = isIvory ? 'bg-[#FAF7F2]' : 'bg-[#0A070A]';
  const homeBarColor = isIvory ? 'bg-[#24091D]/30' : 'bg-white/35';

  const frameStyle =
    size === 'compact'
      ? 'rounded-[24px] p-[5px] sm:rounded-[28px] sm:p-[6px]'
      : size === 'hero'
        ? 'rounded-[30px] p-[6px] sm:rounded-[36px] sm:p-[7px]'
        : 'rounded-[32px] p-[6px] sm:rounded-[38px] sm:p-[8px]';

  const innerStyle =
    size === 'compact'
      ? 'rounded-[19px] sm:rounded-[22px]'
      : size === 'hero'
        ? 'rounded-[24px] sm:rounded-[29px]'
        : 'rounded-[26px] sm:rounded-[30px]';

  const islandBarHeight =
    size === 'compact' ? 'h-4 sm:h-5' : 'h-5 sm:h-6';

  const islandPillSize =
    size === 'compact'
      ? 'h-2.5 w-11 sm:h-3 sm:w-12'
      : 'h-3 w-14 sm:h-3.5 sm:w-[70px]';

  const homeBarHeight =
    size === 'compact' ? 'h-3' : 'h-4 sm:h-4';

  const homePillSize =
    size === 'compact' ? 'h-[2px] w-10' : 'h-[2.5px] w-16 sm:w-20';

  return (
    <div className={`relative select-none ${className}`}>
      {/* Soft grounded shadow beneath the device */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 left-1/2 h-5 w-[78%] -translate-x-1/2 rounded-full bg-[#24091D]/20 blur-lg"
      />

      {/* Side hardware buttons (left: action + volume, right: power) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[2px] top-[17%] h-3.5 w-[2.5px] rounded-l-sm bg-[#3C383F]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[2px] top-[25%] h-7 w-[2.5px] rounded-l-sm bg-[#3C383F]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[2px] top-[34%] h-7 w-[2.5px] rounded-l-sm bg-[#3C383F]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[2px] top-[28%] h-10 w-[2.5px] rounded-r-sm bg-[#3C383F]"
      />

      {/* iPhone Pro Max Dark Titanium Outer Chassis (9:19.5 proportions) */}
      <div
        className={`relative aspect-[9/19.5] w-full bg-gradient-to-b from-[#353238] via-[#1C1A1E] to-[#2B282E] shadow-[0_20px_44px_-12px_rgba(36,9,29,0.34)] ring-1 ring-white/15 ${frameStyle}`}
      >
        {/* Inner Screen */}
        <div
          className={`relative flex h-full w-full flex-col overflow-hidden ring-1 ring-black/80 ${screenBg} ${innerStyle}`}
        >
          {/* Top Safe Area + Dynamic Island */}
          <div
            aria-hidden="true"
            className={`relative z-20 flex shrink-0 items-center justify-center ${screenBg} ${islandBarHeight}`}
          >
            <div
              className={`flex items-center justify-end rounded-full bg-[#09080A] px-1.5 ring-1 ring-white/10 ${islandPillSize}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#1C2438] ring-1 ring-[#3D4F7A]/40" />
            </div>
          </div>

          {/* Full Uncropped Invitation Artwork */}
          <div className={`relative flex-1 overflow-hidden ${screenBg}`}>
            <ResilientImage
              src={src}
              alt={alt}
              fallbackTitle={fallbackTitle}
              loading={loading}
              className="h-full w-full object-contain object-center"
            />
          </div>

          {/* Bottom Home Indicator Safe Area */}
          <div
            aria-hidden="true"
            className={`relative z-20 flex shrink-0 items-center justify-center ${screenBg} ${homeBarHeight}`}
          >
            <span className={`rounded-full ${homeBarColor} ${homePillSize}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
