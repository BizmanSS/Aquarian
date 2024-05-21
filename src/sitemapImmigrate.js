const sitemapImmigrate = [
  { title:"Permanent Residency", linkTo:"" },
  {
    title: "Express Entry",
    linkTo: "",
    nestedLinks: [
      { title: "Federal Skilled Worker Class", linkTo: "" },
      { title: "Federal Skilled Trades Class", linkTo: "" },
      { title: "Canadian Experience Class", linkTo: "" },
      { title: "Comprehensive Ranking System (CRS)", linkTo: "" },
    ],
  },
  {
    title: "Provincial Nominee Program",
    linkTo: "",
    nestedLinks: [
      { title: "Alberta Immigrant Nominee Program", linkTo: "", 
        nested:[
          {title:"Alberta Opportunity Stream", linkTo:""}, 
          {title:"Alberta Express Entry", linkTo:""},
          {title:"Alberta Accelerated Tech Pathway", linkTo:""},
          {title:"Farm Stream", linkTo:""},
          {title:"Graduate Entrepreneur Stream", linkTo:""},
          {title:"Foreign Graduate Entrepreneur Stream", linkTo:""},
        ] 
      },
      { title: "British Columbia", linkTo: "",
        nested:[
          {title:"British Columbia Skilled Worker", linkTo:""}, 
          {title:"British Columbia Entrepreneur Immigration", linkTo:""}, 
        ]
       },
      { title: "Manitoba", linkTo: "",
        nested:[
          {title:"Skilled Workers in Manitoba (SWM)", linkTo:""},
          {title:"Skilled Workers Overseas (SWO)", linkTo:""},
          {title:"International Education Stream (IES)", linkTo:""},
          {title:"Business Investor Stream (BIS)", linkTo:""},
        ]
       },
      { title: "New Brunswick", linkTo: "",
        nested:[
          {title:"New Brunswick Express Entry Labor Market Stream", linkTo:""}, 
          {title:"New Brunswick Strategic Initiative", linkTo:""},
          {title:"New Brunswick Entrepreneurial Stream", linkTo:""},
          {title:"New Brunswick Post-Graduate Entrepreneurial Stream", linkTo:""},
          {title:"New Brunswick Skilled Worker Applicants with Employer Support", linkTo:""},
          {title:"New Brunswick Business Immigration Stream", linkTo:""},
          {title:"Atlantic Immigration Pilot Program", linkTo:""},
        ] 
       },
      { title: "Newfoundland and Labrador", linkTo: "",
        nested:[
          {title:"Newfoundland and Labrador Express Entry Skilled Worker", linkTo:""},
          {title:"Skilled Worker Category", linkTo:""},
          {title:"International Graduate Category", linkTo:""},
          {title:"International Entrepreneur Category", linkTo:""},
          {title:"International Graduate Entrepreneur Category", linkTo:""},  
        ]
       },
      { title: "Northwest Territories", linkTo: "",
        nested:[
          {title:"Northwest Territories Express Entry", linkTo:""},
          {title:"Northwest Territories Employer Driven", linkTo:""},
          {title:"Northwest Territories Business Driven", linkTo:""},
        ]
       },
      { title: "Nova Scotia", linkTo: "",
        nested:[
          {title:"Nova Scotia Experience: Express Entry", linkTo:""},
          {title:"Entrepreneur Category", linkTo:""},
          {title:"International Graduate Entrepreneur Category", linkTo:""},
          {title:"International Graduates In Demand", linkTo:""},
          {title:"Skilled Worker Category", linkTo:""},
          {title:"Physician Stream", linkTo:""},
          {title:"Nova Scotia Labor Market Priorities", linkTo:""},
          {title:"Nova Scotia Labor Market Priorities for Physicians", linkTo:""},
          {title:"Occupations In Demand", linkTo:""},
          {title:"Critical Construction Worker Pilot", linkTo:""},
        ]
       },
      { title: "Ontario", linkTo: "",
        nested:[
          {title:"Ontario Human Capital", linkTo:"" },
          {title:"Ontario Employer Job Offer", linkTo:""},
          {title:"Ontario Entrepreneur", linkTo:""},
        ]
       },
      { title: "Prince Edward Island", linkTo: "",
        nested:[
          {title:"PEI Express Entry", linkTo:""},
          {title:"PEI Labor Impact", linkTo:""},
          {title:"PEI Business Impact", linkTo:""},
        ]
       },
      { title: "Saskatchewan", linkTo: "",
        nested:[
          {title:"Saskatchewan International Skilled Worker", linkTo:""},
          {title:"Saskatchewan Experience", linkTo:""},
          {title:"Saskatchewan Entrepreneur and Farm", linkTo:""},
        ]
       },
      { title: "Yukon", linkTo: "",
        nested:[
          {title:"Yukon Skilled Worker", linkTo:""},
          {title:"Yukon Express Entry", linkTo:""},
          {title:"Yukon Critical Impact Worker", linkTo:""},
          {title:"Yukon Business Nominee", linkTo:""},
          {title:"Yukon Community Pilot", linkTo:""},
        ]
       },
    ],
  },
  { title: "After Permanent Residency", 
    linkTo: "",
    nestedLinks:[
      {title:"Permanent Resident Cards", linkTo:""},
      {title:"Permanent Resident Card Renewal", linkTo:""},
      {title:"Permanent Resident Travel Document", linkTo:""},
      {title:"Residency Obligation", linkTo:""},
      {title:"Canadian Citizenship", linkTo:""},
    ]
  },
  { title: "PR FAQs", linkTo: "" },
  { title: "Rural and Northern Immigration Pilot", linkTo: "" },
  {
    title: "Caregiver Programs",
    linkTo: "",
    nestedLinks: [
      { title: "Home Child Care Provider Pilot", linkTo: "" },
      { title: "Home Support Worker Pilot", linkTo: "" },
    ],
  },
  { title: "AIP Atlantic Immigration Program", linkTo: "" },
  { title: "Agri-Food Pilot", linkTo: "" },
];

export default sitemapImmigrate;
