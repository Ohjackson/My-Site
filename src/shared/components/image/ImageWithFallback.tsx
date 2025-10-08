import { useState } from 'react';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==' as const;

export const ImageWithFallback = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [didError, setDidError] = useState(false);
  const { src, className, style, alt, ...rest } = props;

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

  return <img src={src} alt={alt} className={className} style={style} {...rest} onError={() => setDidError(true)} />;
};
