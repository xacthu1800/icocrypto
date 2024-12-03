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

interface FeatureS21 {
  title: string,
  mainTitle: string,
  tabsPlatform: {
    id: string;
    title: string;
    description: string;
    features: {
      icon: string;
      text: string;
    }[];
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  }[]
}

interface FeatureS22{
  title: string,
  mainTitle: string,
  items: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string; 
  }[]
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

export const FeatureS21: React.FC<{FeatureContent: FeatureS21}> = ({FeatureContent}) => {
  return (
    <div className="container container-xxl">
      <div className="nk-block">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <ul className="nav tab-nav tab-nav-btn-bdr-s2 justify-content-center justify-content-sm-between pb-4 pb-sm-5">
              <li><a className="active" data-bs-toggle="tab" href="#tab-1-1">FOR Participators</a></li>
              <li className="tab-nav-sap d-none d-sm-block"></li>
              <li><a data-bs-toggle="tab" href="#tab-1-2">For Traders</a></li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          {FeatureContent.tabsPlatform.map((tab, index) => (
            <div className={`tab-pane fade${index === 0 ? ' show active' : ''}`} id={tab.id} key={tab.id}>
              <div className="row align-items-center justify-content-between gutter-vr-40px">
                <div className="col-lg-6 order-lg-last">
                  <div className="nk-block-img nk-block-ca">
                    <div className="nk-circle-animation nk-df-center fast"></div>
                    <div
                      className="shadow rounded"
                      style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}
                    >
                      <Image
                        src={tab.image.src}
                        alt={tab.image.alt}
                        width={tab.image.width}
                        height={tab.image.height}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="nk-block-text mgb-m30">
                    <h2 className="title title-md">{tab.title}</h2>
                    <p>{tab.description}</p>
                    {tab.features.map((feature, i) => (
                      <div className="feature feature-inline feature-middle" key={i}>
                        <div className="feature-icon feature-icon-md">
                          <em className={`icon icon-md icon-grd ikon ${feature.icon}`}></em>
                        </div>
                        <div className="feature-text">
                          <p>{feature.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const FeatureS22: React.FC<{FeatureContent: FeatureS22}> = ({FeatureContent}) => {
  return (
    <section className="container">
      {/* MVP */}
      <div className="container container-xxl">
        <div className="nk-block">
          <div className="row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px">
            <div className="col-xxl-6 col-xl-6 col-lg-8">
              <div
                className="nk-block-img nk-block-plx animated"
                data-animate="fadeInUp"
                data-delay="0.3"
                style={{ visibility: "visible", animationDelay: "0.3s" }}
              >
                {FeatureContent.items.map((image, index) => (
                  <Image
                    key={index}
                    className={image.className}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                  />
                ))}
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-8">
              <div className="nk-block-text">
                {[
                  "Powered by DAP, NEX lets you easily trade crypto-currencies & other digital.",
                  "User have full access to trading consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "Our multi-cryptocurrency exchange will uis aute irure dolor in reprehenderit in voluptate velit uuntur magni dolores esse cillum.",
                  "Traders able to trade with voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
                  "Users will be able to take quis nostrum exercitationem ullam corporis susci pitlabo riosam, nisi ut aliquid ex ea commodi consequatur."
                ].map((text, i) => (
                  <div
                    className="feature feature-inline animated"
                    data-animate="fadeInUp"
                    data-delay={`${0.4 + i * 0.1}`}
                    style={{ visibility: "visible", animationDelay: "0.3s" }}
                    key={i}
                  >
                    <div className="feature-icon feature-icon-md">
                      <em className="icon icon-xs icon-circle fas fa-check"></em>
                    </div>
                    <div className="feature-text">
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
                <div
                  className="text-center text-sm-start animated"
                  data-animate="fadeInUp"
                  data-delay="0.9"
                  style={{ visibility: "visible", animationDelay: "0.3s" }}
                >
                  <a href="#" className="btn btn-round btn-primary">
                    Try Demo Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

const FeatureS20_data = {
    title: "WHAT AND WHY",
    mainTitle: "ABOUT",
    contentTitle: "We build fully Decentralized Marketplace that Augments Access to Blockchain Technologies",
    content: "We have developed a state-of-the-art marketplace where you can securely and reliably buy and sell any items. The fastest and most flexible asset platform in existence. It will include easy cryptocurrency payments integration and a digital arbitration system. Our aim is to integrate all companies, employees, and business assets into a unified blockchain ecosystem, making business truly efficient, transparent, and reliable.",
    buttonLabel: "White Paper",
    buttonIcon: "ti-arrow-down",
    linkLabel: "See the Ecosystems",
    link: "#ecosystems",
    imageUrl: "https://ico.themenio.com/images/azalea/gfx-e.png",
    imageAlt: "image of gfx-e"
};

const FeatureS21_data = {
    title: "ICOX PRODUCTS",
    mainTitle: "PLATFORM",
    tabsPlatform: [
        {
            id: "tab-1-1",
            title: "A Open Platform for our Participators",
            description: "Each participator can choose the trader and to sign a contract.",
            features: [
                {
                    icon: "ikon-bulb",
                    text: "User have full access to trading consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    icon: "ikon-paricle",
                    text: "Our multi-cryptocurrency exchange will uis aute irure dolor in reprehenderit in voluptate velit uuntur magni dolores esse cillum."
                },
                {
                    icon: "ikon-bulb-2",
                    text: "Users will be able to take quis nostrum exercitationem ullam corporis susci pitlabo riosam, nisi ut aliquid ex ea commodie."
                },
                {
                    icon: "ikon-document-2",
                    text: "Sign a smart-contract to allow our trader’s access for live trading corporis cryptocurrency susci pitlabo riosam, nisi ut."
                }
            ],
            image: {
                src: "https://ico.themenio.com/images/app-screens/sc-medium-a.png",
                alt: "A Open Platform for Participators",
                width: 450,
                height: 450
            }
        },
        {
            id: "tab-1-2",
            title: "For Traders",
            description: "Some description here for traders...",
            features: [],
            image: {
                src: "https://ico.themenio.com/images/app-screens/sc-medium-b.png",
                alt: "For Traders",
                width: 450,
                height: 450
            }
        }
    ]
};

const FeatureS22_Data = {
    title: "MVP APPS",
    mainTitle: "MVP",
    items: [
      {
        className: "shadow rounded img-fluid",
        src: "https://ico.themenio.com/images/app-screens/sc-medium-b.png",
        alt: "image sc-medium-b",
        width: 500,
        height: 300,
      },
      {
        className: "nk-block-img-plx plx-screen shadow rounded img-fluid",
        src: "https://ico.themenio.com/images/app-screens/sc-small-d.jpg",
        alt: "image sc-small-d",
        width: 500,
        height: 300,
      },
      {
        className: "nk-block-img-plx plx-circle plx-circle-s1 img-fluid",
        src: "https://ico.themenio.com/images/gfx/circle-a.png",
        alt: "image circle-a",
        width: 100,
        height: 100,
      },
      {
        className: "nk-block-img-plx plx-polygon plx-polygon-s1 img-fluid",
        src: "https://ico.themenio.com/images/gfx/polygon-a.png",
        alt: "image polygon-a",
        width: 100,
        height: 100,
      },
      {
        className: "nk-block-img-plx plx-triangle plx-triangle-s1 img-fluid",
        src: "https://ico.themenio.com/images/gfx/triangle-a.png",
        alt: "triangle-a",
        width: 100,
        height: 100,
      },
    ],
};


*/