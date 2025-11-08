import { RiGlobalLine } from 'react-icons/ri';
import { skeleton } from '../../utils';
import { MouseEvent as ReactMouseEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageConfig {
  code: string;
  label: string;
  nativeLabel: string;
}

const LANGUAGES: LanguageConfig[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'fr', label: 'French', nativeLabel: 'Français' },
];

interface LanguageChangerProps {
  language: string;
  setLanguage: (language: string) => void;
  loading: boolean;
}

/**
 * Renders a language changer component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.language - The current language.
 * @param {function} props.setLanguage - A function to set the language.
 * @param {boolean} props.loading - Whether the component is in a loading state.
 * @return {JSX.Element} The rendered language changer component.
 */
const LanguageChanger = ({
  language,
  setLanguage,
  loading,
}: LanguageChangerProps) => {
  const { i18n } = useTranslation();

  // Detect system language on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('gitprofile-language');
    
    if (!savedLanguage) {
      // No saved preference, detect system language
      const systemLang = navigator.language.toLowerCase();
      const detectedLang = systemLang.startsWith('fr') ? 'fr' : 'en';
      
      i18n.changeLanguage(detectedLang);
      setLanguage(detectedLang);
      document.querySelector('html')?.setAttribute('lang', detectedLang);
    }
  }, [i18n, setLanguage]);

  const changeLanguage = (
    e: ReactMouseEvent<HTMLAnchorElement>,
    selectedLanguage: string,
  ) => {
    e.preventDefault();

    // Change language in i18n (this handles localStorage automatically)
    i18n.changeLanguage(selectedLanguage);
    
    // Update HTML lang attribute
    document.querySelector('html')?.setAttribute('lang', selectedLanguage);

    // Update local state
    setLanguage(selectedLanguage);
  };

  const currentLanguage = LANGUAGES.find((lang) => lang.code === language);

  return (
    <div className="card overflow-visible shadow-lg card-sm bg-base-100">
      <div className="flex-row items-center space-x-4 flex pl-6 pr-2 py-4">
        <div className="flex-1">
          <h5 className="card-title">
            {loading ? (
              skeleton({
                widthCls: 'w-20',
                heightCls: 'h-8',
                className: 'mb-1',
              })
            ) : (
              <span className="text-base-content opacity-70">Language</span>
            )}
          </h5>
          <span className="text-base-content/50 text-sm">
            {loading
              ? skeleton({ widthCls: 'w-16', heightCls: 'h-5' })
              : currentLanguage?.nativeLabel || 'English'}
          </span>
        </div>
        <div className="flex-0">
          {loading ? (
            skeleton({
              widthCls: 'w-12',
              heightCls: 'h-10',
              className: 'mr-6',
            })
          ) : (
            <div title="Change Language" className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="btn btn-ghost m-1 normal-case opacity-50 text-base-content flex items-center whitespace-nowrap"
              >
                <RiGlobalLine className="inline-block w-5 h-5 stroke-current" />
              </div>
              <div
                tabIndex={0}
                className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content max-h-96 min-w-max rounded-lg bg-base-200 text-base-content z-10"
              >
                <ul className="p-4 menu menu-sm">
                  {LANGUAGES.map((lang) => (
                    <li key={lang.code}>
                      <a
                        onClick={(e) => changeLanguage(e, lang.code)}
                        className={`${language === lang.code ? 'active' : ''}`}
                      >
                        <span className="opacity-60">
                          {lang.nativeLabel}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageChanger;