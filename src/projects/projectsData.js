import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "NextTalk",
    image: projectOne,
    description: (
      <>
        <p>
          A dynamic Discord-like chat application using Next.js, powered by
          real-time messaging through WebSocket technology. Implemented secure
          user authentication, facilitated CRUD operations for messages, and
          ensured seamless cross-device compatibility.
        </p>
      </>
    ),
    github: "https://github.com/Sanjay-Nathwani/NEXTJS_GroupChatApp",
    demo: "https://nextjsgroupchatapp-production.up.railway.app/",
  },

  2: {
    title: "EliteCart",
    image: projectTwo,
    description: (
      <>
        <p>
          A feature-rich online shopping platform that offers a seamless and
          user-friendly shopping experience. Built on the powerful combination
          of MongoDB, Express.js, React, and Node.js, it provides the foundation
          for a dynamic and responsive e-commerce application.
        </p>
      </>
    ),
    github: "https://github.com/Sanjay-Nathwani/Mern_Ecommerce",
    demo: "https://elite-cart.onrender.com/",
  },

  3: {
    title: "BloggyPress",
    image: projectThree,
    description: (
      <>
        <p>
          An immersive blog application with Django framework, featuring robust
          user authentication, CRUD operations for posts, and responsive design.
          Achieved a 40% boost in user engagement, reduced spam comments by 25%,
          and ensured seamless cross-device compatibility.
        </p>
      </>
    ),
    github: "https://github.com/Sanjay-Nathwani/Django_Blog_App",
    demo: "https://djangoblogapp.up.railway.app/",
  },

  // 3: {
  //   title: "Django Todo List",
  //   image: projectThree,
  //   description: (
  //     <>
  //       <p>
  //         A feature-rich web application using Django framework to enable
  //         multiple users to create, manage, and prioritize their personal todo
  //         lists securely.
  //       </p>
  //     </>
  //   ),
  //   github: "https://github.com/Sanjay-Nathwani/Django_Multiuser_ToDo",
  //   demo: "https://django-multiuser-todo-9uq7b3u6j-sanjay-nathwani.vercel.app/",
  // },

  //   3: {
  //     title: "Real Estate Location Based Website",
  //     image: projectThree,
  //     description: (
  //       <>
  //         <p>
  //           Lorem ipsum sit amet dollar mabturu jssa bdgsah lorem ipsum sit ament
  //           ome ksighjf hsba dsa nsdbdjf sjaisl fjsah fhaga klfsah hsjh fdsbh.
  //         </p>
  //       </>
  //     ),
  //     github: "hhtps://github.com",
  //     demo: "https://netlify.com",
  //   },
};

export default projects;