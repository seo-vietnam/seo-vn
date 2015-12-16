var App = {

  pageTitle: {
    home: "Home",
    apply: "Apply",
    program: "Program",
    momentum: "Momentum Program",
    pastProgram: "Past Programs",
    about: "About Us",
    partner: "Partners",
    dontate: "Donate"
  },

  button: {
    learnMore : "Learn More",
    detail : "Detail",
    search: "Search",
    startMyApplication: "Start My Application",
    beAMomentumPartner: "Be a Momentum Partner"
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
    item3 : {name: "About", link: "/about-us"},
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
      title: "Make an impact",
      description: "Sponsors for Educational Opportunity - Vietnam (SEO-Vietnam) provides superior educational and career programs to students to maximize their opportunities for professional success",
      link: "Apply Now"
    },
    company : {
      title: "SEO-Vietnam Mission",
      description: "We are committed to connecting high-achieving students and young professionals with structured opportunities to intern and work for leading businesses and non-profit organizations in Vietnam",
    },
    "partner" : {
      title : "Our Partners",
      description: "SEO-Vietnam has successfully partnered with 35 prestigious financial services, retail, and non-profit organizations to provide the best internship experience to our students in Vietnam"
    }
  },

  apply: {
    title: "What To Know Before Applying",
    left: {
      fact1: {title: "Check your eligibility", description: "Candidates must either be enrolled in an undergraduate/graduate program or graduate no sooner than December 2015"},
      fact2: {title: "Prepare your application", description: "While all candidates are welcome to apply, their alignment with SEO-V's mission, vision and values are strongly preferred"}
    },
    right: {
      title: "Dates and Deadlines",
      events: [
        {date: "January 2016", name:"VN/Asia Webinar (Time TBD)"},
        {date: "20/12/15", name:"US/Europe Webinar (10am EST - 11am EST)"}
      ],
      deadline: {date: "15/01/16", description: "Deadline to Apply for Summer Program 2016"}
    },
    process: {
      title: "Application Process Timeline",
      rounds: [
        {name: "Round 1", time: "15/12/2015 - 15/1/2016"},
        {name: "Round 2", time: "15/2/2016 - 4/3/2016"},
        {name: "Round 3", time: "16/3/2016 - 16/4/2016"},
        {name: "Final Offers", time: "April 2016"}
      ],
      paragraph: {
        title: "SEO-Vietnam Career Program",
        firstLine: "Location: Ho Chi Minh City and Hanoi",
        content: "SEO-Vietnam's placement process connects our students with top-notch financial services, retail, and non-profit organizations in Vietnam. Our career program also include rigorous training, mentorship and a Summer Seminar Series that featured executives and leaders in business, government and non-profit organizations"
      }
    }
  },

  partners : {
    title: "Our Partners",
    sideBarTitle: "View All",
    sideBars: [
      {
        title: "Finance",
        items: {
          golds: [
            {
              name: "EY",
              logo: "EY.png",
              description: "EY is a multinational professional services firm headquartered in London, United Kingdom. It is one of the “Big Four” audit firms, and is the third largest professional services firm in the world by aggregated revenue in 2014, after PwC and Deloitte."
            },
            {
              name: "PwC",
              logo: "PWC.png",
              description: " PricewaterhouseCoopers is a multinational professional services network. It is the largest professional services firm in the world, and is one of the “Big Four” auditors."
            }
          ],
          silvers: [
            {
              name: "Horizon",
              logo: "Horizon.jpg",
              description: "Horizon Capital Group provides investment banking, corporate finance advisory, securities brokerage, and asset management services. The firm's subsidiaries include Horizon Securities Corporation, Horizon Capital Advisers, and Horizon Capital Assets Management."
            },
            {
              name: "VinaCapital",
              logo: "VinaCapital.jpg",
              description: "VinaCapital is an investment management and real estate development firm in Vietnam, with a diversified portfolio of USD1.5 billion in assets under management"
            },
            {
              name: "HSC",
              logo: "HSC.jpg",
              description: "Ho Chi Minh City Securities Corporation (HSC) is a professional securities brokerage and equity firm in Vietnam. HSC delivers a comprehensive list of financial services for Private and Institutional Clients and provides professional investment advisory"
            }
          ],
          normals:[
            {
              name: "VIG",
              logo: "VIG.png",
              description: "VI (Vietnam Investments) Group is a private equity firm that focuses on high growth businesses in Vietnam"
            },
            {
              name: "Indochina Capital",
              logo: "Indochina_Capital.jpg",
              description: "Founded in 1999, Indochina Capital is one of Vietnam’s leading financial services and investment firms active in asset management"
            },
            {
              name: "ACB",
              logo: "ACB.png",
              description: "Asia Commercial Bank is the largest private bank in Vietnam by assets. Its branch network system totalled nearly 9000 employees offering a variety of services to clients"
            },
            {
              name: "SSI",
              logo: "SSI.jpg",
              description: "Saigon Securities Inc. is a leading and reputable financial corporation in Vietnamese market. SSI has an extensive branch network in Vietnam at major cities such as Hanoi, Ho Chi Minh City, Nha Trang, Vung Tau"
            }
          ]
        }
      }, {
        title: "Technology",
        items: {
          golds: [],
          silvers: [],
          normals:[
            {
              name: "M-Service",
              logo: "M_Service.png",
              description: "M_Service provides financial service under the brand name of MoMo. MoMo provides new channels for customers, who have a mobile phone, to access traditional retail financial services via an extensive distribution network of mobile operators"
            },
            {
              name: "Zalora",
              logo: "Zalora_Vietnam.jpg",
              description: "ZALORA is an e-commerce platform and website that provides fashion and footwear products. Users can view images and purchase their desired fashion product online while receiving fashion tips and advice from the site"
            },
            {
              name: "Lazada",
              logo: "Lazada_VN.png",
              description: "Lazada is part of Lazada Group - a privately owned e-commerce company headquartered in Sngapore that was found by Rocket Internet in 2011 with the goal of being “the Amazon.com of Southeast Asia”"
            },
            {
              name: "iVivu",
              logo: "ivivu.png",
              description: ":iVivu is a joint venture that offers a hotel management system for smart hotels in Australia. Catering to a customer base in Southeast Asian countries such as Vietnam, IVivu enables travelers to reserve social workshops, hotels, and medical facilities online"
            },
            {
              name: "Tiki",
              logo: "Tiki_VN.png",
              description: "Tiki.vn is an e-commerce startup in Vietnam which offers customer service 7 days a week, free nationwide delivery, a wide range of 35,000 products ranging from books in both Vietnamese and English, e-book devices, gifts, stationary, fashion apparel, and accessories"
            }
          ]
        }
      }, {
        title: "Media",
        items: {
          golds: [
            {
              name: "Vietnam Esports",
              logo: "VN_Esports.png",
              description: "Vietnam Esports, formerly known as Garena Vietnam, was founded in 2009 and has been developing very fast in e-Sports & internet industry. Its featured product include Garena Plus, Gcafe, League of Legends, Fifa Online 3, etc."
            }],
          silvers: [],
          normals:[
            {
              name: "VNG",
              logo: "VNG.jpg",
              description: 'VNG motto is to "make the Internet change Vietnamese lives." It believes in the power of the Internet and sees it as its mission to bring Internet users meaningful experiences'
            },
            {
              name: "XLE",
              logo: "XLE_Group.png",
              description: "XLE seeks to become the central figure in transforming the sports’ eco-system in Vietnam. Besides making sports a great entertainment experience and a sustainable business; we also focus on developing youth and inspiring millions of sports fans in Vietnam"
            },
            {
              name: "YanTV",
              logo: "YAN.jpg",
              description: "YMG and its subsidiaries is a entertainment multi-media corporate in Vietnam focusing on developing synthetic forms of entertainment for the youth, being integrated in almost every major communication platforms including TV, digital, event and production"
            }]
        }
      }, {
        title: "FMCG",
        items: {
          golds: [
            {
              name: "Vinataba-Phillip Morris",
              logo: "PM-Vinataba.jpg",
              description: "Philip Morris International Inc. (PMI) is the leading international tobacco company, with six of the world’s top 15 international brands, including Marlboro, the number one cigarette brand worldwide"
            }],
          silvers: [
            {
              name: "Kido Group",
              logo: "Kinh_Do.png",
              description: "is a business group of Vietnam with an emphasis on food production, including baked goods, confections, snacks and soft drinks. The corporate group also includes companies in the fields of financial services, real estate and a retail bakery chain."
            }],
          normals:[]
        }
      }, {
        title: "Ngo",
        items: {
          golds: [],
          silvers: [],
          normals:[
            {
              name: "San Art",
              logo: "San_Art.png",
              description: "Sàn Art is an artist initiated, non-profit contemporary art organization committed to the exchange and excavation of cultural knowledge within an interdisciplinary community"
            },
            {
              name: "LIN",
              logo: "LIN.png",
              description: "The LIN Center for Community Development (LIN) provides support services to local NPOs, skilled volunteers and donors who are committed to building strong communities"
            }
          ]
        }
      }, {
        title: "Education",
        items: {
          golds: [],
          silvers: [
            {
              name: "Everest Education",
              logo: "E2.gif",
              description: "Founded by Harvard and Stanford graduates, E2 prepares students mentally and academically for rigors of an international education in E2's small classes, camps, and VIP tutoring"
            },
            {
              name: "Yola",
              logo: "Yola.jpg",
              description: "As a premier provider of educational services in Vietnam, YOLA provides a wide range of educational programs and products, including test preparation courses,English language, soft-skill training, after-school tutoring, summer camps, and development of educational content"
            }
          ],
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
        items: [{title: "Career program", active: true, link: "/programs"}, {title: "Momentum Program", active: false, link: "/momentum-program"}]
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
      globalPresence: {
        image: "/assets/images/programs/map2.png",
        description: ["Optional text block about global presence.", "No nulla debet percipitur vim, cu sed case instructior. Nominavi tacimates ut vel. Nibh nemore dicunt ei qui, ex enim soleat dissentiet mei."],
        statisticImage: "http://placehold.it/992x712?text=Chart"
      },
      components: {
        title: "Program Components",
        items: [
          {
            title: "Internship Placement",
            introduction: "Text block about internship placement.",
            lines: ["No nulla debet percipitur vim, cu sed case instructor. Nominavi taci-mastes ut vel. Nibh nemore dicunt ei qui. ex soleat dissentiet mei.", "Lorem ipsum dolor sit amet, et usu fabulas vocibus, assum fabellas sensibus est te."],
            images: ["/assets/images/programs/Internship-Placement_1.jpg", "/assets/images/programs/Internship-Placement_2.jpg"]
          },
          {
            title: "Training Program",
            lines: ["On top of the internships, students attend a rigorous training program designed to build up a string skills set critical to career success."],
            images: ["/assets/images/programs/Training-Program_1.jpg", "/assets/images/programs/Training-Program_2.jpg"]
          },
          {
            title: "Careers Talk",
            lines: ["SEO-V Careers Program also includes bi-weekly on-site visits and networking events at partner companies."],
            images: ["/assets/images/programs/Speaker-Series_1.jpg", "/assets/images/programs/Speaker-Series_2.jpg"]
          },
          {
            title: "Community Projects",
            lines: ["Students give back to the community by completing a 8-week project with a local NPO."],
            images: ["/assets/images/programs/Community-Service_1.jpg", "/assets/images/programs/Community_Service-2.jpg"]
          }
        ]
      },
      speech: {
        text: "It does not matter where you start, it matters how fast you grow.",
        owner: "Tony Ngo, Chairman and Founder"
      }
    }
  },

  momentumProgram : {
    title : "SEO-VN Summer Program",
    sideBar : [
      {
        title: "Program Overview",
        link: "/programs",
        active: true,
        items: [{title: "Career program", active: false, link: "/programs"}, {title: "Momentum Program", active: true, link: "/momentum-program"}]
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
      title: "Join Us",
      image: "/assets/images/programs/momentum/Momentum.jpg",
      lines: ["Lorem ipsum dolor sit amet, et usu fabulas vocibus, assum fabellas sensibus est te. Et priimpedit rationibus, modo commune qualis-que usu ei, nam eu habeo expetenda. Lorem ipsum dolor sit amet, et usu fabulas vocibus, assum fabellas sensibus est te. Et priimpedit rationibus, modo commune qualis-que usu ei, nam eu habeo expetenda."],
      partner: {
        title: "Partner",
        image: "/assets/images/programs/momentum/Partner_SEO-V.png",
        link: "#"
      },
      projects: {
        title: "Projects",
        logos: [
          {
            image: "/assets/images/programs/momentum/Project_1_Healthcare.jpg",
            link: "#"
          },
          {
            image: "/assets/images/programs/momentum/Project_2_Environment.jpg",
            link: "#"
          },
          {
            image: "/assets/images/programs/momentum/Project_3_Education.jpg",
            link: "#"
          }
        ]
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
    sideBar : [
      {
        title: "Program Overview",
        link: "/programs",
        active: false,
        items: [{title: "Career program", active: false, link: "/programs"}, {title: "Momentum Program", active: false, link: "/momentum-program"}]
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
          companies: {count: 2, subfix: "Companies"}
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
    },
    histories: [
      {
        year: 2015,
        events: [
          {
            description: "SEO-Vietnam hosted its first career program in Hanoi, connecting more and more candidates to companies based in the area.",
            image: "/assets/images/programs/past/2015_1.jpg",
            type: 2,
            isFirst: true
          },
          {
            description: "2015 is the first year SEO-Vietnam initiated a spring career program tailored for local students in both Hanoi and HCMC.",
            image: "/assets/images/programs/past/2015_2.jpg",
            type: 2
          }
        ]
      },
      {
        year: 2014,
        events: [
          {
            description: "In addition to offline info sessions, SEO-Vietnam hosts the first series of live Webinar where candidates could ask questions for panelists directly",
            image: "/assets/images/programs/past/2014.jpg",
            type: 2,
            isFirst: true
          },
          {
            description: "Lorem ipsum dolor sit amet, consectetur velit sed do eiusmod tempor incididunt ut. Ut enim ad minim veniam, quis",
            image: "/assets/images/programs/past/2014_2.jpg",
            type: 2
          }
        ]
      },
      {
        year: 2013,
        events: [
          {
            description: "The SEO-Vietnam success story carried on with more and more applicants securing the best internships.",
            image: "/assets/images/programs/past/2013_1.jpg",
            type: 2,
            isFirst: true
          },
          {
            description: "SEO-Vietnam registered 37 students interning at 18 companies for its 2013 summer program.",
            image: "/assets/images/programs/past/2013_2.jpg",
            type: 2
          }
        ]
      },
      {
        year: 2012,
        events: [
          {
            description: "In summer 2012, SEO-Vietnam made an impressive achievement – doubling the number of applicants.",
            image: "/assets/images/programs/past/2012_1.jpg",
            type: 2,
            isFirst: true
          },
          {
            description: "Out of 482 candidates, we successfully selected 27 students and matched them with 17 partner employers.",
            image: "/assets/images/programs/past/2012_2.jpg",
            type: 2
          }
        ]
      },
      {
        year: 2011,
        events: [
          {
            description: "In summer 2011, SEO-Vietnam successfully expanded our program to include partner employers ranging from financial services firms, technology start-ups to educational institution.",
            image: "/assets/images/programs/past/2011_1.jpg",
            type: 2,
            isFirst: true
          },
          {
            description: "We hosted the first off-line info session at various local universities to promote our organization to more students.",
            image: "/assets/images/programs/past/2011_2.jpg",
            type: 2
          }
        ]
      },
      {
        year: 2010,
        events: [
          {
            description: "In summer 2010, SEO-IIV hosted a total of 13 summer seminar series, 9 training sessions and workshops, with one opening dinner accompanied by the welcoming speech by the founders of SEO, and provided a mentoring program.",
            type: 1,
            isFirst: true
          },
          {
            items: [
              {
                image: "http://placehold.it/400x500?text=Image",
                description: "Lorem ipsum dolor sit amet, consectetur velit sed do eiusmod tempor incididunt ut. Ut enim ad minim veniam, quis.",
              },
              {
                image: "http://placehold.it/400x500?text=Image",
                description: "Lorem ipsum dolor sit amet, consectetur velit sed do eiusmod tempor incididunt ut. Ut enim ad minim veniam, quis.",
              },
              {
                image: "http://placehold.it/400x500?text=Image",
                description: "Lorem ipsum dolor sit amet, consectetur velit sed do eiusmod tempor incididunt ut. Ut enim ad minim veniam, quis.",
              }
            ],
            type: 3
          }
        ]
      },
      {
        year: 2009,
        events: [
          {
            description: "The summer program of 2009 provided opportunities to connect 5 interns from a diversity of backgrounds with Vietnamese leading financial firms (Horizon Capital and IDG Ventures Vietnam). The interns were placed in different divisions of IIV’s partner companies, receiving on-the-job training and mentorship from a firm supervisor. This ideology of giving the interns first hand experience during their internship enhanced IIV’s quality as an internship provider in Vietnam, and also a close model to professional internships in New York or London. In addition, an emphasis on the “giving back to society” spirit was also put forward. Every intern was required to work on a community project of their own, contributing through volunteerism and leadership.",
            type: 1,
            isFirst: true
          }
        ]
      }
    ]
  },

  aboutUs : {
    title: "Who We Are",
    sideBar : [
      {
        title: "Our story",
        link: "/about-us",
        active: "story",
        items: []
      }, {
        title: "Our vision, mission, and values",
        link: "/about-us-vmv",
        active: "vmv",
        items: []
      }, {
        title: "Our people",
        link: "/about-us-people",
        active: "people",
        items: []
      }
    ],
    chairman: {
      image: "/assets/images/about-us/Tony.jpg",
      text: "Tony Ngo, Chairman and Founder"
    },
    stories: [
      "Since 2007 when he first met with management teams in Vietnam as an investor, Tony Ngo has observed the need and potential for talented young leaders to shape the trajectory of Vietnam's development. In 2009, Tony founded 'Interns in Vietnam' (IIV) to develop leaders who will not only succeed on an individual level, but will also make a difference by driving business, economic, and social changes in their communities.",
      "IIV is predicated on cultivating professional development and leadership skills, and IIV’s first initiative achieves this through a summer internship program that connects high-achieving students with opportunities in Vietnam. The initial program successfully placed five students at Horizon Capital and IDG Ventures Vietnam in the summer of 2009.",
      "In 2010, IIV partnered with Sponsors for Educational Opportunity (SEO), a U.S based non-profit organization that provides educational and career programs to young people from underserved communities, to form SEO-Vietnam. In its first year, SEO-Vietnam received over 180 applications and successfully placed 13 students in 7 firms at several prestigious financial services, retail, and non-profit organizations in Vietnam. The program also expanded to include rigorous training, mentorship and a Summer Seminar Series that featured executives and leaders in business, government and non-profit organizations."
    ],
    vision: "SEO-Vietnam is a non-profit organization founded in 2009 with a vision to create a powerful network of support and develop leadership capacity among professionals who will make a difference in Vietnam. We aspire to be a driving force that will propel young, bright-minded and ambitious Vietnamese forward for a successful future of Vietnam by giving them guidance and opportunities to grow. We aim to inspire them to cultivate intellect, character, integrity and a sense of social responsibility for the progressive and sustainable development of the nation.",
    mission: [
        "Connecting high-achieving students and young professionals with structured opportunities to intern and work for leading businesses and non-profit organizations in Vietnam",
        "Producing outstanding young professionals through rigorous training, mentoring and speaker events",
        "Inspiring a sense of social responsibility"
    ],
    values: [
      {
        title: "Excellence and continuous self-improvement",
        text: "We are devoted to training high-caliber candidates with ambitions, lifelong learning drive and great potentials. We encourage both individual initiative, ability and creativity and teamwork."
      },
      {
        title: "Leadership",
        text: "We promote a dedication to serving a greater good."
      },
      {
        title: "Integrity",
        text: "We uphold the principle of offering opportunity based on merit, and treat every participant, partner, sponsor equally in every action and decision."
      },
      {
        title: "Diversity and Inclusion",
        text: "We foster an environment that encourages multicultural perspectives and conversations at all levels within our organization"
      }
    ],
    directors: [
      {
        image: "http://placehold.it/300x300?text=People",
        name: "Name",
        description: "Description"
      },
      {
        image: "http://placehold.it/300x300?text=People",
        name: "Name",
        description: "Description"
      },
      {
        image: "http://placehold.it/300x300?text=People",
        name: "Name",
        description: "Description"
      },
      {
        image: "http://placehold.it/300x300?text=People",
        name: "Name",
        description: "Description"
      }
    ],
    members: [
      {
        image: "http://placehold.it/300x300?text=People",
        name: "Name",
        description: "Description"
      },
      {
        image: "http://placehold.it/300x300?text=People",
        name: "Name",
        description: "Description"
      },
      {
        image: "http://placehold.it/300x300?text=People",
        name: "Name",
        description: "Description"
      },
      {
        image: "http://placehold.it/300x300?text=People",
        name: "Name",
        description: "Description"
      }
    ]
  },

  donate: {
    title: "Deepen Our Impact",
    description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque sem quis enim volutpat, sed scelerisque lacus tincidunt. Etiam lorem enim, congue et efficitur posuere, volutpat vel est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut malesuada tempor quam, id pharetra tortor bibendum eu. Morbi efficitur pellentesque purus, sed varius nibh.",
    description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque sem quis enim volutpat, sed scelerisque lacus tincidunt. Etiam lorem enim, congue et efficitur posuere, volutpat vel est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut malesuada tempor quam, id pharetra tortor bibendum eu. Morbi efficitur pellentesque purus, sed varius nibh. Nullam libero dui, rutrum id leo quis, mattis tincidunt sem. In eleifend elit erat, a posuere lacus commodo vel. Vivamus sagittis diam metus, a faucibus lorem tincidunt nec. Nunc non blandit nulla. Mauris blandit sagittis vehicula. Phasellus dictum vestibulum imperdiet.",
    image: "http://placehold.it/1200x300?text=Image",
    video: "https://www.youtube.com/embed/KOO6MdLuUaU"
  }
};
