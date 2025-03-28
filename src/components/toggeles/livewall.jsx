"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Folder, File, X, Plus, Search } from "lucide-react";
import Navbar from "../navbar";

export default function FileExplorer() {
  const [files, setFiles] = useState([
    {
      id: "1",
      name: "Baandi Road",
      type: "folder",
      isExpanded: true,
      children: [
        { id: "1-1", name: "Cat Chowk 01", type: "file" },
        { id: "1-2", name: "Cat Chowk 02", type: "file", isSelected: true },
      ],
    },
    { id: "2", name: "KINOU", type: "folder", isExpanded: false, children: [] },
    { id: "3", name: "Moold And Flyover", type: "folder", isExpanded: false, children: [] },
    { id: "4", name: "Andheria Mor", type: "folder", isExpanded: false, children: [] },
    { id: "5", name: "Andheria Mor", type: "folder", isExpanded: false, children: [] },
    { id: "6", name: "Andheria Mor", type: "folder", isExpanded: true, children: [
        { id: "1-1", name: "Cat Chowk 02", type: "file" },
        { id: "1-2", name: "Cat Chowk 02", type: "file" },
    ] },
  ]);

  const [images, setImages] = useState(
    Array(9).fill(null).map((_, index) => ({
      id: `img-${index + 1}`,
      title: "Cat Chowk 02",
      url: "/livewall/Car.png",
    }))
  );

  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleFolder = (id) => {
    setFiles(files.map(file => 
      file.id === id ? { ...file, isExpanded: !file.isExpanded } : file
    ));
  };

  const selectFile = (id) => {
    setFiles(files.map(file => ({
      ...file, 
      isSelected: file.id === id
    })));
  };

  const closeImage = (id) => {
    setImages(images.filter(img => img.id !== id));
  };

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
    document.body.style.overflow = 'unset'; // Enable scrolling
  };

  const FileItem = ({ item, depth = 0 }) => {
    const isFolder = item.type === "folder";
    const Icon = isFolder ? Folder : File;
    const ChevronIcon = item.isExpanded ? ChevronDown : ChevronRight;

    return (
      <>
        <div 
          className={`flex items-center py-1 px-2 hover:bg-gray-100 cursor-pointer ${item.isSelected ? "bg-gray-100" : ""}`}
          style={{ paddingLeft: `${depth * 1.5}rem` }}
          onClick={() => isFolder ? toggleFolder(item.id) : selectFile(item.id)}
        >
          {isFolder ? <ChevronIcon size={16} className="mr-1" /> : <span className="mr-1 w-4"></span>}
          <Icon size={16} className={`mr-2 ${isFolder ? 'text-blue-500' : 'text-gray-500'}`} />
          <span className="text-sm">{item.name}</span>
        </div>
        
        {isFolder && item.isExpanded && item.children && (
          <div>
            {item.children.map(child => (
              <FileItem key={child.id} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        
        <div className="md:w-[20%] overflow-y-auto p-2">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-lg border border-gray-200 mb-6">
            <input
              type="text"
              placeholder="Search"  
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
            />
            <Search className="text-gray-700 p-4" size={20} />
          </div>

          {files.map(file => <FileItem key={file.id} item={file} />)}
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map(image => (
              <div 
                key={image.id} 
                className="bg-white rounded-lg overflow-hidden shadow-sm border relative cursor-pointer"
                onClick={() => openModal(image)} // Open modal on click
              >
                <div className="flex justify-between items-center p-2 bg-gray-100">
                  <span className="text-sm font-medium">{image.title}</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => closeImage(image.id)} className="text-gray-400 hover:text-gray-600">
                      <X size={16} />
                    </button>
                  </div>
                </div>
                <img
                  src={image.url}
                  alt={`${image.title}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-6">
        <button className="rounded-full bg-primary bg-gray-800 text-white flex items-center px-3 py-2">
          <Plus size={16} className="mr-1" />
          Add Folder
        </button>
      </div>

      {/* Modal for Fullscreen View */} 
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden" style={{ width: '80%', height: '80%' }}>
            <button onClick={closeModal} className="absolute top-2 right-5 text-white hover:text-gray-800">
              <X size={24} />
            </button>
            <img
              src={modalImage.url}
              alt={modalImage.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}