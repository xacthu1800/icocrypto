import React from "react";
import Image from "next/image";

interface OurPartner {
    id: number,
    imageSrc: string;
    imageAlt: string;
}

interface PartnerProps {
    partnersData: OurPartner[]
}

const Founder: React.FC<PartnerProps> = ({partnersData}) => {
  return (
    <>
        <div className="container">
            <div className="nk-block block-partners">
                <h6 className="title title-xs tc-primary text-center animated" data-animate="fadeInUp" data-delay=".1">Our Partners</h6>
                <ul className="partner-list flex-lg-nowrap">

                    {partnersData.map(partner=>(
                        <li key={partner.id} className="partner-logo animated" data-animate="fadeInUp" data-delay=".2" style={{ visibility: "visible", animationDelay: "0.2s" }}>
                        <Image 
                            src={partner.imageSrc}
                            alt={partner.imageAlt}
                            width={133} height={60}
                         />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  );
};

/* prompt
const partnersData = [
    { id: 0, imageSrc: "https://ico.themenio.com/images/partners/a.png", imageAlt: "Logo of Partner A" },
    { id: 1, imageSrc: "https://ico.themenio.com/images/partners/b.png", imageAlt: "Logo of Partner B" },
    { id: 2, imageSrc: "https://ico.themenio.com/images/partners/c.png", imageAlt: "Logo of Partner C" },
    { id: 3, imageSrc: "https://ico.themenio.com/images/partners/d.png", imageAlt: "Logo of Partner D" },
    { id: 4, imageSrc: "https://ico.themenio.com/images/partners/e.png", imageAlt: "Logo of Partner E" },
    { id: 5, imageSrc: "https://ico.themenio.com/images/partners/f.png", imageAlt: "Logo of Partner F" },
    { id: 6, imageSrc: "https://ico.themenio.com/images/partners/g.png", imageAlt: "Logo of Partner G" },
];
 */

export default Founder;
