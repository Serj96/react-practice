import { createContext, useState } from 'react';

export const LangContext = createContext('ua');

export const LangProvider = (props) => {
    const [lang, setLang] = useState('ua');
        console.log(lang);

  const handleChangeLang = () => {
    setLang(prev => (prev === 'ua' ? 'en' : 'ua'));
  };
  return (
      <LangContext.Provider value={{ lang, handleChangeLang }}>
      {props.children}
    </LangContext.Provider>
  );
};
