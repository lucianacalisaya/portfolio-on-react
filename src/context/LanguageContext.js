import React, { useState, createContext, useCallback, useEffect } from 'react';

export const LanguageContext = createContext({
    language: 'en',
    stringg: {},
    updateLanguage: () => {}
})

export const LanguageContextProvider = ({children}) => {
    const [language, setLanguage] = useState({
        language: 'en'
    });

    const updateLanguage = useCallback(
		async (newLang) => {
			if (newLang === language) return
			setLanguage({
				language: newLang,
			})
		},
		[language]
	);

	useEffect(() => {
		updateLanguage(language)
	}, [language, updateLanguage]);
    
    const context = {
		language,
		updateLanguage: updateLanguage
	};

    return (
        <LanguageContext.Provider value ={context}>
            {children}
        </LanguageContext.Provider>
    );
}