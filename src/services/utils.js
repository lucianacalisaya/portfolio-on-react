import en from '../translations/en.json'
import es from '../translations/es.json'
import fr from '../translations/fr.json'
import sk from '../translations/sk.json'
export function getTranslation(key, languageContext) {
    const translations = {
        en,
        es,
        fr,
        sk
    } 

    return translations[languageContext.language][key]
}
