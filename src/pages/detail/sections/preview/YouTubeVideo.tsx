interface YouTubeVideoProps {
  videoId: string;
  title?: string;
}

export function YouTubeVideo({ videoId, title }: YouTubeVideoProps) {
  // YouTube URL에서 video ID 추출 (만약 전체 URL이 들어온 경우)
  const extractVideoId = (idOrUrl: string): string => {
    // YouTube URL 패턴들
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    ];
    
    for (const pattern of patterns) {
      const match = idOrUrl.match(pattern);
      if (match) {
        return match[1];
      }
    }
    
    // 이미 video ID인 경우 그대로 반환
    return idOrUrl;
  };

  const cleanVideoId = extractVideoId(videoId);
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${cleanVideoId}?rel=0&modestbranding=1`}
          title={title || 'YouTube video player'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

