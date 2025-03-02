import React from "react";
import marketingBook from "../../assets/marketing";

const ebooks = [
    { id: 1, name: "Marketing Techniques (ATL-BTL-TTL)", link: marketingBook.ATLBTLTTL, image: marketingBook.ATLBTLTTLImage },
    { id: 2, name: "Digital Marketing Essentials", link: marketingBook.AARRRmodle, image: marketingBook.AARRRmodleImage },
    { id: 3, name: "Social Media Growth Hacks", link: marketingBook.B2Bmarketingstrategy, image: marketingBook.B2BmarketingstrategyImage },
    { id: 4, name: "SEO Best Practices", link: marketingBook.Battersysteminmarketing, image: marketingBook.BattersysteminmarketingImage },
    { id: 5, name: "Content Marketing Guide", link: marketingBook.BusinessModels, image: marketingBook.BusinessModelsImage },
    { id: 6, name: "Content Marketing Guide", link: marketingBook.BuildingCustomerLoyality, image: marketingBook.BuildingCustomerLoyalityImage },
    { id: 7, name: "Content Marketing Guide", link: marketingBook.StepFormulaforStrategicExecution, image: marketingBook.StepFormulaforStrategicExecutionImage },
    { id: 8, name: "BUSINESS MODELS", link: marketingBook.BusinessModels, image: marketingBook.BusinessModelsImage },
    { id: 9, name: "Content Marketing Guide", link: marketingBook.MomentMarketing, image: marketingBook.MomentMarketingImage },
    { id: 10, name: "Content Marketing Guide", link: marketingBook.thePowerofCrossPromotion, image: marketingBook.thePowerofCrossPromotionImage },
    { id: 11, name: "Content Marketing Guide", link: marketingBook.TheUltimateGuidetoGuerrillaMarketing, image: marketingBook.TheUltimateGuidetoGuerrillaMarketingImage },
];

const MarketingEbookSection = () => {
    return (
        <div id="marketing" className="bg-gray-100 px-4 sm:px-6 py-8 mt-12">
            <h1 className="text-4xl font-bold mb-3 text-primary text-center">Marketing E-books</h1>
            <p className="text-lg text-gray-700 text-center max-w-5xl mx-auto mb-6 text-justify">
                Just as petrol powers your car, marketing books fuel your business with the knowledge and strategies needed to reach your goals.
            </p>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ebooks.map((ebook) => (
                    <div key={ebook.id} className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center">
                        <img src={ebook.image} alt={ebook.name} className="w-full h-[200px]   rounded mb-4" />
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
};

export default MarketingEbookSection;