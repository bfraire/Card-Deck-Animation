import React from 'react';
import './index.css'; // Ensure this CSS file is imported
import sunImage from './assets/waves.webp'; // Import the image

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white">
      {/* Additional Section */}
      <section className="bg-white w-full py-36 mt-16">
        <div className="max-w-6xl mx-auto text-center px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/*Flashcard 1*/}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md border border-gray-200">
              <p className="text-gray-600 py-16 text-4xl font-bold">
                I
              </p>
            </div>

            {/*Flashcard 2*/}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md border border-gray-200">
              <p className="text-gray-600 py-16 text-4xl font-bold">
                ♡
              </p>
            </div>

            {/*Flashcard 3*/}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md border border-gray-200">
              <p className="text-gray-600 py-16 text-4xl font-bold">
                you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-gray-700 py-8 bg-white w-full">
        <p className="text-sm">
          &copy; 2025 BreannaFraire. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;


