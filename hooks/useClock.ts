
import { useState, useEffect } from 'react';
import { Theme } from '../types';

export const useClock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    const hours = date.getHours();
    const theme: Theme = (hours >= 6 && hours < 19) ? 'day' : 'night';
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).replace(" AM", "").replace(" PM", "");
    const dateString = date.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });

    useEffect(() => {
        if (theme === 'night') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return { timeString, dateString, theme, date };
};
