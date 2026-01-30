
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          Your Next Big <span className="text-indigo-600">Idea</span> <br className="hidden md:block" />
          Starts Right Here.
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          A minimalist, high-performance starter template designed for developers who value clean code, rapid iteration, and exceptional UI.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all flex items-center justify-center space-x-2">
            <span>Get Started Free</span>
            <i className="fas fa-arrow-right text-xs"></i>
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center space-x-2">
            <i className="fab fa-github"></i>
            <span>View on GitHub</span>
          </button>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-white p-2 rounded-2xl shadow-2xl border border-slate-200 inline-block max-w-full overflow-hidden">
            <img 
              src="https://picsum.photos/1200/600" 
              alt="Application Dashboard Preview" 
              className="rounded-xl w-full h-auto object-cover max-w-4xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
