import React from 'react';
import salesBook from "../../assets/sales";

const ebooks = [
    { id: 1, name: "Marketing Strategies for Startups", link: salesBook.BuildingCustomers, image: "/images/BuildingCustomerLoyality.jpg" },
    { id: 2, name: "Digital Marketing Essentials", link: "/salesBook/StepFormulaforStrategicExecution.pdf", image: "/images/StepFormulaforStrategicExecution.jpg" },
    { id: 3, name: "Social Media Growth Hacks", link: "/salesBook/B2BSalesStrategy.pdf", image: "/images/B2BSalesStrategy.jpg" },
    { id: 4, name: "SEO Best Practices", link: "/salesBook/ColdCallstrategyforD2Cbrand.pdf", image: "/images/ColdCallstrategyforD2Cbrand.jpg" },
    { id: 5, name: "Content Marketing Guide", link: "/salesBook/CustomerCentricSales.pdf", image: "/images/CustomerCentricSales.jpg" },
];

const SalesEbook = () => {
    return (
        <div id="sales" className="bg-gray-100 px-4 sm:px-6 py-8 mt-12">
            <h1 className="text-4xl font-bold mb-3 text-primary text-center">Sales E-books</h1>
            <p className="text-lg text-gray-700 text-center max-w-5xl mx-auto mb-6 text-justify">
                Just like a well-tuned engine needs the right fuel, your sales team needs the insights and strategies found in sales books to consistently exceed targets.
            </p>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ebooks.map((ebook) => (
                    <div key={ebook.id} className="bg-white p-4 rounded-xl shadow-lg text-center">
                        <img src={ebook.image} alt={ebook.name} className="w-full h-48 object-cover rounded-t-xl" />
                        <h2 className="text-lg font-semibold mt-3">{ebook.name}</h2>
                        <a
                            href={ebook.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            View
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalesEbook;
