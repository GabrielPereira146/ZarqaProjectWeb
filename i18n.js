import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend'; // Para carregar traduções via HTTP
import { initReactI18next } from 'react-i18next'; // Se estiver usando React

i18next
  .use(LanguageDetector)
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    // ...
    backend: {
      loadPath: '/src/locales/{{lng}}/translation.json',
    },
  }, (err, t) => {
    if (err) {
      console.error('Erro ao carregar traduções:', err);
    } else {
      console.log('Traduções carregadas:', t.resources);
      console.log('Lng:', t.lng);
      console.log('Ns:', t.ns);
      console.log('T:', t('welcome')); // Deve imprimir "Bem-vindo ao"
    }
  });