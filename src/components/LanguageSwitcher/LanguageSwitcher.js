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
            <button className='switcher__button' value='en'>ENG</button>
            <button className='switcher__button' value='es'>SPA</button>
        </div>
    )

};

export default LanguageSwitcher
