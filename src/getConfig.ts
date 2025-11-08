import CONFIG_EN from './gitprofile.config.en';
import CONFIG_FR from './gitprofile.config.fr';

export const getConfig = () => {
  const language = localStorage.getItem('gitprofile-language') || 'en';
  return language === 'fr' ? CONFIG_FR : CONFIG_EN;
};
