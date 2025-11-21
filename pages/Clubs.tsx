import React from 'react';

const Clubs: React.FC = () => {
  const clubs = [
    {
      name: "Science & Robotics",
      desc: "Students explore physics, chemistry, and coding through hands-on experiments.",
      img: "https://picsum.photos/400/300?random=101"
    },
    {
      name: "Charity Club",
      desc: "Focusing on community service, visiting elderly homes, and organizing food drives.",
      img: "https://picsum.photos/400/300?random=102"
    },
    {
      name: "Football Team",
      desc: "The Abba Pascal Lions compete in regional tournaments annually.",
      img: "https://picsum.photos/400/300?random=103"
    },
    {
      name: "Literature & Debate",
      desc: "Sharpening critical thinking and public speaking skills in Amharic and English.",
      img: "https://picsum.photos/400/300?random=104"
    },
    {
      name: "Art & Music",
      desc: "Creative expression through painting, choir, and traditional instruments.",
      img: "https://picsum.photos/400/300?random=105"
    },
    {
      name: "Scouts",
      desc: "Developing discipline, survival skills, and leadership outdoors.",
      img: "https://picsum.photos/400/300?random=106"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Student Life</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">Education is more than just grades. Explore the vibrant extra-curricular activities at Abba Pascal.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {clubs.map((club, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-100">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img src={club.img} alt={club.name} className="w-full h-full object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{club.name}</h3>
                <p className="text-gray-600 leading-relaxed">{club.desc}</p>
                <button className="mt-4 text-blue-600 font-bold text-sm uppercase tracking-wide hover:text-blue-800">
                  Learn More &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-yellow-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Want to start a new club?</h2>
          <p className="text-gray-600 mb-8">We encourage student leadership. Propose your idea to the student council.</p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition">Download Proposal Form</button>
        </div>
      </div>
    </div>
  );
};

export default Clubs;