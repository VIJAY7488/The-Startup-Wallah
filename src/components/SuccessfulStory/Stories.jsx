

const Stories = ({ handleViewPDF, peoples = [] }) => {  
  return (
    <div className="bg-gray-100 px-4 sm:px-6 py-8 mt-[65px]">
      <h1 className="text-4xl font-bold mb-12 text-primary text-center underline">
        The Successful People Stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {peoples.length > 0 ? ( 
          peoples.map((people) => (
            <div key={people.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center relative">
              <img
                src={people.image}
                alt={people.title}
                className="rounded-md w-full h-50 object-cover mb-4 border-2 border-blue-600"
              />
              <h1 className="text-2xl font-bold mb-2">{people.title}</h1>
              <p className="text-gray-600 text-md mb-4 leading-relaxed text-start">{people.description}</p>
              <button
                onClick={() => {handleViewPDF(people.pdfUrl), scrollTo(0,0)}}
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {people.buttonText}
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No stories available.</p> 
        )}
      </div>
    </div>
  );
};

export default Stories;
