import { useEffect, useState } from 'react';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==' as const;

// 일시적인 네트워크 실패로 이미지가 사라지지 않도록 몇 번 다시 시도한다
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 800;

const withRetryParam = (src: string, attempt: number) => {
  if (attempt === 0 || src.startsWith('data:') || src.startsWith('blob:')) return src;
  return `${src}${src.includes('?') ? '&' : '?'}retry=${attempt}`;
};

export const ImageWithFallback = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [attempt, setAttempt] = useState(0);
  const [didError, setDidError] = useState(false);
  const { src, className, style, alt, onError, ...rest } = props;

  useEffect(() => {
    setAttempt(0);
    setDidError(false);
  }, [src]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (src && attempt < MAX_RETRIES) {
      window.setTimeout(() => setAttempt((prev) => prev + 1), RETRY_DELAY_MS * (attempt + 1));
      return;
    }
    setDidError(true);
    onError?.(e);
  };

  if (didError) {
    return (
      <div
        className={`inline-block align-middle border border-border bg-surface text-center text-muted ${className ?? ''}`}
        style={style}
      >
        <div className="flex h-full w-full items-center justify-center">
          <img src={ERROR_IMG_SRC} alt="Error loading" {...rest} data-original-url={src} />
        </div>
      </div>
    );
  }

  return (
    <img
      src={src ? withRetryParam(src, attempt) : src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
    />
  );
};
