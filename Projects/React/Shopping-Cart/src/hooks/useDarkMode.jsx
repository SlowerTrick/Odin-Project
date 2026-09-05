import { useEffect, useState } from "react";

export function useDarkMode() {
    const [theme, setTheme] = useState(() => {
        try {
            if (typeof window !== "undefined" && window.localStorage) {
                const savedTheme = window.localStorage.getItem("theme");
                if (savedTheme) return savedTheme;
            }

            if (typeof window !== "undefined" && window.matchMedia) {
                const prefersDark = window.matchMedia(
                    "(prefers-color-scheme: dark)"
                ).matches;
                return prefersDark ? "dark" : "light";
            }
        } catch {
            // fallback
        }

        return "light";
    });

    // Dark theme toggle variable
    const [checked, setChecked] = useState(theme === "light" ? false : true);

    // Update Dom and LocalStorage on theme change
    useEffect(() => {
        try {
            const root = document.documentElement;
            // Prevent UI elements from animating when toggling theme
            root.classList.add("disable-transitions");
            root.setAttribute("data-theme", theme);

            if (typeof window !== "undefined" && window.localStorage) {
                window.localStorage.setItem("theme", theme);
            }

            // Force layout reflow so theme colors apply instantly without transitions
            if (typeof window !== "undefined") {
                window.getComputedStyle(root).opacity;
            }

            const timeoutId = setTimeout(() => {
                root.classList.remove("disable-transitions");
            }, 60);

            return () => clearTimeout(timeoutId);
        } catch {
            // fallback
        }
    }, [theme]);

    // Toggle theme function
    const toggleTheme = () => {
        setChecked((prev) => !prev);
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return { theme, toggleTheme, checked };
}
