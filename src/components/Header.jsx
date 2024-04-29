import React from 'react';

const Header = () => {
    return (
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 py-10 sm:py-28">
  <div className="flex flex-col items-center mb-10">
    <h2 className="text-4xl sm:text-7xl font-bold text-center">— What We Do</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="space-y-6">
      <button className="bg-yellow-400 text-black font-semibold py-4 sm:py-7 px-4 sm:px-5 rounded-md transition duration-300 ease-in-out hover:bg-yellow-400 hover:text-black">
        Digital Experience Strategy
      </button>
      <button className="bg-zinc-200 text-zinc-800 font-semibold py-4 sm:py-7 px-4 sm:px-5 rounded-md transition duration-300 ease-in-out hover:bg-yellow-400 hover:text-black">
        Web&amp;Mobile Development
      </button>
      <button className="bg-zinc-200 text-zinc-800 font-semibold py-4 sm:py-7 px-4 sm:px-5 rounded-md transition duration-300 ease-in-out hover:bg-yellow-400 hover:text-black">
        User Experience and Design
      </button>
    </div>
    <div className="col-span-2">
      <p className="text-zinc-700 text-base sm:text-xl mb-4 sm:mb-6">
        Our digital strategy framework eases the process of customer adoption and increases ongoing engagement. We define product experience, customer journeys and content strategy tailored to exceed customer expectations.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-zinc-700 text-lg sm:text-2xl">
        <li className="flex items-center">
          <span className="inline-block h-2.5 w-2.5 bg-zinc-800 rounded-full mr-2" />Product Strategy
        </li>
        <li className="flex items-center">
          <span className="inline-block h-2.5 w-2.5 bg-zinc-800 rounded-full mr-2" />Marketing Strategy
        </li>
        <li className="flex items-center">
          <span className="inline-block h-2.5 w-2.5 bg-zinc-800 rounded-full mr-2" />User Experience Strategy
        </li>
        <li className="flex items-center">
          <span className="inline-block h-2.5 w-2.5 bg-zinc-800 rounded-full mr-2" />Content Strategy
        </li>
      </ul>
    </div>
  </div>
</div>

  
                






      
      
    );
};

export default Header;
