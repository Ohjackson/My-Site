import TranslateOutlined from '@mui/icons-material/TranslateOutlined';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { applyLanguageFont } from '@/shared/fonts/fontManager';

const languages = [
  { code: 'en', labelKey: 'language.english' },
  { code: 'ko', labelKey: 'language.korean' },
  { code: 'ja', labelKey: 'language.japanese' }
];

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const handleChange = async (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    await i18n.changeLanguage(value);
    await applyLanguageFont(value);
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <TranslateOutlined fontSize="small" />
      <FormControl size="small" variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel id="language-label">{t('language.label')}</InputLabel>
        <Select
          labelId="language-label"
          label={t('language.label')}
          value={i18n.resolvedLanguage ?? 'en'}
          onChange={handleChange}
        >
          {languages.map((language) => (
            <MenuItem key={language.code} value={language.code}>
              {t(language.labelKey as never)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};
