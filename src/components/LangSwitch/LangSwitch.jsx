import { LangContext } from "context/context";
import { useContext } from "react";
import styles from './LangSwitch.module.css'




export const LangSwitch = () => {

 const {lang, handleChangeLang} = useContext(LangContext)
  return (
    <div>
      <span
        onClick={handleChangeLang}
        className={lang === 'ua' ? styles.currentLang : styles.lang}
      >
        UA
      </span>
      |
      <span
        onClick={handleChangeLang}
        className={lang === 'en' ? styles.currentLang : styles.lang}
      >
        EN
      </span>
      {/* |
      <span onClick={switchLang} className={lang === 'en' ? styles.currentLang : styles.lang}>
        RU
      </span> */}
    </div>
  );
};
