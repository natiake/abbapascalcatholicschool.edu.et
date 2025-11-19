import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Campus', 'Sports', 'Events'];

  const photos = [
    { id: 1, cat: 'Campus', src: 'https://picsum.photos/400/300?random=1' },
    { id: 2, cat: 'Sports', src: 'https://picsum.photos/400/300?random=2' },
    { id: 3, cat: 'Events', src: 'https://picsum.photos/400/300?random=3' },
    { id: 4, cat: 'Campus', src: 'https://picsum.photos/400/300?random=4' },
    { id: 5, cat: 'Sports', src: 'https://picsum.photos/400/300?random=5' },
    { id: 6, cat: 'Events', src: 'https://picsum.photos/400/300?random=6' },
  ];

  const displayed = filter === 'All' ? photos : photos.filter(p => p.cat === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Photo Gallery</h1>
      
      <div className="flex justify-center space-x-4 mb-12">
        {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)} 
             className={`px-4 py-2 rounded-full text-sm font-medium transition ${filter === c ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                {c}
            </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayed.map(p => (
            <div key={p.id} className="group relative h-64 overflow-hidden rounded-lg shadow-md cursor-pointer">
                <img src={p.src} alt="Gallery" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-end p-4">
                    <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition">{p.cat}</span>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;