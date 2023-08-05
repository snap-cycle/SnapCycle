import React from "react";
import GithubLogo from "../assets/SocialMediaIcons/GitHub.svg";
import FacebookLogo from "../assets/SocialMediaIcons/Facebook.svg";
import TwitterLogo from "../assets/SocialMediaIcons/Twitter.svg";
import YouTubeLogo from "../assets/SocialMediaIcons/YouTube.svg";
import LinkedInLogo from "../assets/SocialMediaIcons/LinkedIn.svg";

export const FooterInfo = {
    slogan: "Saving the turtles one snap at a time.",
    credits: "Developed by Luai Bashar and Aidan Froggatt",
    socialMedia: [
        {name: "Github", link: "https://github.com/luaibash/SnapCycle", imageSrc: GithubLogo, imageAlt: "Github Logo"},
        {name: "Facebook", link: "", imageSrc: FacebookLogo, imageAlt: "Facebook Logo"},
        {name: "Twitter", link: "", imageSrc: TwitterLogo, imageAlt: "Twitter Logo"},
        {name: "YouTube", link: "", imageSrc: YouTubeLogo, imageAlt: "YouTube Logo"},
        {name: "LinkedIn", link: "", imageSrc: LinkedInLogo, imageAlt: "LinkedIn Logo"},
    ],
    product: [
        {name: "Try Now", link: ""},
        {name: "Features", link: ""},
        {name: "Resources", link: ""},
        {name: "Security", link: ""}
    ],
    help: [
        {name: "FAQ", link: ""},
        {name: "Contact Us", link: ""},
    ]
}

