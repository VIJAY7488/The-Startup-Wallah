import React from "react";
import { useParams } from "react-router-dom";

const PdfViewer = () => {
  const { fileName } = useParams(); // Extract file name from URL

  if (!fileName) {
    return <div className="text-center text-red-500">Invalid PDF file.</div>;
  }


  
  const decodedFileName = fileName.replace(/-/g, " "); 
  const pdfUrl = `https://thestartupwallah.b-cdn.net/SuccessfullStory/${decodedFileName}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">PDF Viewer</h1>
      <iframe
        src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
        className="w-full max-w-4xl h-[90vh] border-2 border-gray-300 shadow-lg"
        title="PDF Viewer"
      />
    </div>
  );
};

export default PdfViewer;
