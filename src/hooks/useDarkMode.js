import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    
    if (isDarkMode) {
      document.documentElement.style.colorScheme = 'dark';
      document.body.style.background = '#111827';
      document.body.style.color = '#f3f4f6';
    } else {
      document.documentElement.style.colorScheme = 'light';
      document.body.style.background = '#ffffff';
      document.body.style.color = '#111827';
    }
  }, [isDarkMode]);

  return { isDarkMode, setIsDarkMode };
};