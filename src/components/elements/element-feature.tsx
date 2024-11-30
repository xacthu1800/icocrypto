"use client";
import Image from "next/image";
import {
    Content,
    ContentNkBlock,
    ContentTitle,
    ContentTitleX1,
  } from "@/components/elements/element-content";
import CustomButton from "@/components/elements/element-button";
import { ColorStyle } from "@/utils/colorclass";
import { SizeStylable, StyledSize } from "@/utils/sizeclass";

interface FeatureS1 {
    title: string;
    textRow1: string;
    textRow2: string;
    textRow3: string;
    imageUrl: string;
    imageAlt: string;
    link: string;
}

interface FeatureS4 {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[]; 
}

interface FeatureS20 {
    contentTitle: string,
    content: string ,
    buttonLabel: string ,
    buttonIcon: string ,
    linkLabel: string ,
    link: string,
    imageUrl: string,
    imageAlt: string
}

export const FeatureS1: React.FC<{FeatureContent: FeatureS1}> = ({FeatureContent}) => {
    return (
          <div className="nk-block nk-block-about">
            <div className="row align-items-center gutter-vr-30px pdb-x">
              <div className="col-lg-6">
                <div className="nk-block-text">
                  <h2 className="title animated" data-animate="fadeInUp" data-delay=".1" style={{ visibility: "visible", animationDelay:".1s"}}>
                    {FeatureContent.title}
                  </h2>
                  <p className="animated" data-animate="fadeInUp" data-delay=".2" style={{ visibility: "visible", animationDelay: ".2s"}}>{FeatureContent.textRow1}</p>
                  <p className="animated" data-animate="fadeInUp" data-delay=".3" style={{ visibility: "visible", animationDelay: ".3s"}}>{FeatureContent.textRow2}</p>
                  <p className="animated" data-animate="fadeInUp" data-delay=".4" style={{ visibility: "visible", animationDelay: ".4s"}}>{FeatureContent.textRow3}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="nk-block-video animated" data-animate="fadeInUp" data-delay=".5" style={{ visibility: "visible", animationDelay: ".5s" }}>
                  <Image src={FeatureContent.imageUrl} alt={FeatureContent.imageAlt} width={600} height={300} />
                  <a
                    href={FeatureContent.link}
                    className="nk-block-video-play video-popup btn-play btn-play-light"
                  >
                    <em className="fas fa-play"></em>
                  </a>
                </div>
              </div>
            </div>
          </div>
    );
}

export const FeatureS4: React.FC<{FeatureContent: FeatureS4}> = ({FeatureContent}) => {
    return (
        <>
            <div className="nk-block nk-block-text-wrap">
                <div className="row align-items-center">
                    <div className="col-lg-7 order-lg-last">
                        <div className="nk-block-img edge-r1 pb-4 pb-lg-0 animated" data-animate="fadeInUp" data-delay=".1" style={{ visibility: "visible", animationDelay: "0.1s" }}>
                            <Image 
                                src={FeatureContent.imageSrc}
                                alt={FeatureContent.imageAlt}
                                width={794}
                                height={466}
                             />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="nk-block-text">
                            <h6 className="title title-xs tc-primary animated" data-animate="fadeInUp" data-delay=".1" style={{ visibility: "visible", animationDelay: "0.1s" }}>{FeatureContent.title}</h6>
                            <h2 className="title animated" data-animate="fadeInUp" data-delay=".2" style={{ visibility: "visible", animationDelay: "0.2s" }}>{FeatureContent.subtitle}</h2>
                            <p className="animated" data-animate="fadeInUp" data-delay=".3" style={{ visibility: "visible", animationDelay: "0.3s" }}>{FeatureContent.description}</p>
                            <ul className="list list-check animated" data-animate="fadeInUp" data-delay=".4" style={{ visibility: "visible", animationDelay: "0.4s" }}>
                                {FeatureContent.features.map((feature, index) =>(
                                     <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
      );
}

export const FeatureS20: React.FC<{FeatureContent: FeatureS20}> = ({FeatureContent}) => {
    return (
        <>
           <div className="container container-xxl">
        <div className="row justify-content-between align-items-center">
          <div
            className="col-lg-6 order-lg-last"
          >
            <div className="gfx py-4 animated" data-animate="fadeInUp" data-delay="0.2" style={{ visibility: "visible", animationDelay: "0.2s" }}>
              <Image
                src= {FeatureContent.imageUrl}
                alt={FeatureContent.imageAlt}
                width={500} height={500}
              />
            </div>
          </div>

          <div className="col-lg-5">
            <ContentTitle>
             {FeatureContent.contentTitle}
            </ContentTitle>
            <p>
              {FeatureContent.content}
            </p>
            <div className="d-flex p-2" style={{ gap: "20px" }}>
              <CustomButton
                variant={ColorStyle.Primary}
                borderRadius={SizeStylable.BorderRadius}
              >
                <span>{FeatureContent.buttonLabel}</span>
                <em className={`icon ti ${FeatureContent.buttonIcon}`}></em>
              </CustomButton>
              <p
                className="animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.7"
                style={{ visibility: "visible", animationDelay: "0.7s" }}
              >
                <a href={`${FeatureContent.link}`} className="menu-link btn btn-underline">
                  {FeatureContent.linkLabel}
                </a>
              </p>
            </div>
          </div>
        </div>
           </div>  
        </>
      );
}

/*  
const FeatureS1_Data = {
    title: 'About ICO Crypto',
    textRow1: 'ICO Crypto is #1 best selling ICO Landing page, which helps you lunch and introduce your ICO Website. We designed it very carefully to make it more attractive, useful and fit any kind of ICO/Crypto website.',
    textRow2: 'ICO Crypto sectetur adipiscing elit, sed do eiusmod tempor incididunt uteop labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercit ullamco laboris nisi commodo consequat.',
    textRow3: 'We create cryptocurrency dipiscing elit, sed do eiusmod tempor incididunt uteop labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercit ullamco laboris nisi commodo consequat.',
    imageUrl: 'https://ico.themenio.com/images/video/a.png',
    imageAlt: 'Video',
    link: 'https://www.youtube.com/watch?v=SSo_EIwHSd4',
}

const FeatureS4_Data= {
    imageSrc: "https://ico.themenio.com/images/app-screens/laptop-a.png",
    imageAlt: "app",
    title: "Ico Admin Dashboard",
    subtitle: "Introducing Complete Admin Dashboard",
    description: "We designed the ICO Admin panel to mange back-end of ICO Token Sales. It’s allows to mange every thing such as KYC, Users, Transaction etc",
    features: [
        "Fully manage KYC application process",
        "Online Payment Gateway with Offline Payment option.",
        "Manage ICO Stage &amp; each stage pricing and bonus option.",
        "Analytics reports, Token Sales Data and others.",
        "Newsletter with Emailing options.",
        "Mobile Friendly and Support all modern browser.",
    ],
}
*/