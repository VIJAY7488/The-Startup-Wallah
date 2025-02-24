import React, { useState } from 'react'

const faqs = [
    { id: 1,
      question: "What is The Startup Wallah?", 
      answer: "The Startup Wallah is an extensive platform that bridges entrepreneurs with investors, resources, and expert-driven services to drive startup growth." },

    { id: 2,
      question: "How do I access the investor database?", 
      answer: "Our platform offers access to a vetted database of  investors, including LinkedIn profiles and email addresses, to assist startups in connecting with possible funding opportunities." },

    { id: 3,
      question: "What type of resources do you offer?", 
      answer: "We provide e-books in picture form on Marketing, Entrepreneurship, Sales and many more for fast and efficient learning without requiring lengthy masterclasses." },
    { id: 4,
      question: "Can you help with website building and business strategy?", 
      answer: "Yes, we have professional services, such as website building, pitch deck building, structuring business models, and sales funnel optimization, to assist startups to scale efficiently." },
    { id: 5,
      question: "How does The Startup Wallah aid in fundraising?", answer: " Though we do not invest directly, we endow startups with investor connections, pitch preparation, and business strategy insights that help them prepare for fundraising." },
    { id: 6,
      question: "Are your services free or paid?", 
      answer: "We provide investors database and learning resources completly free. " },
    { id: 7,
      question: "How do I begin?", 
      answer: "Create an account on our platform, browse our investor base and learning resources, and take the initial step towards startup building and growing with the support you need." }
  ];
  

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaqs = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-12" >
      <h1 className="text-4xl font-bold text-center mb-6">FAQ</h1>
      <p className="text-center mb-6">
      Frequently asked questions mainly relating to opening information.
      </p>
      <div className="space-y-4">
        {faqs.map((faq) => (
            <div key={faq.id}>
                <button 
                    onClick={() => toggleFaqs(faq.id)}
                    className="w-full text-left text-lg font-medium flex justify-between items-center py-2"
                >
                    {faq.question}

                    <span className="font-bold text-3xl">
                        {activeIndex === faq.id ? '-' : '+'}
                    </span>
                </button>
                {activeIndex === faq.id && (<p className="mt-2 text-gray-700">{faq.answer}</p>)}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
