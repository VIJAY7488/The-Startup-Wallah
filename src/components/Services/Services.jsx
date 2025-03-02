import React from 'react'
import { useNavigate } from 'react-router-dom';

const service = [
    {
      title: "Pitch Deck Services",
      description: "Crafting compelling pitch decks to attract investors and secure funding.",
      link: "/services/pitch-deck",
      img: "https://img.freepik.com/free-vector/business-landing-page-with-illustrated-men_23-2148286817.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_hybrid",
      buttonText: "Explore More",
    },
    {
      title: "Website Services",
      description: "Building responsive and high-performance websites for businesses and startups.",
      link: "/services/website",
      img: "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
      buttonText: "Explore More",
    },
    {
      title: "Business Plan Services",
      description: "Developing detailed business plans to guide startups and enterprises.",
      link: "/services/business",
      img: "https://img.freepik.com/free-vector/business-people-illustration_52683-34772.jpg?t=st=1739902440~exp=1739906040~hmac=67b77f245ada749632efcaf77ba7676b218a4adabf354dc8bdf5fbdf300007be&w=996",
      buttonText: "Explore More",
    },
    {
      title: "Sales Funnel Services",
      description: "Creating unique and professional logo designs tailored to your brand identity.",
      link: "/services/salesfunnel",
      img: "https://img.freepik.com/premium-vector/modern-web-graphics-pack-vector-eps_1348508-20.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_hybrid",
      buttonText: "Explore More",
    },
  ];

const Services = () => {

    const navigate = useNavigate();

  return (
    <div id='services' className="bg-gray-100 px-4 sm:px-6 py-8 mt-[65px]" >
      <div className="max-w-6xl mx-auto leading-relaxed text-justify px-4 ">
        <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">Our Services</h2>
        <p className="text-gray-600 mt-2 mb-5 text-center">Providing top-notch solutions for your business success.</p>
        <p>At The Startup Wallah, we're not just service providers; we're partners in your startup's journey. 
          We understand the unique challenges and opportunities startups face, and our premium business services are 
          designed to address them head-on. We offer expert-backed support in web development, pitch deck creation,
           business model structuring, and sales funnel development, empowering you to build a strong foundation for sustainable growth.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        {service.map((service) => (
            <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center relative">
                <img 
                    src={service.img} 
                    alt={service.title}
                    className="rounded-md w-full h-50 object-cover mb-4 border-2 border-blue-600" 
                />
                <h1 className="text-2xl font-bold mb-2">
                    {service.title}
                </h1>
                <p 
                    className="text-gray-600 text-md mb-4 leading-relaxed text-start">
                    {service.description}
                </p>
                <button 
                    onClick={() => navigate(service.link)}
                    className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    {service.buttonText}
                </button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Services;
