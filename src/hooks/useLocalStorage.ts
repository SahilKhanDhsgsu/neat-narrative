
import { useState, useEffect, useCallback } from 'react';
import { PortfolioData } from '../types/portfolio';
import { portfolioData as defaultData } from '../data/portfolioData';

const STORAGE_KEY = 'portfolio-data';
const SAVE_DEBOUNCE_MS = 500;

export const useLocalStorage = () => {
  const [data, setData] = useState<PortfolioData>(defaultData);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedData = JSON.parse(stored);
        setData({ ...defaultData, ...parsedData });
      }
    } catch (error) {
      console.error('Failed to load portfolio data from localStorage:', error);
    }
  }, []);

  // Debounced save function
  const saveData = useCallback((newData: PortfolioData) => {
    setIsSaving(true);
    
    const timeoutId = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
        setLastSaved(new Date());
      } catch (error) {
        console.error('Failed to save portfolio data to localStorage:', error);
      } finally {
        setIsSaving(false);
      }
    }, SAVE_DEBOUNCE_MS);

    return () => clearTimeout(timeoutId);
  }, []);

  // Update data and save
  const updateData = useCallback((newData: PortfolioData) => {
    setData(newData);
    saveData(newData);
  }, [saveData]);

  // Reset to default data
  const resetData = useCallback(() => {
    setData(defaultData);
    localStorage.removeItem(STORAGE_KEY);
    setLastSaved(null);
  }, []);

  return {
    data,
    updateData,
    resetData,
    isSaving,
    lastSaved
  };
};
