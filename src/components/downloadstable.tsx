import React from 'react';
import { FaDownload } from 'react-icons/fa';

const DownloadsTable = () => {
  return (
    <section id="downloads" className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-8">Downloads (Coming Soon)</h2>
        <table className="w-full border border-gray-300">
          <thead>
            <tr>
              <th className="w-1/3 border-b border-gray-300 py-2 px-4 bg-gray-100">Operating System</th>
              <th className="w-1/3 border-b border-gray-300 py-2 px-4 bg-gray-100">Version</th>
              <th className="w-1/3 border-b border-gray-300 py-2 px-4 bg-gray-100 text-center">Download</th>
            </tr>
          </thead>
          <tbody>
            {[
              { os: "Windows 64x", version: "v1.0.1" },
              { os: "Mac OS", version: "v1.0.1" },
              { os: "Linux", version: "v1.0.1" },
            ].map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border-b border-gray-300 py-2 px-4">{item.os}</td>
                <td className="border-b border-gray-300 py-2 px-4">{item.version}</td>
                <td className="border-b border-gray-300 py-2 px-4 text-center">
                  <button
                    className="inline-flex items-center justify-center text-gray-500 cursor-not-allowed"
                    disabled
                    aria-label={`Download ${item.os} - Coming Soon`}
                  >
                    <FaDownload className="h-5 w-5 mr-2" />
                    Coming Soon
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DownloadsTable;
