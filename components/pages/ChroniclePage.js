

import React from 'react';
import { useAppContext } from '../../contexts/AppContext.js';
import { Dream } from '../../types.js';

const DreamItem: React.FC<{ dream: Dream; onSelect: (id: number) => void }> = ({ dream, onSelect }) => {
    return (
        <div
            className="bg-day-card-bg dark:bg-night-card-bg backdrop-blur-lg border border-day-border dark:border-night-border p-4 rounded-lg cursor-pointer hover:shadow-xl transition-shadow flex gap-4"
            onClick={() => onSelect(dream.id)}
        >
            {dream.imageUrl ? (
                <img src={dream.imageUrl} alt={dream.title} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
            ) : (
                <div className="w-20 h-20 rounded-md bg-gray-200 dark:bg-gray-700 flex-shrink-0 animate-pulse"></div>
            )}
            <div className="overflow-hidden">
                <p className="font-serif text-lg font-bold truncate">{dream.title || 'Untitled Dream'}</p>
                <p className="text-sm text-day-text-secondary dark:text-night-text-secondary mb-2">
                    {new Date(dream.timestamp).toLocaleDateString([], { month: 'long', day: 'numeric' })}
                </p>
                <p className="text-sm line-clamp-2">{dream.dreamText}</p>
            </div>
        </div>
    );
};


export const ChroniclePage: React.FC<{ onDreamSelect: (id: number) => void }> = ({ onDreamSelect }) => {
    const { dreams } = useAppContext();

    return (
        <div>
            <h1 className="font-serif page-title text-4xl text-center mb-8">The Chronicle</h1>
            <div className="space-y-4 max-w-2xl mx-auto">
                {dreams.length > 0 ? (
                    dreams.map(dream => (
                        <DreamItem key={dream.id} dream={dream} onSelect={onDreamSelect} />
                    ))
                ) : (
                    <p className="text-center text-day-text-secondary dark:text-night-text-secondary">Your dream journal is empty.</p>
                )}
            </div>
        </div>
    );
};