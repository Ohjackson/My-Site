interface PreviewPhotoProps {
  src: string;
  alt: string;
  onLoad?: () => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onClick?: () => void;
}

export function PreviewPhoto({ src, alt, onLoad, onError, onClick }: PreviewPhotoProps) {
  return (
    <div 
      className="w-[187.5px] h-[406px] rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={onClick}
    >
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
