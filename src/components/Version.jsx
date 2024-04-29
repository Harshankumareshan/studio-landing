import React from 'react'
import Corner from '../assets/corner.jpg';
const Version = () => {
  return (

    <div class="bg-gray-200 px-4 md:px-64 py-20 md:py-0 flex flex-col md:flex-row items-center justify-between">
  <div class="mb-8 md:mb-0 md:mr-8 max-w-lg">
    <h1 class="text-3xl md:text-6xl font-bold mb-4">Get the First Version Of App Design for Free</h1>
    <p class="text-zinc-700 mb-4">
      Our product realization service empowers businesses to quickly and effectively deliver products, software, and services that transform markets and enhance the human experience. In addition to testing the products early via prototypes, we adopt a cross-disciplinary and iterative approach to ensure compelling concepts are implementable, which results in higher-quality designs and reduced time to market.
    </p>
    <button class="bg-black text-white px-6 py-2 rounded-lg hover:bg-zinc-800 transition-colors">Get In Touch →</button>
  </div>
  <div class="md:flex-shrink-0 md:object-cover md:h-auto md:w-56 md:h-82 hidden md:block">
    <img src={Corner} alt="Desk setup" class="object-contain h-full w-full" />
  </div>
</div>


            
          

          
        
            
  )
}

export default Version