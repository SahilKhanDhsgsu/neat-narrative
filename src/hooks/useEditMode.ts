
import { useState, useCallback } from 'react';

export const useEditMode = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = useCallback(() => {
    setIsEditMode(prev => !prev);
  }, []);

  const enableEditMode = useCallback(() => {
    setIsEditMode(true);
  }, []);

  const disableEditMode = useCallback(() => {
    setIsEditMode(false);
  }, []);

  return {
    isEditMode,
    toggleEditMode,
    enableEditMode,
    disableEditMode
  };
};
