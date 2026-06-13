import { useEffect, useState } from "react";

export function useDarkMode() {
    const [theme, setTheme] = useState(() => {
        // Check for previous state (last visit)
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme;

        // Check for Operational System Preference
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        return prefersDark ? "dark" : "light";
    });

    // Dark theme toggle variable
    const [checked, setChecked] = useState(theme === "light" ? false : true);

    // Update Dom and LocalStorage on theme change
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle theme function
    const toggleTheme = () => {
        setChecked((prev) => !prev);
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return { theme, toggleTheme, checked };
}
