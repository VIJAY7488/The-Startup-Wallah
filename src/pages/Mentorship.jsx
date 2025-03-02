import { div } from 'framer-motion/client';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const cards = [
    {
      id: 1,
      image: "https://thestartupwallah.b-cdn.net/Images/Connect.jpeg",
      title: "Get Connected to Investors in Seconds! ",
      description:
         "Pitch your idea confidently, connect with investors, and secure funding to grow your vision. Build relationships and unlock opportunities for success.",
      buttonText: "Get Started",
      link:"/investors"
    },
    {
      id: 2,
      image: "https://thestartupwallah.b-cdn.net/Images/book.jpeg",
      title: "Essential Startup Resources – Instant Access.",
      description:
        "Grab free e-books on marketing, sales, and entrepreneurship- everything you need to build and grow your startup.",
      buttonText: "Explore",
      link:"/resources"
  
    },
    {
      id: 3,
      image: "https://thestartupwallah.b-cdn.net/Images/service.jpeg",
      title: "Build. Launch. Grow – We’ve Got You Covered!",
      description:
        "We turn your ideas into reality with web & app development, pitch decks, and more—while you focus on the vision!",
      buttonText: "Learn More",
      link:"/services"
    },
  ];
  

const Mentorship = () => {

    const navigate = useNavigate();

  return (
    <div className="bg-gray-100 px-4 sm:px-6 py-8">
      <h1 className='text-4xl font-bold mb-12 text-primary text-center '>Fuel Your Startup</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
            <div 
                key={card.id}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center relative"
            >
                <img 
                    src={card.image} 
                    alt={card.title}
                    className="rounded w-full h-48 object-cover mb-4 border-2 border-blue-600"
                />
                <h1 
                    className="text-xl font-semibold mb-2">
                    {card.title}
                </h1>
                <p 
                    className="text-gray-600 text-md mb-4 leading-relaxed test-start letter-spacing-1"
                >
                    {card.description}
                </p>
                <button 
                    onClick={() => {navigate(card.link), scrollTo(0,0)}} className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    {card.buttonText}
                </button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Mentorship;
