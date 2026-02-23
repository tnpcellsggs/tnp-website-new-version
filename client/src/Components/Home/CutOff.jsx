import React, { useState, useEffect } from 'react';
import { Download, Maximize, Minimize, ZoomIn, ZoomOut, RotateCw, Home } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className={`bg-white rounded-lg shadow-lg ${isFullscreen ? 'fixed inset-0 z-50 flex flex-col' : 'max-w-4xl w-full'}`}>
        <header className="flex items-center justify-between p-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <div>
            <h1 className="text-2xl font-bold text-blue-800">{imageData.name}</h1>
            <p className="text-blue-600 text-sm font-medium">Uploaded: {imageData.uploadDate}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm text-white font-medium transition-all duration-200 transform hover:scale-105 shadow"
            >
              <Download size={16} />
              <span>Save Image</span>
            </button>
            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105"
            >
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
              <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
            </button>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto relative p-6 flex items-center justify-center bg-white">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm">
              <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
          )}
          <div className="overflow-auto max-w-full max-h-full">
            <img
              src={imageData.link}
              alt={imageData.name}
              style={{
                transform: `rotate(${rotation}deg) scale(${zoomLevel/100})`,
                transition: "transform 0.3s ease"
              }}
              className="max-w-full object-contain rounded-md shadow-md"
              onLoad={handleImageLoad}
            />
          </div>
        </div>
        
        <div className="p-5 border-t border-gray-100 flex justify-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-b-lg">
          <div className="flex items-center gap-4 p-2 bg-white rounded-full shadow-md">
            <button 
              onClick={zoomIn} 
              className="p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full transition-colors duration-200" 
              aria-label="Zoom in"
              title="Zoom In"
            >
              <ZoomIn size={20} />
            </button>
            <span className="text-blue-800 font-medium px-2">{zoomLevel}%</span>
            <button 
              onClick={zoomOut} 
              className="p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full transition-colors duration-200" 
              aria-label="Zoom out"
              title="Zoom Out"
            >
              <ZoomOut size={20} />
            </button>
            <div className="h-8 w-px bg-gray-200 mx-1"></div>
            <button 
              onClick={rotate} 
              className="p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full transition-colors duration-200" 
              aria-label="Rotate"
              title="Rotate 90°"
            >
              <RotateCw size={20} />
            </button>
            <div className="h-8 w-px bg-gray-200 mx-1"></div>
            <button 
              onClick={resetView} 
              className="flex items-center gap-2 px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-full font-medium transition-colors duration-200"
              title="Reset View"
            >
              <Home size={16} />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CutOff;