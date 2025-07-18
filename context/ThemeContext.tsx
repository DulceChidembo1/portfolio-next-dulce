import React, { createContext, useContext, useEffect, useState } from "react";


type theme = "light" | "dark";

interface ThemeContextType {
    theme: theme;
    toggleTheme: () => void;
    setTheme: (theme: theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<theme>("light");

    // Atualiza o tema e salva no localStorage
    const handleSetTheme = (newTheme: theme) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    // Alterna entre light e dark
    const toggleTheme = () => {
        handleSetTheme(theme === "light" ? "dark" : "light");
    };

    // Inicializa o tema ao montar
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as theme | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;
        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}