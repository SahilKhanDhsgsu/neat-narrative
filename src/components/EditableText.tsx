
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  isEditing: boolean;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const EditableText: React.FC<EditableTextProps> = ({
  value,
  onChange,
  isEditing,
  className,
  placeholder = "Enter text...",
  multiline = false,
  as = 'p'
}) => {
  const [localValue, setLocalValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleBlur = () => {
    onChange(localValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      inputRef.current?.blur();
    }
    if (e.key === 'Escape') {
      setLocalValue(value);
      inputRef.current?.blur();
    }
  };

  if (isEditing) {
    const baseInputClasses = cn(
      "w-full bg-transparent border-2 border-dashed border-blue-300 rounded px-2 py-1",
      "focus:outline-none focus:border-blue-500 transition-colors duration-200",
      className
    );

    if (multiline) {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(baseInputClasses, "resize-none min-h-[60px]")}
          rows={3}
        />
      );
    }

    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={baseInputClasses}
      />
    );
  }

  const Element = as;
  return (
    <Element className={cn(className, isEditing && "hover:bg-gray-50 rounded transition-colors duration-200")}>
      {value || placeholder}
    </Element>
  );
};

export default EditableText;
