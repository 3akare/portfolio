import image from "../image.jpg";
import asl_image from "../asl.webp"

export const projects = [
    {
        id: 0,
        name: "ASL Recognition System",
        data: {
            image: asl_image,
            title: "ASL Recognition",
            description: "Converts American Sign Language gestures into audio.",
            link: "/projects/0",
            tools: [
                "Python",
                "Mediapipe",
                "gRPC",
                "Flask",
                "T5 Transformer",
                "Web Speech API"
            ],
            liveUrl: "Not Available",
            sourceUrl: "https://github.com/3akare/ASL-Recognition-System",
            paragraphs: [
                "This application leverages Mediapipe for gesture detection and gRPC for efficient communication between the client and server. The process begins with a pre-trained AI model. During runtime, Mediapipe captures hand gestures and sends the corresponding data to the backend server through a gRPC connection. The server processes this data and sends a response, which is rendered on the frontend built with Flask. This design ensures smooth and fast gesture recognition, making it a valuable tool for accessibility and communication.",
            ],
            additional: [
                "The project serves as my final year project and is centered on creating an accessible solution for bridging communication gaps. By combining AI tools and efficient server communication, it highlights the potential of technology to make a real difference in people's lives.",
                "The project simplifies complex gesture recognition processes by modularizing the architecture into distinct components: the frontend, which captures gestures and displays results, and the backend, which processes data and sends responses. The modular design facilitates maintainability and scalability.",
                "I selected gRPC for its speed and efficiency compared to WebSockets or REST APIs, and to challenge myself with a new technology. The architecture separates concerns effectively, with the Flask application collecting gesture data as an array, sending it to the server for processing, and rendering the results on the HTML UI. The project is still in progress, with plans for further iterations to enhance its functionality."
            ]
        }
    },
    {
        id: 1,
        name: "nobr Anonymous Chat",
        data: {
            image: image,
            title: "nobr Anonymous Chat",
            description: "An anonymous chat platform.",
            link: "/projects/1",
            tools: [
                "Next.js",
                "Typescript",
                "Firebase"
            ],
            liveUrl: "https://nobr-delta.vercel.app",
            sourceUrl: "https://github.com/3akare/nobr",
            paragraphs: [
                "nobr is an anonymous chat application built with Next.js and Firebase, designed to provide users with a platform for secure and private communication. Inspired by the principles of Omegle, the application allows individuals to interact without fear of revealing their identities. Next.js was chosen for its exceptional caching and routing capabilities, ensuring seamless navigation and optimal performance, while Firebase powers the backend to handle real-time communication efficiently.",
                "The motivation behind nobr was to explore the concept of building a startup centered around anonymity and privacy in communication. The project also provided an opportunity to apply UI/UX and human-computer interaction principles. Features were designed to minimize cognitive load, incorporate intuitive metaphors, and enhance the overall user experience, ensuring the application was simple and self-explanatory to use."
            ],
            additional: [
                "While the application is live and functions as intended, challenges arose in progressing the startup due to team constraints. Collaborators, who are also college undergraduates, faced difficulty balancing their schedules, impacting the project’s momentum.",
                "Despite these challenges, the project successfully implemented advanced UI/UX principles, prioritizing user ease and interaction quality. nobr remains a testament to the potential of combining innovative ideas with modern technology like Next.js and Firebase."
            ]
        }
    },
    {
        id: 2,
        name: "Notification Service",
        data: {
            image: image,
            title: "Remita Notification Service",
            description: "A webhook-based notification service.",
            link: "/projects/2",
            tools: [
                "Spring Boot",
                "Kafka",
                "Docker"
            ],
            liveUrl: "Not Available",
            sourceUrl: "Not Available",
            paragraphs: [
                "The Remita Notification Service is a webhook-based system designed to handle high-throughput notifications within Remita's payment ecosystem. This project was undertaken during my internship at Remita, where I was tasked with completing and enhancing the application after the original engineer left. With limited support, I took ownership of the system, refactored existing components, and built critical features to ensure its reliability and scalability.",
                "The system features a robust retry mechanism: when a notification fails to reach a recipient URL, it is retried up to three times. If all attempts fail, the URL is marked as 'failed.' URLs that repeatedly fail (appearing three times in the failure database collection) are automatically blacklisted, preventing further notifications from being sent. Additionally, I integrated Remita's email service to notify users of impending blacklisting or provide alerts once their URLs were blacklisted."
            ],
            additional: [
                "The application was engineered to process over 20,000 notifications per second seamlessly. Leveraging Spring Boot and Kafka, I implemented idempotency to prevent duplicate processing of notifications, addressing challenges related to Kafka offsets. The system was also containerized with Docker for ease of deployment and scalability.",
                "This project highlights my ability to design and optimize scalable backend systems, ensuring reliability under high-load conditions. It was a valuable opportunity to work independently, applying my technical expertise to deliver a mission-critical solution for a leading fintech company."
            ]
        }
    },
    {
        id: 3,
        name: "Allcast NG Website",
        data: {
            image: image,
            title: "Allcast NG Website",
            description: "The official website for Allcast NG.",
            link: "/projects/3",
            tools: [
                "ReactJS",
                "PHP",
                "Cpanel",
            ],
            liveUrl: "https://allcast.ng",
            sourceUrl: "Not Available",
            paragraphs: [
                "The Allcast NG Official Website was developed during my tenure as part of the development team at Allcast NG. I was responsible for leading the team and building the company's official website to reflect its core mission of offering software development services and web hosting. The website was designed and implemented based on a detailed requirements document, ensuring it met the company's vision and effectively communicated its offerings to potential clients.",
                "The primary objective of the website was to create transparency and build trust by showcasing Allcast NG as a credible software company. The site serves as a gateway for users to learn about the company's services, platforms, and expertise in web hosting and software development."
            ],
            additional: [
                "The website is live and functional, representing a significant milestone in making Allcast NG more accessible and visible to its audience. As the lead developer, I ensured the design and development aligned with modern web standards and usability principles.",
                "This project highlights my ability to lead a development team, translate requirements into functional applications, and deliver results that align with a company’s goals."
            ]
        }
    },
    {
        id: 4,
        name: "Paycraft",
        data: {
            image: image,
            title: "Paycraft",
            description: "Payroll management system.",
            link: "/projects/4",
            tools: [
                "Java",
                "Spring Boot",
                "React",
                "TypeScript",
                "Kora API"
            ],
            liveUrl: "https://nobr-delta.vercel.app",
            sourceUrl: "https://github.com/3akare/nobr",
            paragraphs: [
                "Paycraft is a payroll application built during a hackathon, designed to manage payroll processing, transaction histories, and employee-employer relations. The application includes features like authentication, employee and employer management, company management, USSD integrations, and a robust payroll engine. It leverages Kora's API for seamless payment integration.",
                "This project was developed using Java (Spring Boot) for the backend and React with TypeScript for the frontend. As part of the development team, I was responsible for implementing key functionalities, including user authentication, employee management modules, and the payroll engine. The application showcased our ability to design scalable systems within a tight timeframe, earning us a fourth-place finish in the hackathon."
            ],
            additional: [
                "Though the application is no longer live due to hosting costs, it serves as a great example of teamwork, technical execution, and leveraging APIs like Kora for payment solutions.",
                "The project was an exciting challenge that highlighted the importance of collaboration and quick problem-solving in a competitive environment."
            ]
        }
    },
    {
        id: 5,
        name: "Monty Interpreter",
        data: {
            image: image,
            title: "Monty Bytecode Interpreter",
            description: "An interpreter for Monty bytecode.",
            link: "/projects/5",
            tools: [
                "C",
                "Ubuntu LTS focal"
            ],
            liveUrl: "Not Available",
            sourceUrl: "https://github.com/3akare/monty",
            paragraphs: [
                "The Monty Bytecode Interpreter is a C-based application that interprets Monty bytecode instructions and executes them like a basic calculator. It supports commands like `push`, `pop`, and `add`, as well as stack and queue operations. The application uses doubly linked lists to manage and process the bytecode efficiently, providing a practical implementation of data structures in low-level programming.",
                "This project was developed in an Ubuntu environment as part of my learning in low-level engineering. It helped me solidify my understanding of procedural programming in C, writing modular code, and applying fundamental computer science concepts like linked lists and bytecode interpretation."
            ],
            additional: [
                "While the interpreter isn’t live due to its terminal-based nature, it is thoroughly documented and available on GitHub for others to review and extend.",
                "This project highlights my ability to work with low-level programming concepts, implement data structures, and write efficient, procedural code."
            ]
        }
    },
    {
        id: 6,
        name: "Spring Boot Microservices",
        data: {
            image: image,
            title: "Microservices with Spring Boot",
            description: "Microservices using Spring Boot and Spring Cloud.",
            link: "/projects/6",
            tools: [
                "Java",
                "Spring Boot",
                "Spring Cloud",
                "Eureka",
                "Kubernetes (in progress)",
                "Redis (planned)"
            ],
            liveUrl: "Not Available",
            sourceUrl: "https://github.com/3akare/microservices",
            paragraphs: [
                "This project is a bank application designed to demonstrate microservices architecture. It consists of four main services: account, loan, card, and customer services. Each service is modular, allowing for scalability and ease of integration. The system uses an API Gateway with a Eureka server to handle service discovery and communication.",
                "The project is an ongoing effort to build a scalable and robust system. Planned integrations include Kubernetes for container orchestration, Redis for caching, and rate limiting to enhance performance and security. The project provides a practical learning experience in designing, implementing, and scaling microservices using Spring Boot and Spring Cloud."
            ],
            additional: [
                "This project was initiated to deepen my understanding of microservices architecture, including concepts like service discovery, fault tolerance, and inter-service communication.",
                "While still in progress, the application represents my commitment to mastering scalable system design and integrating modern tools like Kubernetes and Redis."
            ]
        }
    },
    {
        id: 7,
        name: "Tiny BASIC Compiler",
        data: {
            image: image,
            title: "Tiny BASIC Compiler",
            description: "A compiler for a simplified BASIC programming language.",
            link: "/projects/7",
            tools: [
                "Java",
                "JavaScript",
                "BASIC"
            ],
            liveUrl: "Not Available",
            sourceUrl: "https://github.com/3akare/Basic-Compiler",
            paragraphs: [
                "This application translates Tiny BASIC code into a dynamically typed language, specifically JavaScript. The compiler is divided into three key components: the Lexer, Parser, and Emitter. The Lexer ensures syntax validity, building an Abstract Syntax Tree (AST) to confirm structural correctness. The Parser tokenizes the input code by breaking it into manageable parts, while the Emitter generates equivalent JavaScript code based on the syntax tree.",
                "The project was motivated by a desire to deepen my understanding of compiler design. Initially inspired by an online article that provided a guide to building a Tiny BASIC-to-C compiler using Python, I decided to adapt the idea to fit my needs. At the time, I was learning Java and wanted to apply it to a practical project, avoiding the need to set up a C compiler. By targeting JavaScript, I avoided complexities associated with statically typed languages while sidestepping Python's strict indentation rules."
            ],
            additional: [
                "The application is not live as there is no straightforward way to deploy a compiler, but the source code is fully available for use and adaptation.",
                "The decision to target JavaScript as the output language was influenced by its flexibility as a dynamically typed language, making the compilation process simpler while still producing functional output. This project allowed me to enhance my skills in Java and compiler design, building a deeper understanding of tokenization, syntax validation, and code emission."
            ]
        }
    },
];
