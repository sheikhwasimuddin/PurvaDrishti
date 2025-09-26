import React, { useState } from "react";
import { Upload, Image as ImageIcon, AlertTriangle, CheckCircle } from "lucide-react";
import Chatbot from "../components/Chatbot";
export default function DroneImagery() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">🛰️ Drone Imagery Analysis</h1>
        <p className="text-gray-500 text-sm">AI crack & loose block detection</p>
      </header>

      {/* Upload Section */}
      <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center justify-center">
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500"
        >
          <Upload className="w-10 h-10 text-gray-500" />
          <p className="mt-2 text-sm text-gray-600">Click or drag image here</p>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </div>

      {/* Image Preview + AI Overlay */}
      {image && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Image Preview */}
          <div className="col-span-2 bg-white rounded-2xl shadow p-4 flex flex-col">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Processed Drone Image
            </h2>
            <div className="relative flex-1 h-96 bg-gray-200 rounded-xl overflow-hidden">
              <img
                src={image}
                alt="Drone Imagery"
                className="object-cover w-full h-full opacity-80"
              />
              {/* Mock AI Overlay (for demo) */}
              <div className="absolute top-1/3 left-1/4 w-24 h-16 border-4 border-red-500 rounded animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border-4 border-yellow-400 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Detected Issues Panel */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Detected Issues</h2>
            <ul className="space-y-3">
              <li className="flex items-center p-3 bg-red-50 border-l-4 border-red-600 rounded">
                <AlertTriangle className="w-5 h-5 text-red-600 mr-2" /> Major Crack Detected (Bench 3)
              </li>
              <li className="flex items-center p-3 bg-yellow-50 border-l-4 border-yellow-600 rounded">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" /> Loose Rock Identified (Bench 2)
              </li>
              <li className="flex items-center p-3 bg-green-50 border-l-4 border-green-600 rounded">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> No risk zones (Bench 1)
              </li>
            </ul>
          </div>
          
        </div>
        
      )}
      <Chatbot />
    </div>
  );
}
