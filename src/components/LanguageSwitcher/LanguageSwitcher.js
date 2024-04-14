import {useContext} from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './LanguageSwitcher.scss'

const LanguageSwitcher = () => {
    const { language, updateLanguage } = useContext(LanguageContext)

    const handleUpdateLanguage = ({target: {value} }) => {
        updateLanguage(value)
    };
    console.log(language)
    return (
        <div className='switcher' value={language} onClick={handleUpdateLanguage}>
            <button className='switcher__button switcher__button--eng' value='en'></button>
            <button className='switcher__button switcher__button--spa' value='es'></button>
            <button className='switcher__button switcher__button--fr' value='fr'></button>
        </div>
    )

};

export default LanguageSwitcher
