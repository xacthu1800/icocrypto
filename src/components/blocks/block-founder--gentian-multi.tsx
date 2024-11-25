import React from "react";
import Image from "next/image";

interface FounderProps {
    founderData: {
        imageSrc: string,
        imageAlt: string,
        name: string,
        role: string,
        subtitle: string,
        title: string,
        description: string,    
    }
}

const Founder = ({
    founderData
}: FounderProps) => {
  return (
    <>
      <div className="nk-block nk-block-team-featured team-featured">
        <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="team-featured-photo tc-light animated" data-animate="fadeInUp" data-delay=".1" style={{ visibility: "visible", animationDelay: "0.1s" }} >
                    <Image 
                        src={founderData.imageSrc}
                        alt={founderData.imageAlt}
                        fill={true}
                    />
                    <h5 className="team-featured-info">{founderData.name}<span>{founderData.role}</span></h5>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="team-featured-cont">
                    <h6 className="title title-xs title-light animated" data-animate="fadeInUp" data-delay=".2" style={{ visibility: "visible", animationDelay: "0.2s" }}>{founderData.subtitle}</h6>
                    <h2 className="title title-lg title-dark animated" data-animate="fadeInUp" data-delay=".3" style={{ visibility: "visible", animationDelay: "0.3s" }}>{founderData.title}</h2>
                    <p className="animated" data-animate="fadeInUp" data-delay=".4" style={{ visibility: "visible", animationDelay: "0.4s" }}>{founderData.description}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

/* props
const founderData = {
    imageSrc: 'https://ico.themenio.com/images/team/large-a.jpg',
    imageAlt: 'team',
    name: 'David Metthew',
    role: 'Chairman of ICOX and Entrepreneur',
    subtitle: 'behind the idea',
    title: 'The Founder',
    description: 'ICOx Crypto is founded by David Metthew who is young entrepreneur & full stack-developer. He is totam rem aperiam, et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Quam nihil molestiae illum.',
}
 */

export default Founder;
