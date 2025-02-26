import { div } from 'framer-motion/client';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const cards = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1740492243/5_bnssdf.svg",
      title: "Early-Stage Startups",
      description:
         "Offers the connections, and expertise to transform their vision into a thriving business.",
     
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1740492245/3_hufaog.svg",
      title: "Aspiring Entrepreneurs",
      description:
        "Guidance to navigate the challenging journey from idea to success.",
      
  
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1740492241/4_bp6ijm.svg",
      title: "Struggling Startups",
      description:
        "Bridges the gap with investor access, learning resources, and expert support",
      
    },
  ];
  

const WhoStartupWallah = () => {

    const navigate = useNavigate();

  return (
    <div className="bg-gray-100 px-4 sm:px-6 py-8">
      <h1 className='text-4xl font-bold mb-12 text-primary text-center underline'>Who is The Startup Wallah for?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
            <div 
                key={card.id}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center relative"
            >
                <img 
                    src={card.image} 
                    alt={card.title}
                    className="rounded-lg w-full h-50 object-cover mb-4 "
                />
                <h1 
                    className="text-xl font-semibold mb-2">
                    {card.title}
                </h1>
                <p 
                    className="text-gray-600 text-md mb-4 leading-relaxed  flex items-center justify-center"
                >
                    {card.description}
                </p>
                
            </div>
        ))}
      </div>
    </div>
  )
}

export default WhoStartupWallah;
