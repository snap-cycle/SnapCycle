import {FaGithub, FaGlobe, FaLinkedin} from "react-icons/fa";

export const TeamInfo = {
    teamMembers:
        {
        "Aidan Froggatt":
            {
                name: "Aidan Froggatt",
                role: "Software Engineer",
                bio: "This is Aidan Froggatt's bio...",
                links: {
                    linkedin: {
                        link: "https://www.linkedin.com/in/aidanfroggatt/",
                        icon: <FaLinkedin/>
                    },
                    github: {
                        link: "https://github.com/aidanfroggatt",
                        icon: <FaGithub/>
                    },
                    portfolio: {
                        link: "https://aidanfroggatt.github.io/portfolio/",
                        icon: <FaGlobe/>
                    }
                },
                personaInfo: {
                    email: "aidanfr@live.ca",
                    location: "Burlington, ON",
                    phone: "",
                    education: "Bachelor of Software Engineering, McMaster University"
                },
                imageSrc: "",
                    imageAlt: "Aidan's Profile Picture"
            },
        "Luai Bashar":
            {
                name: "Luai Bashar",
                role: "Mechatronics Engineer",
                bio: "This is Luai Bashar's bio...",
                links: {
                    linkedin: {
                        link: "https://www.linkedin.com/in/luaibashar/",
                        icon: <FaLinkedin/>
                    },
                    github: {
                        link: "https://github.com/luaibash",
                        icon: <FaGithub/>
                    },
                    portfolio: {
                        link: "",
                        icon: <FaGlobe/>
                    },
                },
                personaInfo: {
                    email: "",
                    location: "",
                    phone: "",
                    education: ""
                },
                imageSrc: "",
                    imageAlt: "Luai's Profile Picture"
            }
        }
}
