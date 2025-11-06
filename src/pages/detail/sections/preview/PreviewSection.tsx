import { useState } from 'react';
import { PreviewPhoto } from './PreviewPhoto';
import { PreviewDesktopPhoto } from './PreviewDesktopPhoto';
import { ImageModal } from './ImageModal';
import { YouTubeVideo } from './YouTubeVideo';

interface PreviewData {
  screenshots?: string[];
  youtubeVideoId?: string;
  description?: string | { ko: string; en: string; ja: string };
}

interface PreviewSectionProps {
  data: PreviewData;
  language: 'ko' | 'en' | 'ja';
  backgroundColor: string;
}

export function PreviewSection({ data, language, backgroundColor }: PreviewSectionProps) {
  const [modalImage, setModalImage] = useState<string | null>(null);

  // 데이터가 없거나 스크린샷과 YouTube 비디오가 모두 없으면 null 반환
  if (!data || (!data.screenshots?.length && !data.youtubeVideoId)) return null;

  console.log('PreviewSection data:', data);
  console.log('PreviewSection screenshots:', data.screenshots);
  console.log('PreviewSection youtubeVideoId:', data.youtubeVideoId);

  const content = {
    ko: { title: "미리보기" },
    en: { title: "Preview" },
    ja: { title: "プレビュー" }
  };

  const handleImageClick = (src: string) => {
    setModalImage(src);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <section className={`py-16 px-8 ${backgroundColor}`}>
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content[language].title}
        </h2>
        
        {/* YouTube 비디오가 있으면 표시 */}
        {data.youtubeVideoId && (
          <div className="mb-8">
            <YouTubeVideo 
              videoId={data.youtubeVideoId}
              title={`${content[language].title} Video`}
            />
          </div>
        )}
        
        {/* 스크린샷이 있으면 표시 */}
        {data.screenshots && data.screenshots.length > 0 && (
          <div className="flex gap-6 justify-center flex-wrap">
            {data.screenshots.map((screenshot, idx) => {
              console.log(`Rendering screenshot ${idx + 1}:`, screenshot);
              
              // 파일명을 보고 데스크탑 사진인지 모바일 사진인지 구분
              const isDesktopPhoto = screenshot.includes('DeskShot-');
              
              return isDesktopPhoto ? (
                <PreviewDesktopPhoto
                  key={idx}
                  src={screenshot}
                  alt={`Desktop Screenshot ${idx + 1}`}
                  onLoad={() => {
                    console.log(`✅ Desktop image loaded successfully: ${screenshot}`);
                  }}
                  onError={(e) => {
                    console.error(`❌ Desktop image failed to load: ${screenshot}`);
                    console.error('Error details:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                  onClick={() => handleImageClick(screenshot)}
                />
              ) : (
                <PreviewPhoto
                  key={idx}
                  src={screenshot}
                  alt={`Mobile Screenshot ${idx + 1}`}
                  onLoad={() => {
                    console.log(`Mobile image loaded successfully: ${screenshot}`);
                  }}
                  onError={(e) => {
                    console.warn(`Mobile image failed to load: ${screenshot} - hiding image`);
                    e.currentTarget.style.display = 'none';
                  }}
                  onClick={() => handleImageClick(screenshot)}
                />
              );
            })}
          </div>
        )}
      </div>
      
      <ImageModal
        isOpen={modalImage !== null}
        onClose={handleCloseModal}
        src={modalImage || ''}
        alt="Preview Image"
      />
    </section>
  );
}