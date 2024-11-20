import { ColorStyle } from "@/utils/colorclass";
import Image from 'next/image';
import React from 'react';
import CustomButton from '../elements/element-button';

interface BannerProps {
bannerData: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    links: { text: string; href: string; iconClass: string }[];
};
}

const Banner: React.FC<BannerProps> = ({ bannerData }) => {
return (
    <div className="nk-banner">
    <div className="banner banner-fs banner-single banner-gap-b2">
        <div className="banner-wrap">
        <div className="container">
            <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 order-lg-last">
                <div className="banner-gfx banner-gfx-re-s1 animated" data-animate="fadeInUp" data-delay=".9" style={{ visibility: "visible", animationDelay: "0.1s" }}>
                <Image src={bannerData.imageSrc} alt={bannerData.imageAlt}  width={1000} height={638}/>
                </div>
            </div>
            <div className="col-lg-7 col-sm-10 text-center text-lg-start">
                <div className="banner-caption cpn tc-light">
                <div className="cpn-head">
                    <h1 className="title animated" data-animate="fadeInUp" data-delay="1" style={{ visibility: "visible", animationDelay: "0.1s" }}> 
                        {bannerData.title}
                    </h1>
                </div>
                <div className="cpn-text">
                    <p className="animated" data-animate="fadeInUp" data-delay="1.1 " style={{ visibility: "visible", animationDelay: "0.1s" }}>
                        {bannerData.description}
                    </p>
                </div>
                <div className="cpn-action">
                    <div className="cpn-btns animated" data-animate="fadeInUp" data-delay="1.2" style={{ visibility: "visible", animationDelay: "1.2s" }}>
                        <CustomButton
                            variant={ColorStyle.Gradient}
                        >
                            {bannerData.buttonText}
                        </CustomButton>
                    </div>
                    
                    <ul className="cpn-links animated" data-animate="fadeInUp" data-delay="1.3 " style={{ visibility: "visible", animationDelay: "0.1s" }}>
                        {bannerData.links.map((link,index) =>(
                            <li key={index}><a className="link" href={link.href}><em className={`link-icon ${link.iconClass}`}></em><span>{link.text}</span></a></li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

/* props
const bannerData = {
    imageSrc: 'https://ico.themenio.com/images/header/gfx-a.png',
    imageAlt: 'header',
    title: 'World’s First Ecosystem that Scaling Decentralized Applications',
    description: ' Our revolutionary blockchain service is designed to create your own blockchain ecosystem, secure digital assets and access to funding all over the world.',
    buttonText: ' Register & Buy Token Now',
    buttonLink: '#',
    links: [
        {
            text: 'How to Buy',
            href: '#',
            iconClass: 'far fa-lightbulb'
        },
        {
            text: 'White Paper',
            href: '#',
            iconClass: 'fas fa-file-alt'
        }
    ]
}
*/

export default Banner;
