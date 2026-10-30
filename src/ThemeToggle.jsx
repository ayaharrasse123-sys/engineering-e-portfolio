import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ lang }) {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') === 'dark'; } catch { return false; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); } catch {}
  }, [dark]);
  const label = lang === 'fr' ? (dark ? 'clair' : 'sombre') : (dark ? 'light' : 'dark');
  return <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={lang === 'fr' ? 'Changer le thème' : 'Toggle color theme'} aria-pressed={dark}>{dark ? <Sun size={16}/> : <Moon size={16}/>}<span>{label}</span></button>;
}
