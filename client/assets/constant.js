var App = {

  button: {
    learnMore : "Learn More",
    detail : "Detail",
    search: "Search"
  },

  homeMenu: {
    item1 : {name: "Programs", link: "/programs"},
    item2 : {name: "Partners", link: "/partners"},
    item3 : {name: "About Us", link: "/about-us"},
    item4 : {name: "Donate", link: "/donate"}
  },

  pageMenu: {
    login: "Log in to your application",
    item1 : {name: "Program", link: "/programs"},
    item2 : {name: "Apply", link: "/apply"},
    item3 : {name: "About", link: "/about"},
    item4 : {name: "Partners", link: "/partners"},
    item5 : {name: "donate", link: "/donate"}
  },

  footer: {
    email: "malnemail@seovn.com",
    item1 : {name: "Programs.", link: "/programs"},
    item2 : {name: "Apply.", link: "/apply"},
    item3 : {name: "Partners.", link: "/partners"},
    item4 : {name: "About Us.", link: "/about-us"},
    item5 : {name: "Donate.", link: "/donate"}
  },

  home : {
    spotlight: {
      title: "Make an impact.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sodales ipsum. Aenean pellentesque arcu a rhoncus eleifend.",
      link: "Apply Now"
    },
    company : {
      title: "Company Mission,",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sodales ipsum. Aenean pellentesque arcu a rhoncus eleifend. Suspendisse at libero tincidunt, consequat lacus a, tempor tellus, consequat lacus a, tempor tellus, tempor tellus.",
    },
    "partner" : {
      title : "Our Partners",
      description: "Advertise your partners and the industries you offer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sodales ipsum. Aenean pellentesque arcu a rhoncus eleifend. Suspendisse at libero tincidunt, consequat lacus a, tempor tellus. Suspendisse at libero tincidunt, consequat lacus a, tempor tellus. . Suspendisse at libero tincidunt, consequat lacus a, tempor tellus."
    }
  },

  partners : {
    title: "Our Partners",
    sideBarTitle: "View All",
    sideBars: [
      {
        title: "Finance",
        items: {
          golds: [{name: "EY", logo: "EY.png"}, {name: "PwC", logo: "PWC.png"}],
          silvers: [{name: "Horizon", logo: "Horizon.jpg"}, {name: "VinaCapital", logo: "VinaCapital.jpg"}, {name: "HSC", logo: "HSC.jpg"}],
          normals:[{name: "VIG", logo: "VIG.png"}, {name: "Indochina Capital", logo: "Indochina_Capital.jpg"}, {name: "ACB", logo: "ACB.png"}, {name: "SSI", logo: "SSI.jpg"}]
        }
      }, {
        title: "Technology",
        items: {
          golds: [],
          silvers: [],
          normals:[{name: "M-Service", logo: "M_Service.png"}, {name: "Zalora", logo: "Zalora_Vietnam.jpg"}, {name: "Lazada", logo: "Lazada_VN.png"}, {name: "iVivu", logo: "ivivu.png"}, {name: "Tiki", logo: "Tiki_VN.png"}]
        }
      }, {
        title: "Media",
        items: {
          golds: [{name: "Vietnam Esports", logo: "VN_Esports.png"}],
          silvers: [],
          normals:[{name: "VNG", logo: "VNG.jpg"}, {name: "XLE", logo: "XLE_Group.png"}, {name: "YanTV", logo: "YAN.jpg"}]
        }
      }, {
        title: "FMCG",
        items: {
          golds: [{name: "Vinataba-Phillip Morris", logo: "PM-Vinataba.jpg"}],
          silvers: [{name: "Kinh Do (KDC)", logo: "Kinh_Do.png"}],
          normals:[]
        }
      }, {
        title: "Ngo",
        items: {
          golds: [],
          silvers: [],
          normals:[{name: "San Art", logo: "San_Art.png"}, {name: "LIN", logo: "LIN.png"}]
        }
      }, {
        title: "Education",
        items: {
          golds: [],
          silvers: [{name: "Everest Education", logo: "E2.gif"}, {name: "Yola", logo: "Yola.jpg"}],
          normals:[]
        }
      }
    ]
  },

  program : {
    title : "SEO-VN Summer Program",
    sideBar : [
      {
        title: "Program Overview",
        link: "/programs",
        active: true,
        items: [{title: "Career program", active: true, link: "/programs"}, {title: "Momentum Program", active: false, link: "#"}]
      }, {
        title: "Apply",
        link: "/apply",
        active: false,
        items: []
      }, {
        title: "Be a partner",
        link: "/partners",
        active: false,
        items: []
      }, {
        title: "Past programs",
        link: "/past-programs",
        active: false,
        items: []
      }
    ],
    content: {
      introduction: {
        title: "Join us, because we...",
        lines: [
          {keyword: "Connect", text: "high-achieving students with opportuni-ties at leading businesses and NPOs in Vietnam."},
          {keyword: "Develop", text: "outstanding young professionals through a series of rigorous training, networking events, and mentoring opportunities."},
          {keyword: "Inspire", text: "a sense of social responsibilities through communities projects."}
        ]
      },
      globalPresence: {
        title: "Our Global Presence",
        image: "http://placehold.it/1200x512?text=Image",
        description: ["Optional text block about global presence.", "No nulla debet percipitur vim, cu sed case instructior. Nominavi tacimates ut vel. Nibh nemore dicunt ei qui, ex enim soleat dissentiet mei."]
      },
      statistic: {
        title: "2015 Internship Statistics",
        image: "http://placehold.it/992x512?text=Image",
        description: ["Optional text block about internship.", "No nulla debet percipitur vim, cu sed case instructior. Nominavi tacimates ut vel. Nibh nemore dicunt ei qui, ex enim soleat dissentiet mei."]
      },
      speech: {
        text: "It does not matter where you start, it matters how fast you grow.",
        owner: "Tony Ngo, Chairman and Founder"
      }
    }
  },

  pastPrograms : {
    title : "SEO-VN Summer Program",
    description: {
      title: "Insert quote or descriptive text block.",
      text: "Lorem ipsum dolor sit amet, et usu fabulas vocibus, assum fabellas sensibus est te. Et priimpedit rationibus, modo commune qualis-que usu ei, nam eu habeo expetenda."
    },
    instruction: "Select a year, or just scroll.",
    continue: "(... until 2009)",
    sideBar : [
      {
        title: "Program Overview",
        link: "/programs",
        active: false,
        items: [{title: "Career program", active: false, link: "/programs"}, {title: "Momentum Program", active: false, link: "#"}]
      }, {
        title: "Apply",
        link: "/apply",
        active: false,
        items: []
      }, {
        title: "Be a partner",
        link: "/partners",
        active: false,
        items: []
      }, {
        title: "Past programs",
        link: "/past-programs",
        active: true,
        items: []
      }
    ],
    timeline: {
      title: "SEO-VN through History",
      chart: [
        {
          year: 2009,
          interns: {count: 5, subfix: "Interns"},
          companies: {count: 1, subfix: "Company"}
        },
        {
          year: 2010,
          interns: {count: 15, subfix: "Interns"},
          companies: {count: 16, subfix: "Companies"}
        },
        {
          year: 2011,
          interns: {count: 26, subfix: "Interns"},
          companies: {count: 13, subfix: "Companies"}
        },
        {
          year: 2012,
          interns: {count: 27, subfix: "Interns"},
          companies: {count: 18, subfix: "Companies"}
        },
        {
          year: 2013,
          interns: {count: 37, subfix: "Interns"},
          companies: {count: 18, subfix: "Companies"}
        },
        {
          year: 2014,
          interns: {count: 57, subfix: "Interns"},
          companies: {count: 28, subfix: "Companies"}
        },
        {
          year: 2015,
          interns: {count: 66, subfix: "Interns"},
          companies: {count: 33, subfix: "Companies"}
        }
      ]
    }
  }
};