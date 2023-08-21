import GithubLogo from "../assets/SocialMediaIcons/GitHub.svg";
import FacebookLogo from "../assets/SocialMediaIcons/Facebook.svg";
import TwitterLogo from "../assets/SocialMediaIcons/Twitter.svg";
import YouTubeLogo from "../assets/SocialMediaIcons/YouTube.svg";
import LinkedInLogo from "../assets/SocialMediaIcons/LinkedIn.svg";

export const FooterInfo = {
    slogan: "Saving the turtles one snap at a time.",
    credits: "Developed by Luai Bashar and Aidan Froggatt",
    socialMedia: [
        {name: "Github", destination: "https://github.com/snap-cycle/SnapCycle", imageSrc: GithubLogo, imageAlt: "Github Logo"},
        {name: "Facebook", destination: "", imageSrc: FacebookLogo, imageAlt: "Facebook Logo"},
        {name: "Twitter", destination: "", imageSrc: TwitterLogo, imageAlt: "Twitter Logo"},
        {name: "YouTube", destination: "", imageSrc: YouTubeLogo, imageAlt: "YouTube Logo"},
        {name: "LinkedIn", destination: "", imageSrc: LinkedInLogo, imageAlt: "LinkedIn Logo"},
    ],
    product: [
        {name: "Try Now", destination: ""},
        {name: "Features", destination: ""},
        {name: "Resources", destination: ""},
        {name: "Security", destination: ""}
    ],
    help: [
        {name: "FAQ", destination: "/help-center"},
        {name: "Contact Us", destination: "/help-center"},
    ],
}
