interface PreviewPhotoProps {
  src: string;
  alt: string;
  onLoad?: () => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export function PreviewPhoto({ src, alt, onLoad, onError }: PreviewPhotoProps) {
  return (
    <div className="w-[187.5px] h-[406px] rounded-2xl overflow-hidden shadow-lg">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  );
}
