import React from 'react';

const Downloads: React.FC = () => {
  const files = [
    { name: 'Student Handbook 2024', size: '2.4 MB', type: 'PDF' },
    { name: 'Academic Calendar 2017 E.C.', size: '1.1 MB', type: 'PDF' },
    { name: 'Admission Form (Offline)', size: '500 KB', type: 'DOCX' },
    { name: 'Code of Conduct', size: '1.8 MB', type: 'PDF' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Downloads & Resources</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {files.map((file, idx) => (
            <li key={idx}>
              <div className="px-4 py-4 sm:px-6 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                        {file.type}
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-blue-600 truncate">{file.name}</p>
                        <p className="text-sm text-gray-500">{file.size}</p>
                    </div>
                </div>
                <div className="ml-2 flex-shrink-0 flex">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Download</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Downloads;