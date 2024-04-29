import React from 'react';
import image1 from '../assets/image1.png'; // Adjust the import path accordingly for all images
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';
import image10 from '../assets/image10.png';
import image11 from '../assets/image11.png';
import image12 from '../assets/image12.png';
import image13 from '../assets/image13.png';
import image14 from '../assets/image14.png';
import image15 from '../assets/image15.png';
import image16 from '../assets/image16.png';
import image17 from '../assets/image17.png';
import image18 from '../assets/image18.png';
// Import all 21 images like this

const Client = () => {
  // Define an array of imported images
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    // Add all imported images here
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
  <div className="px-8 py-12 max-w-screen-lg text-center">
    {/* Title */}
    <h2 className="text-7xl font-bold mb-8">Our Clients</h2>

    {/* Lorem text content */}
    <p className="text-lg mb-8">
      {/* Your content */}
    </p>

    {/* Image grid */}
    <div className="grid gap-8 md:gap-12 md:grid-cols-6 md:grid-rows-3 justify-center pb-8">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Client ${index + 1}`}
          className="w-full md:w-auto mb-8 md:mb-0 mx-auto"  /* Added mx-auto for centering */
        />
      ))}
    </div>
  </div>
</div>



  




  );
}

export default Client;

