import React, { useRef, useState } from "react";
import "./ImageUpload.css";
const isDev = import.meta.env.DEV;

const ImageUpload = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      if (isDev) console.log("Files dropped:", files[0].name);
      onFileSelect(files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      if (isDev) console.log("File selected:", e.target.files[0].name);
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div
      className={`property-form-filefield ${isDragOver ? "dragover" : ""}`}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      📎 Chose property image from files or dragover
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ImageUpload;
