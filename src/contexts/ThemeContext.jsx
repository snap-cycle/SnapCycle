import {createContext, useEffect, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [darkMode, setDarkMode] = useState(prefersDarkMode);

    useEffect(() => {
        // Listen to changes in user's system preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event) => {
            setDarkMode(event.matches);
        };

        mediaQuery.addEventListener(handleChange);

        // Clean up listener on component unmount
        return () => {
            mediaQuery.removeEventListener(handleChange);
        };
    }, []);
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
