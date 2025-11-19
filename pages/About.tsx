import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">About Abba Pascal</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
           <p className="text-lg text-gray-700 mb-4 leading-relaxed">
             Founded in 1998, Abba Pascal Catholic School has served the community of Addis Ababa for over two decades. Named after the visionary Abba Pascal, our institution is dedicated to closing the gap in quality education in the region.
           </p>
           <p className="text-lg text-gray-700 leading-relaxed">
             We started with just 50 students and have grown to a vibrant community of over 1,500 learners, guided by a dedicated staff of 80 teachers.
           </p>
        </div>
        <img src="https://picsum.photos/600/400?grayscale" alt="School History" className="rounded-lg shadow-md" />
      </div>

      <div className="bg-blue-50 p-8 rounded-xl mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Leadership</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center bg-white p-6 rounded-lg shadow-sm">
              <img src={`https://picsum.photos/100/100?random=${i+10}`} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" alt="Leader" />
              <h3 className="font-bold text-gray-900">Brother Director</h3>
              <p className="text-sm text-gray-500">Principal</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;