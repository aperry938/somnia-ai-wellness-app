// hooks/useAlarmManager.ts
import { useState, useEffect } from 'react';
import { Alarm } from '../types';
import { useClock } from './useClock';
import { useAppContext } from '../contexts/AppContext';

export const useAlarmManager = () => {
    const { alarms, toggleAlarmActive } = useAppContext();
    const { date } = useClock();
    const [ringingAlarm, setRingingAlarm] = useState<Alarm | null>(null);

    useEffect(() => {
        const checkAlarms = () => {
            if (ringingAlarm) return; // Don't check for new alarms if one is already ringing

            const currentTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
            
            const triggeredAlarm = alarms.find(alarm => alarm.time === currentTime && alarm.isActive);

            if (triggeredAlarm) {
                setRingingAlarm(triggeredAlarm);
            }
        };

        checkAlarms();
    }, [date, alarms, ringingAlarm]);

    const stopRinging = () => {
        if (ringingAlarm) {
            // Deactivate the alarm so it doesn't ring again the next minute
            toggleAlarmActive(ringingAlarm.id);
            setRingingAlarm(null);
        }
    };
    
    const snooze = () => {
         // For now, snooze just stops the alarm. A timeout could be added here.
        setRingingAlarm(null);
    }

    return { ringingAlarm, stopRinging, snooze };
};
