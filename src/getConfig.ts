import CONFIG_EN from './gitprofile.config.en';
import CONFIG_FR from './gitprofile.config.fr';

export const getConfig = (language?: string) => {
  const lang =
    language ?? (localStorage.getItem('gitprofile-language') || 'en');
  return lang === 'fr' ? CONFIG_FR : CONFIG_EN;
};
