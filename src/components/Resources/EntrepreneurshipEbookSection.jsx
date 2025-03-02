import React from "react";
import entrepreneurshipBook from "../../assets/entrepreneurship";

const ebooks = [
    { id: 1, name: "The Entrepreneurial Mindset", link: entrepreneurshipBook.ATLBTLTTL, image:entrepreneurshipBook.image1  },
    { id: 2, name: "Market Gaps", link: entrepreneurshipBook.BuildingCustomerLoyality, image: entrepreneurshipBook.image2 },
    { id: 3, name: "Product Market Fit", link: entrepreneurshipBook.StepFormulaforStrategicExecution, image: entrepreneurshipBook.image3 },
    { id: 4, name: "TAM SAM SO MO", link: entrepreneurshipBook.marketingStrategy, image: entrepreneurshipBook.image4 },
    { id: 5, name: "Minimal Viable Product(MVP)", link: entrepreneurshipBook.AARRRmodle, image: entrepreneurshipBook.image5 },
    { id: 6, name: "Essential Questions & Answers for Building a Startup", link: entrepreneurshipBook.Book6, image: entrepreneurshipBook.image6 },
];

const EntrepreneurshipEbookSection = () => {
    return (
        <div className="bg-gray-100 px-4 sm:px-6 py-8 mt-12">
            <h1 className="text-4xl font-bold mb-3 text-primary text-center">Entrepreneurship E-book</h1>
            <p className="text-lg text-gray-700 text-center max-w-5xl text-justify mx-auto mb-6">
                Like a compass on a journey, entrepreneurship books provide direction, insights, and strategies to navigate the challenges and seize the opportunities that lie ahead.
            </p>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ebooks.map((ebook) => (
                    <div key={ebook.id} className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center">
                        <img src={ebook.image} alt={ebook.name} className="w-full h-[200px] rounded mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{ebook.name}</h2>
                        <a
                            href={ebook.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            View
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EntrepreneurshipEbookSection;