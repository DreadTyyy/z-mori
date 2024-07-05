const dataProjects = () => {
  return [
    {
      id: 2,
      title: "Together App",
      cover: "together.png",
      bigCover: "together-head.png",
      pictures: [
        "together.png",
        "together2.png",
        "together3.png",
        "together4.png",
      ],
      slug: "together-app",
      category: ["Web Development", "Full Stack Development"],
      description:
        "Together App is a platform for people with disabilities to create forums, post blogs, and interact after logging in.",
      content:
        "Project website development challange from IdCamp. This website is a shared platform for people with disabilities. On this website, users can do various things, such as creating discussion forums, posting blogs, and participating in contests. The website is equipped with a login feature that allows users to express their thoughts through their respective accounts. Users can interact with other users using the forum feature provided on this website. In working on this project, I learned new things about creating APIs using Express to connect the database displayed on the website with ReactJS.",
      date: "2024",
      technology: ["ReactJS", "Tailwind", "Javascript", "MySQL", "ExpressJS"],
      github: "",
      urlSite: "https://app-togheter-lac.vercel.app/",
    },
    {
      id: 1,
      title: "Movie Star",
      cover: "movie-star.png",
      bigCover: "movie-star-head.png",
      pictures: ["movie-star.png", "movie-star2.png", "movie-star3.png"],
      slug: "movie-star",
      category: ["Web Development", "API IMDB"],
      description:
        "Movie Star is a web application that allows users to search and discover information about the latest movies and TV shows.",
      content:
        "Personal project web application. This website is an application used to obtain information about movies and TV shows. It provides a search feature that allows users to find desired movies. The website is connected to the IMDB API to retrieve movie data, which is then displayed on the site. Users can view the latest and most popular movies sourced from IMDB. In this project, I learned how to fetch API data from IMDB using ReactJS.",
      date: "2024",
      technology: ["ReactJS", "Tailwind", "Javascript", "IMDB"],
      github: "https://github.com/DreadTyyy/movieStar/",
      urlSite: "https://movie-star-jrfj.vercel.app/",
    },
    {
      id: 3,
      title: "Acciojob Clone",
      cover: "acciojob.png",
      bigCover: "acciojob-head.png",
      pictures: [
        "acciojob.png",
        "acciojob2.png",
        "acciojob3.png",
        "acciojob4.png",
      ],
      slug: "acciojob",
      category: ["Website Cloning", "Web Development"],
      description:
        "This is a personal project to clone the Acciojob website, where I learned about styling and layout to create a responsive website.",
      content:
        "This is a personal project to clone the website acciojob.com. Acciojob is a platform for learning about technology. In this project, I attempted to create a website using the design implemented on the Acciojob website. I learned new things about styling and layout in web development. This website is responsive and works well on various devices.",
      date: "2023",
      technology: ["HTML", "CSS", "Bootstrap", "Javascript"],
      github: "https://github.com/DreadTyyy/Acciojob_UIUX",
      urlSite: "https://dreadtyyy.github.io/Acciojob_UIUX/",
    },
    {
      id: 4,
      title: "Atround",
      cover: "atround.png",
      bigCover: "atround-head.png",
      pictures: ["atround.png", "atround2.png", "atround3.png", "atround4.png"],
      slug: "atround",
      category: ["Website Redesign", "Web Development"],
      description:
        "Project redesign website atround.com with responsive design and engaging animations using GSAP and AOS.",
      content:
        "Project redesign website atround.com. Atround is a platform for connecting with people nearby through online messaging. In this project, I revamped the design of the atround website, incorporating engaging animations. I implemented animations using GSAP and AOS to enhance the visual appeal and interactivity of the website. The website is also built with a responsive design to optimize user experience across various devices.",
      date: "2023",
      technology: ["HTML", "Tailwind", "Javascript", "GSAP"],
      github: "https://github.com/DreadTyyy/landing_page_at",
      urlSite: "https://dreadtyyy.github.io/landing_page_at/",
    },
    {
      id: 5,
      title: "Dread Notes",
      cover: "dread-notes.png",
      bigCover: "dread-notes-head.png",
      pictures: [
        "dread-notes.png",
        "dread-notes2.png",
        "dread-notes3.png",
        "dread-notes4.png",
      ],
      slug: "dread-notes",
      category: ["Web Development"],
      description:
        "A web application for storing and managing notes with login feature and dicoding API integration for data storage.",
      content:
        "This is a personal project to create a web application for storing notes. Users can create, archive, delete, and view details of their notes. The website includes login functionality and utilizes data storage connected to dicoding's API, ensuring user data is stored in a database. This website is my final project for the 'Belajar Membuat Aplikasi Web dengan React' course provided by dicoding.com.",
      date: "2023",
      technology: ["ReactJS", "Tailwind"],
      github: "https://github.com/DreadTyyy/dread-notes",
      urlSite: "https://dread-notes.vercel.app/",
    },
  ];
};

export default dataProjects;
