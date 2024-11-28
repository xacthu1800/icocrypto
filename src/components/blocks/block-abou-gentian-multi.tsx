import React from 'react';
import Image from 'next/image';

interface Feature {
  icon: string;
  title: string;
  description: string;
  delay: string;
}

interface BlockABOUTV2Props {
  aboutTitle: string;
  aboutText: string[];
  videoSrc: string;
  features: Feature[];
}

const BlockABOUTV2: React.FC<BlockABOUTV2Props> = ({
  aboutTitle,
  aboutText,
  videoSrc,
  features,
}) => {
  return (
      <div className="container section bg-light">
        {/* Block */}
        <div className="nk-block nk-block-about">
          <div className="row align-items-center gutter-vr-30px pdb-x">
            <div className="col-lg-6">
              <div className="nk-block-text">
                <h2 className="title animated" data-animate="fadeInUp" data-delay=".1" style={{ visibility: "visible", color: "#007bff" }}>
                  {aboutTitle}
                </h2>
                {aboutText.map((text, index) => (
                  <p key={index} className="animated text-secondary" data-animate="fadeInUp" data-delay={`.${index + 2}`} style={{ visibility: "visible" }}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nk-block-video animated" data-animate="fadeInUp" data-delay=".5" style={{ visibility: "visible" }}>
                <Image src={videoSrc} alt="video" width={600} height={300} />
                <a
                  href="https://www.youtube.com/watch?v=SSo_EIwHSd4"
                  className="nk-block-video-play video-popup btn-play btn-play-light"
                >
                  <em className="fas fa-play"></em>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section Head */}
        <div className="section-head">
          <h2 className="title title-lg animated" data-animate="fadeInUp" data-delay=".6" style={{ visibility: "visible", color: "#007bff" }}>
            Key features of ICO Crypto
          </h2>
        </div>

        {/* Block */}
        <div className="nk-block nk-block-features mgb-m30">
          <div className="row">
            {features.map((feature, index) => (
              <div className="col-lg-4" key={index}>
                <div className="feature animated" data-animate="fadeInUp" data-delay={`.${index + 7}`} style={{ visibility: "visible" }}>
                  <div className="feature-icon dot">
                    <em className={`icon ikon ${feature.icon}`} style={{ color: "#007bff" }} />
                  </div>
                  <div className="feature-text">
                    <h5 className="title title-sm" style={{ color: "#007bff" }} >{feature.title}</h5>
                    <p className="text-secondary">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default BlockABOUTV2;
/*
const aboutText = [
        "ICO Crypto is #1 best selling ICO Landing page, which helps you lunch and introduce your ICO Website. We designed it very carefully to make it more attractive, useful and fit any kind of ICO/Crypto website.",
        "ICO Crypto sectetur adipiscing elit, sed do eiusmod tempor incididunt uteop labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercit ullamco laboris nisi commodo consequat.",
        "We create cryptocurrency dipiscing elit, sed do eiusmod tempor incididunt uteop labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercit ullamco laboris nisi commodo consequat."
      ];
    
      const features = [
        {
          icon: 'ikon-paricle-alt',
          title: 'Create a secure decentralize',
          description: 'Tempore, cum soluta nobis est eligendi optiocum que nihil maxime placeat facere possimus.',
          delay: '0.7'
        },
        {
          icon: 'ikon-donught',
          title: 'Solving small business problems',
          description: 'Placeat facere possimus, omnis voluptas assum enda est, omnis dolor repellendus.',
          delay: '0.8'
        },
        {
          icon: 'ikon-document',
          title: 'Personal data must be isolated',
          description: 'Nam libero tempore, cum soluta nobis est optio cumque nihil impedit quo minus id quod.',
          delay: '0.9'
        }
      ];
*/