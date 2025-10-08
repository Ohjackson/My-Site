import { Globe, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./Button";

interface HeaderProps {
  language: 'ko' | 'en' | 'ja';
  onLanguageChange: (lang: 'ko' | 'en' | 'ja') => void;
  currentView: 'project';
  onNavigateHome: () => void;
  onNavigateToSections: () => void;
}

export function Header({
  language,
  onLanguageChange,
  currentView,
  onNavigateHome,
  onNavigateToSections,
}: HeaderProps) {
  const languageNames = {
    ko: 'KR',
    en: 'EN',
    ja: 'JP'
  };

  const navigationLabels = {
    home: {
      ko: '홈으로',
      en: 'Back to home',
      ja: 'ホームへ戻る'
    }
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const navigationLabel = navigationLabels.home[language];
  const handleNavigation = onNavigateHome;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-surface/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center text-text">
        <div className="text-sm tracking-widest font-medium">
          JAEHYUN AHN
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            onClick={handleNavigation}
            className="h-9 px-3"
          >
            {navigationLabel}
          </Button>
          <Button
            variant="secondary"
            onClick={toggleDarkMode}
            className="h-9 px-3"
            icon={<Moon className="h-4 w-4" strokeWidth={1.5} />}
          >
            Dark
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm text-muted transition-colors hover:border-border hover:text-text">
              <Globe className="h-4 w-4" />
              <span className="tracking-wider">{languageNames[language]}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="border border-border bg-surface text-text shadow-lg">
              <DropdownMenuItem onClick={() => onLanguageChange('ko')} className="text-text/90">
                한국어
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onLanguageChange('en')} className="text-text/90">
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onLanguageChange('ja')} className="text-text/90">
                日本語
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
