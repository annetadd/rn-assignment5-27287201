import React, { children, createContext, useContext, useState} from "react";
const ThemeContext = createContext();



export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => {
       setIsDarkTheme((prevMode) => !prevMode);
};

return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
);
};

export const useTheme = () => useContext(ThemeContext);
