import React, { useState, useEffect } from 'react';
import { Download, Maximize, Minimize, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

function CutOff() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [rotation, setRotation] = useState(0);
  
  // Image data with Cloudinary link
  const imageData = {
    link: 'https://res.cloudinary.com/dg6qtpags/image/upload/v1741550622/your-cloudinary-folder-name/yvfv7ajn2jwm9ql0xuwh.jpg',
    name: 'Cut-Off Image',
    uploadDate: 'March 10, 2025'
  };
  
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  
  const zoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(zoomLevel + 25);
    }
  };
  
  const zoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 25);
    }
  };
  
  const rotate = () => {
    setRotation((rotation + 90) % 360);
  };
  
  const resetView = () => {
    setZoomLevel(100);
    setRotation(0);
  };
  
  // Handle direct download of the image
  const handleDownload = () => {
    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = imageData.link;
    downloadLink.download = imageData.name + '.jpg'; // Specify filename with extension
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  
  // Handle escape key to exit fullscreen
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-4">
      <div className={`bg-gray-800 rounded-lg shadow-xl ${isFullscreen ? 'fixed inset-0 z-50 flex flex-col' : 'max-w-3xl w-full'}`}>
        <header className="flex items-center justify-between p-4 border-b border-gray-700">
          <div>
            <h1 className="text-xl font-bold">{imageData.name}</h1>
            <p className="text-gray-400 text-sm">Uploaded: {imageData.uploadDate}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
            >
              <Download size={16} />
              <span>Save</span>
            </button>
            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm"
            >
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
              <span>{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
            </button>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto relative p-4 flex items-center justify-center">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
              <div className="w-10 h-10 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
          )}
          <div className="overflow-auto max-w-full max-h-full">
            <img
              src={imageData.link}
              alt={imageData.name}
              style={{
                transform: `rotate(${rotation}deg) scale(${zoomLevel/100})`,
                transition: "transform 0.2s ease"
              }}
              className="max-w-full object-contain"
              onLoad={handleImageLoad}
            />
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-700 flex justify-center">
          <div className="flex items-center gap-3">
            <button onClick={zoomIn} className="p-2 bg-gray-700 hover:bg-gray-600 rounded" aria-label="Zoom in">
              <ZoomIn size={20} />
            </button>
            <span className="text-sm">{zoomLevel}%</span>
            <button onClick={zoomOut} className="p-2 bg-gray-700 hover:bg-gray-600 rounded" aria-label="Zoom out">
              <ZoomOut size={20} />
            </button>
            <button onClick={rotate} className="p-2 bg-gray-700 hover:bg-gray-600 rounded ml-2" aria-label="Rotate">
              <RotateCw size={20} />
            </button>
            <button onClick={resetView} className="ml-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CutOff;  