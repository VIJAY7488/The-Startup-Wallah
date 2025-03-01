import React from "react";
import { useNavigate } from "react-router-dom";
import Stories from "../components/SuccessfulStory/Stories";

const peoples = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739943961/Binny_Bansal_r08e7w.jpg",
    title: "Sachin & Binny Bansal",
    description: "From IIT classrooms to revolutionizing e-commerce with Flipkart.",
    buttonText: "Explore More",
    pdfUrl: "https://thestartupwallah.b-cdn.net/SuccessfullStory/From%20IIT%20Dreams%20to%20Building%20an%20Empire.pdf",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1740047824/Ritesh-Agarwal-Success-Story-2023_jnwbq2.webp",
    title: "Ritesh Agarwal",
    description: "A college dropout who built OYO into a global hospitality giant.",
    buttonText: "Explore More",
    pdfUrl: "https://thestartupwallah.b-cdn.net/SuccessfullStory/The%20journey%20of%20Ritesh%20Agarwal.pdf",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1740154728/Screenshot_2025-02-21_213921_rfwv0z.png",
    title: "Zepto Founders",
    description: "Teenagers who redefined grocery delivery with a 10-minute promise.",
    buttonText: "Explore More",
    pdfUrl: "https://thestartupwallah.b-cdn.net/SuccessfullStory/Zepto%20The%2010%20Minute%20Revolution.pdf",
  },
];

const PeopleStories = () => {
  const navigate = useNavigate();

  const handleViewPDF = (pdfUrl) => {
    if (!pdfUrl) return;

    // Extract the file name and replace spaces with hyphens
    const fileName = pdfUrl.split("/").pop().replace(/ /g, "-");

    // Navigate to the PDF viewer route
    navigate(`/stories/${fileName}`);
  };

  return <Stories handleViewPDF={handleViewPDF} peoples={peoples} />;
};

export default PeopleStories;
