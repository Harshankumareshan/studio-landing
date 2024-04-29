import React from 'react'
import Music from '../assets/music.jpg';
import Digital from '../assets/digital.jpg';
import Slidemobile from '../assets/slidemobile.png';
const Explore = () => {
    return (
        <div class="flex justify-center items-center min-h-screen bg-white dark:bg-zinc-800">
        <div class="max-w-4xl w-full p-4">
            <div class="text-center py-8 md:py-12">
                <h2 class="text-4xl md:text-6xl font-bold">— Our Work</h2>
            </div>
    
            <div class="flex flex-col md:flex-row items-center bg-yellow-400 dark:bg-yellow-600 mb-8 md:mb-0">
                <div class="md:w-1/2 p-5 relative">
                    <img src={Slidemobile} alt="Mobile Shopping App" class="left-0 -ml-20 top-0 h-45 w-auto md:w-full" />
                </div>
    
                <div class="md:w-1/2 p-10 text-center">
                    <h3 class="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-200">
                        Redefined Mobile Shopping Experience
                    </h3>
                </div>
            </div>
    
            <div class="flex flex-wrap justify-center items-center mb-8">
                <div class="w-full md:w-1/2 p-2">
                    <img src={Music} alt="Digital Music App" class="shadow-lg" />
                    <h4 class="text-center font-bold mt-2">Digital Music App</h4>
                </div>
                <div class="w-full md:w-1/2 p-2">
                    <img src={Digital} alt="Digital Credit Marketplace" class="shadow-lg" />
                    <h4 class="text-center font-bold mt-2">Optimising Digital Credit Marketplace</h4>
                </div>
            </div>
    
            <div class="text-center py-8">
                <button class="bg-black text-white font-bold py-2 px-4 rounded hover:bg-zinc-700 dark:hover:bg-zinc-500 transition duration-300">
                    Explore More →
                </button>
            </div>
        </div>
    </div>
    
    )
}

export default Explore