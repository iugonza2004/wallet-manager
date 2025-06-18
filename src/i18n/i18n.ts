import { createI18n } from "vue-i18n";

import ca from '@/i18n/langs/ca';
import en from '@/i18n/langs/en';

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: window.navigator.language.slice(0, 2),
    fallbackLocale: 'en',
    messages: {
        ca,
        en
    }
});


export default i18n;