import { useContext } from 'react';
import { LangContext } from 'context/context';

export default function useLang() {
  const { lang, handleChangeLang } = useContext(LangContext);
  return { lang, handleChangeLang };
}
