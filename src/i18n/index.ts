import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend'; // Para carregar traduções via HTTP
import { initReactI18next } from 'react-i18next'; // Se estiver usando React
import ptBR from './translations/pt-br.json';
import enUS from './translations/en-us.json';

i18next
    .use(LanguageDetector)
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        },
        lng: 'enUS',
        resources: {
            ptBR: ptBR,
            enUS: enUS
        },
    });