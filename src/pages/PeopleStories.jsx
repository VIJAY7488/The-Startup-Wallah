import { div } from 'framer-motion/client';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const peoples = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739943961/Binny_Bansal_r08e7w.jpg",
      title: " Sachin & Binny Bansal ",
      description:
        "From IIT classrooms to revolutionizing e-commerce with Flipkart.",
      buttonText: "Explore More",
      link: "/sachinbannystory",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1740047824/Ritesh-Agarwal-Success-Story-2023_jnwbq2.webp",
      title: "Ritesh Agarwal",
      description:
        "A college dropout who built OYO into a global hospitality giant.",
      buttonText: "Explore More",
      link: "/riteshstory",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1740154728/Screenshot_2025-02-21_213921_rfwv0z.png",
      title: " Zepto Founders",
      description:
        "Teenagers who redefined grocery delivery with a 10-minute promise.",
      buttonText: "Explore More",
      link: "/zeptostory",
    },
  ];

const PeopleStories = () => {

    const navigate = useNavigate();

  return (
    <div className="bg-gray-100 px-4 sm:px-6 py-8 mt-[65px]" >
      <h1 
        className="text-4xl font-bold mb-12 text-primary text-center underline" >
        The Successful people stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {peoples.map((people) => (
            <div 
                key={people.id} 
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center relative">
                <img 
                    src={people.image} 
                    alt={people.title}
                    className="rounded-md w-full h-50 object-cover mb-4 border-2 border-blue-600" 
                />
                <h1 className="text-2xl font-bold mb-2">
                    {people.title}
                </h1>
                <p 
                    className="text-gray-600 text-md mb-4 leading-relaxed text-start">
                    {people.description}
                </p>
                <button 
                    onClick={() => {navigate(people.link), scrollTo(0,0)}}
                    className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    {people.buttonText}
                </button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default PeopleStories
