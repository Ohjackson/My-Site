interface PreviewDesktopPhotoProps {
  src: string;
  alt: string;
  onLoad?: () => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onClick?: () => void;
}

export function PreviewDesktopPhoto({ src, alt, onLoad, onError, onClick }: PreviewDesktopPhotoProps) {
  // 1728x1117 비율을 유지하면서 높이를 406px로 맞춤
  // 비율: 1728/1117 ≈ 1.547
  // 높이 406px일 때 너비: 406 * 1.547 ≈ 628px
  return (
    <div 
      className="w-[628px] h-[406px] rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
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
