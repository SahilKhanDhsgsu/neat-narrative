
import React, { useRef, useState } from 'react';
import { Camera, User, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PhotoUploadProps {
  photo?: string;
  name: string;
  isEditing: boolean;
  onPhotoChange: (photoUrl: string) => void;
  className?: string;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({
  photo,
  name,
  isEditing,
  onPhotoChange,
  className
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      // Convert file to base64 for demo purposes
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onPhotoChange(result);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading photo:', error);
      setIsUploading(false);
    }
  };

  const handleUploadClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={cn("relative group", className)}>
      <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-1 shadow-2xl">
        <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
          {photo ? (
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <User size={80} className="text-gray-400" />
            </div>
          )}
          
          {isEditing && (
            <div
              onClick={handleUploadClick}
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              {isUploading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              ) : (
                <div className="text-white text-center">
                  <Camera size={32} className="mx-auto mb-2" />
                  <span className="text-sm">Change Photo</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {isEditing && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      )}

      {/* Floating decoration */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default PhotoUpload;
