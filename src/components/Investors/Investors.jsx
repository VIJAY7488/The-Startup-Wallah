
import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";



const investors = [
  { 
    "id": 1,
    "name": "Darshan Jani",
    "company": "6th Sun Ventures",
    "bio": "A seasoned entrepreneur turned investor with over 25 years of experience in the tech industry evenly distributed between US and India. Darshan has led teams at various companies in developing award-winning technology products, from enterprise servers and network protocols to web-based applications and databases. A talented management professional in the software industry, Darshan also has a unique expertise in scaling technology ventures.",
    "image": "https://media.licdn.com/dms/image/v2/D4D03AQH_Q_jXpP1ZYw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1665971738741?e=1745452800&v=beta&t=1ImcVNwqWa7zW11Q3xUUTZFUxrz2E4nkjQ0Mo94xbAs",
    "email": "darshan.jani@matrubharti.com",
    "linkedin": "https://www.linkedin.com/in/janidarshan/"
  },
  { 
    "id": 2,
    "name": "Dinesh Goel",
    "company": "Siana Capital",
    "bio": "Early Stage Tech Investor, Board Director/Strategic Advisor, Partner at Siana Capital.",
    "image": "https://media.licdn.com/dms/image/v2/D4D03AQEKxlcJ_x_TgQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696945826785?e=1745452800&v=beta&t=JWbl9-1_aC580yaqKjJ_HA4UxSL79DggM1QQsRjKIAM",
    "email": "dinesh.goel@sianacapital.com",
    "linkedin": "https://www.linkedin.com/in/goeldinesh/"
  },
  { 
    "id": 3,
    "name": "Avishek Das",
    "company": "KredX",
    "bio": "Investment | TReDS | Supply Chain Financing",
    "image": "https://media.licdn.com/dms/image/v2/D4D03AQFsDvZ2oUDauQ/profile-displayphoto-shrink_800_800/B4DZT5CyF0HIAg-/0/1739345044564?e=1745452800&v=beta&t=SdG6Y8VABHI_ICwJhqcmbPbk7J3UTw01vEYMH4u-4xY",
    "email": "avishek@kredx.com",
    "linkedin": "https://www.linkedin.com/in/avishek-das-6bb16512/"
  },
  { 
    "id": 4,
    "name": "Pramod D'souza",
    "company": "Eagle10 Ventures",
    "bio": "Board Advisor / Mentor / Angel Investor / Certified Independent Director / Management Consultant",
    "image": "https://media.licdn.com/dms/image/v2/D5603AQGsO4zPlF8Fgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713535879133?e=1745452800&v=beta&t=qW99s-cbRKhQtJUIHgOudWs_xWPtPcD8Ey0US8AL1zU",
    "email": "pramod@eagle10ventures.com",
    "linkedin": "https://www.linkedin.com/in/pramoddsouza/"
  },
  {
    "id": 5,
    "name": "Shronit Ladhani",
    "company": "CareerNinja",
    "bio": "Accelerating Careers with AI | Backed by Google | 30 Under 30 & 40U40 | Angel Investor | Ironman Triathlete | 2x TEDx | Hiring: Product, Design, AI & Growth Roles",
    "image": "https://media.licdn.com/dms/image/v2/D4D35AQE6N1azpn3GHw/profile-framedphoto-shrink_800_800/B4DZUdUipPGcAk-/0/1739953679218?e=1740769200&v=beta&t=Np2AWZR-LNGgk74oJuVo6K3pAVTJIFefeMg-5RK3yqo",
    "email": "shronit@careerninja.in",
    "linkedin": "https://www.linkedin.com/in/shronit-ladhani-b12b8227/"
  },
  { 
    "id": 6,
    "name": "Nikhil Rathi",
    "company": "Web Werks India Pvt. Ltd.",
    "bio": "Founder at Web Werks Datacenters, Neosoft Technologies, and Mumbai-IX. Investor at Next Star Venture Capital LLP and NeoNXT Fincap.",
    "image": "https://media.licdn.com/dms/image/v2/C4D03AQFgcUFXdA9EDQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1615639399370?e=1745452800&v=beta&t=gD-t-XscO2hTNxTDQsC5dXgYy5WoXdwSRC_1rZWGi0k",
    "email": "nikhil@neosofttech.com",
    "linkedin": "https://www.linkedin.com/in/nikhil-rathi-7532562/"
  },
  { "id": 7,
    "name": "Maneesh Bhandari",
    "company": "GrowthPal.com",
    "bio": "Invested in Genomics, Retail Analytics, Consumer, Personal Care, Fintech, Life Sciences, Edtech, Agri-tech, Security, Risk & Compliance, and other startups.",
    "image": "https://media.licdn.com/dms/image/v2/D4D03AQGw12DVKsTIrQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1683105172145?e=1745452800&v=beta&t=2KVSwFclueFW85bcD9Gt4U-GYDcxNTi9P8rlqm7VTIw",
    "email": "maneesh.bhandari@growthpal.com",
    "linkedin": "https://www.linkedin.com/in/mbh91/"
  },
  { "id": 8,
    "name": "Sridhar S",
    "company": "Startup Movers Private Limited",
    "bio": "Co-Founder, Startup Movers",
    "image": "https://media.licdn.com/dms/image/v2/C4E03AQHJfg9-mrJ-xA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516293387605?e=1745452800&v=beta&t=rhfRvNy67LuHvWVOxiArX-7Cmpga4cupYeFu6_HPovE",
    "email": "sridhar@startup-movers.com",
    "linkedin": "https://www.linkedin.com/in/nikhil-rathi-7532562/"
  },
  { "id": 9,
    "name": "Sridhar S",
    "company": "Easy Eat",
    "bio": "Entrepreneur | Investor | IITD",
    "image": "https://media.licdn.com/dms/image/v2/C5103AQFDlwTwb7sudQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1531220506887?e=1745452800&v=beta&t=PsudHaEJt97PLIu2Up6OVpA2kvzJGCW85rI4H7ETFow",
    "email": "rhythm@easyeat.ai",
    "linkedin": "https://www.linkedin.com/in/rhythmgupta/"
  },
  { "id": 10,
    "name": "Ankur Mittal",
    "company": "Inflection Point Ventures",
    "bio": "Partner, Physis Capital | Co-Founder, Inflection Point Ventures",
    "image": "https://media.licdn.com/dms/image/v2/C5103AQHicvGntOUQYw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1574923178159?e=1745452800&v=beta&t=LoldAU2RSVtVJ2oyK8jjitDxYtjszSorcd9Sv2IDRxM",
    "email": "ankur@ipventures.in",
    "linkedin": "https://www.linkedin.com/in/ankur-mittal-3ba773/"
  },
  { "id": 11,
    "name": "Rahul Chowdhri",
    "company": "Stellaris Venture Partners",
    "bio": "Investment Professional, Stellaris Venture Partners",
    "image": "https://media.licdn.com/dms/image/v2/D5603AQE1jRPDZ91i0g/profile-displayphoto-shrink_400_400/B56ZRz41lXGQAg-/0/1737111067414?e=1745452800&v=beta&t=dI6XAxj4v8dARSRv3Z2eJemXUGxIu2RR8NMXK0aehWg",
    "email": "rahul@stellarisvp.com",
    "linkedin": "https://www.linkedin.com/in/rahulchowdhri/"
  },
  { "id": 12,
    "name": "Rahat Kulshreshtha",
    "company": "Quidich",
    "bio": "Co-Founder - Quidich Innovation Labs | Chairman - Drone Federation Of India | Sports Broadcast | AR | AI/Computer Vision | Metaverse",
    "image": "https://media.licdn.com/dms/image/v2/C4D03AQHvWr8tiQjz_g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1604508585933?e=1745452800&v=beta&t=TAi6gDuforiyjQ6jcN0u0cSl1qXWFArDwAv50yA3h9k",
    "email": "rahat@quidich.com",
    "linkedin": "https://www.linkedin.com/in/rahatkul/"
  },
  { "id": 13,
    "name": "Dhiraj Shah",
    "company": "Venture Catalysts | India's First Integrated Incubator",
    "bio": "Chief of Staff at Castler | Venture Capital | Angel Investor",
    "image": "https://media.licdn.com/dms/image/v2/C4D03AQG3rEkPXLKSYQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1617959048165?e=1745452800&v=beta&t=8HqBk56OHYBJ6_VN_qWYmwfy24-c-jwpKfYd6tcSEeI",
    "email": "dhiraj.shah@venturecatalysts.in",
    "linkedin": "https://www.linkedin.com/in/dhiraj-shah/"
  },
  { "id": 14,
    "name": "Kunal Gupta",
    "company": "Mount Talent Consulting",
    "bio": "Founder: Mount Talent, Rozgar.com | ET 40 under 40 Business Leader",
    "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    "email": "kunal.gupta@mounttalent.com",
    "linkedin": "https://www.linkedin.com/in/kunalgupta/"
  },
  { "id": 15,
    "name": "Sanjay Ramakrishnan",
    "company": "Multiply Ventures",
    "bio": "Founder & General Partner @ Multiply Ventures (Ex-Flipkart/Myntra/Google/GE Healthcare)",
    "image": "https://media.licdn.com/dms/image/v2/D5603AQF4tXnpaY525A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683692125983?e=1745452800&v=beta&t=wGbNKpRza7dSWsbG9GS63tB31fsohidq2MYLUK3Ksnc",
    "email": "sanjay@multiplyventures.com",
    "linkedin": "https://www.linkedin.com/in/rsanjay/"
  },
  { 
    "id": 16,
    "name": "Madhav Tandan",
    "image": "https://shorturl.at/tYHso",
    "linkedin": "https://www.linkedin.com/in/madhav-tandan-71974124/",
    "company": "Omidyar Network India",
    "position": "Investor",
    "email": "madhav@gramfactory.com"
  },
  { 
    "id": 17,
    "name": "Sumeet Kapur",
    "image": "https://media.licdn.com/dms/image/v2/C5103AQGURSCjV52BBA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1565611819256?e=1746057600&v=beta&t=izsQR4uLeiVtGHfynXmfL2SP1DAVFtN5WSwM3laH6SA",
    "linkedin": "https://www.linkedin.com/in/sumeetkapur1/",
    "company": "Wellcure.com",
    "position": "Founder & CEO",
    "email": "sumeet.kapur@wellcure.com"
  },
  { 
    "id": 18,
    "name": "Soniya Kukreja",
    "image": "https://shorturl.at/1Latr",
    "linkedin": "https://www.linkedin.com/in/soniya-kukreja-92a571123/",
    "company": "Venture Catalysts | India's First Integrated Incubator",
    "position": "Investor Relations Manager",
    "email": "soniya@venturecatalysts.in"
  },
  { 
    "id": 19,
    "name": "Prashanth Aluru",
    "company": "Facebook",
    "bio": "CEO & Co-Founder, TMRW House of Brands | UNHustler",
    "image": "https://media.licdn.com/dms/image/v2/D5603AQHOm9SCLdrHmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692174460453?e=1745452800&v=beta&t=YvvIRqJGW8o9innhcO-H-nOE8UcdA3DCqpEMpMncnlc",
    "email": "prashanth@avataar.me",
    "linkedin": "https://www.linkedin.com/in/prashanthaluru/"
  },
  { 
    "id": 20,
    "name": "Nickson Sharma",
    "company": "Northeast Venture Fund",
    "bio": "Venture Capital & Private Equity | NE Venture Fund & NRL Ideation Angel Fund | Manipur Startup Venture Fund | Stanford Seed Spark Program Mentor",
    "image": "https://media.licdn.com/dms/image/v2/C5103AQE0ApWWV5MmnA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1580991238476?e=1745452800&v=beta&t=ID-gSjwf8i6ThNJiAs_Sy25m5Xw6o1qFTVVTL6m4wmc",
    "email": "nickson@nedfiventure.com",
    "linkedin": "https://www.linkedin.com/in/nicksonsharma/"
  },
  { 
    "id": 21,
    "name": "Prem Singh",
    "company": "Prem.VC",
    "bio": "CEO, ClientCurve, Inc - Looking for Data Scientist, UI/UX Designer, Amazon Seller Account Setup, Shopify Developer, and BD Team members",
    "image": "https://media.licdn.com/dms/image/v2/C5603AQHG12nYXxTSlw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1617882237803?e=1745452800&v=beta&t=aF9hRXkryLoNXrz2b9AQQsBrElo0jd6PWhCc2eTbaXg",
    "email": "prem@clientcurve.com",
    "linkedin": "https://www.linkedin.com/in/premsinghtara/"
  },
  { 
    "id": 22,
    "name": "Navin Khabiya",
    "company": "NSquareIT",
    "bio": "With over 16 years of experience in web and mobile development, I help businesses of all sizes create innovative and user-friendly digital products that meet their needs and goals.",
    "image": "https://media.licdn.com/dms/image/v2/C5603AQHvyjJxbyifXg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1631261106369?e=1745452800&v=beta&t=sOG6Bur1OdWXrkqTpZQ82fuOVhFstHmc-PqJd647PDs",
    "email": "navin@nsquareit.com",
    "linkedin": "https://www.linkedin.com/in/navinkhabiya/"
  },

  { 
    "id": 23,
    "name": "Koushik Ramachandra",
    "company": "NSquareIT",
    "bio": "16+ years of engineering experience building and scaling Internet applications, data, and infrastructure platforms.",
    "image": "https://media.licdn.com/dms/image/v2/D5603AQF3OlvRUk9CBw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714879009136?e=1745452800&v=beta&t=RFDby3A0bcoGSS_pS_zucVKhinqhKGcmIhddjmy_iIc",
    "email": "koushik@phonepe.com",
    "linkedin": "https://www.linkedin.com/in/koushikramachandra/"
  },
  { 
    "id": 24,
    "name": "Partha Sarathi Guha Patra",
    "company": "SafetyKart.com",
    "bio": "Founder at ASADEL Technologies Pvt. Ltd.",
    "image": "https://media.licdn.com/dms/image/v2/C4E03AQHREVRJLZm1dg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517676452537?e=1745452800&v=beta&t=RgZf1VLRE5RBN9ASFwvp6rSenm4Fd3wO7Ej-IUzyHJ0",
    "email": "partha@asadeltech.com",
    "linkedin": "https://www.linkedin.com/in/psgpdel/"
  },
  { 
    "id": 25,
    "name": "Arun Mn",
    "company": "Casa Grande Private Limited",
    "bio": "Founder and Managing Director of Casa Grande and group companies.",
    "image": "https://media.licdn.com/dms/image/v2/C5103AQEuUQz3BLcEBg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1568855870639?e=1745452800&v=beta&t=E0uNWXtA3k-WsNIcbHNYKV0SB3EzdPM87541AIRSln4",
    "email": "arunmn@casagrand.co.in",
    "linkedin": "https://www.linkedin.com/in/arunkumarmanivannan/"
  },
  { 
    "id": 26,
    "name": "Sunil Gupta",
    "company": "Innoval Digital Solutions Pvt Ltd (IVL)",
    "bio": "AI leader | FinTech | SAP | Digital Banking | IIM-K | Stanford | TiE CM | B2B SaaS Enterprise Products | Cloud | Tax Technology | Innovation",
    "image": "https://media.licdn.com/dms/image/v2/C5603AQFbVWb2zB3ebg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1634662541735?e=1745452800&v=beta&t=8b2RcErfdrTIOcUY9SUgfmGkU2M4ovp72fpuHIFh6FY",
    "email": "sunil.gupta@ivldsp.com",
    "linkedin": "https://www.linkedin.com/in/guptasunil/"
  },
  { 
    "id": 27,
    "name": "Ramit Bhatnagar",
    "company": "MJ Global",
    "bio": "COO & Executive Director @ MJ Global | Leading Packaging Innovation | Angel Investor | McKinsey Alum",
    "image": "https://media.licdn.com/dms/image/v2/C5103AQHgdqNF8TMe1w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517591515542?e=1745452800&v=beta&t=m9SjBtvGOHC15u4lmNyQoS2SMy_XUOJWrnPv6NNw-To",
    "email": "ramit.bhatnagar@mjglobal.co.in",
    "linkedin": "https://www.linkedin.com/in/ramitbhatnagar/"
  },
  { 
    "id": 28,
    "name": "Nandish Chandrashekar",
    "company": "AutoMakeup",
    "bio": "Experienced Proprietor with a demonstrated history of working in the import and export industry. Skilled in Negotiation, Business Planning, Strategic Planning, Business Development, and Marketing Strategy. Strong entrepreneurship professional with a Bachelor of Engineering (B.E.) focused in Mechanical Engineering from Dayananda Sagar College Of Engineering.",
    "image": "https://media.licdn.com/dms/image/v2/C5603AQHRW6oVVDS5XA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517445045384?e=1746057600&v=beta&t=DH868YO2K_CEoRXUNqSBMCNB3FZ1mvy5mKtlN6oQIyM",
    "email": "nandish@justwashapp.com",
    "linkedin": "https://www.linkedin.com/in/nandish-chandrashekar-b7167b109/"
  },
  { 
    "id": 29,
    "name": "Siddharth Gangoli",
    "company": "SG Hiring Solutions",
    "bio": "Director at SG Hiring Solutions",
    "image": "https://media.licdn.com/dms/image/v2/C5603AQHCqHWQkC8Veg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516282280434?e=1746057600&v=beta&t=-DyO4BlUYMDwecY90yUdcpR-LBEVUNm62hJn1Kzsoto",
    "email": "siddharth@sghiringsolutions.com",
    "linkedin": "https://www.linkedin.com/in/siddharthgangoli/"
  },
  { 
    "id": 30,
    "name": "Rhythm Gupta",
    "company": "Easy Eat",
    "bio": "Entrepreneur | Investor | IITD",
    "image": "https://media.licdn.com/dms/image/v2/C5103AQFDlwTwb7sudQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1531220506887?e=1745452800&v=beta&t=PsudHaEJt97PLIu2Up6OVpA2kvzJGCW85rI4H7ETFow",
    "email": "rhythm@easyeat.ai",
    "linkedin": "https://www.linkedin.com/in/rhythmgupta/",
    "position": "Co-Founder"
  },
];

     
    

const Investors = () => {

  const [selectedProfile, setSelectedProfile] = useState(null);

  const viewProfileDetails = (investor) => {
    setSelectedProfile(investor);
  };

  const closeProfileDetails = () => {
    setSelectedProfile(null);
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-300 mt-12" >
      <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6 underline">
          Meet Our Investors
      </h2>

      <h3 className="text-xl font-bold text-center mb-5">
          🚀 Traditional vs. Modern Fundraising – What’s Best for You?
        </h3>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-blue-600 text-white text-lg">
                <th className="border border-gray-300 px-4 py-3">
                  ❌ The Old Way (Traditional Fundraising)
                </th>
                <th className="border border-gray-300 px-4 py-3">
                  ✅ The Smarter Way (Modern Fundraising)
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3">
                  🔴 Endless struggle to find the right investors
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  💡 Instant Access – 1,800+ verified investors at your fingertips
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-3">
                  🔴 Hours wasted on research instead of building your startup
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  📩 Direct Outreach – Email your pitch deck in just a few clicks
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3">
                  🔴 Sending 1000s of LinkedIn requests with little response
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  ⏳ Save Time – Focus on scaling, not chasing investors.
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-3">
                  🔴 Losing 2% of your hard-earned funds in platform fees.
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  💰 Keep 100% – No commissions, no hidden fees.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Investors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {investors.map((investor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition transform hover:scale-105"
            >
              <img
                src={investor.image}
                alt={investor.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">{investor.name}</h3>
              <p className="text-blue-600 font-medium italic">{investor.company}</p>
              <button className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              onClick={() => viewProfileDetails(investor)}>
                View Profile
              </button>
            </div>
          ))}
        </div>
 
       {selectedProfile && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mt-14 touch-pan-y'>
          <div className='absolute bg-white p-8 rounded-lg flex flex-col items-center text-center max-w-md w-full'>
            <button className='flex justify-end items-end absolute right-2 -mt-6 bg-red-600 px-1 py-1 rounded-full text-white text-xl' onClick={closeProfileDetails}>
              <IoClose className='text-right' />
            </button>
            <img src={selectedProfile.image} alt={selectedProfile.name} className='w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-4 justify-center' />
            <h1 className='text-lg font-semibold text-gray-900'>{selectedProfile.name}</h1>
            <p>{selectedProfile.bio}</p>
            <p className='text-start text-sky-600'>
              <span className='text-gray-700 font-semibold'>Email :- </span> 
              <span className='font-medium'>{selectedProfile.email}</span>
            </p>
            <a href={selectedProfile.linkedin} className='bg-blue-500 px-2 py-1 text-white rounded-md hover:bg-blue-600'>Visit LinkedIn Profile</a>
          </div>
        </div>
       )}
      </div>
    </section>
  )
}

export default Investors
