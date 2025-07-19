import React from 'react';
import './index.css'; // Ensure this CSS file is imported
import { useState } from 'react'; 
import { motion } from "motion/react";
import Flashcard from "./flashcard";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white">
      <section className="bg-white w-full py-36 mt-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Flashcard content="I" />
            <Flashcard content="♡" />
            <Flashcard content="you" />
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-700 py-8 bg-white w-full">
        <p className="text-sm">
          &copy; 2025 BreannaFraire. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;


