import React from "react";
import Image from "next/image";

interface adminDashboardProps {
    adminData: {
        imageSrc: string;
        imageAlt: string;
        title: string;
        subtitle: string;
        description: string;
        features: string[];    
    }
}


const AdminDashboard = ({
    adminData
}: adminDashboardProps) => {
  return (
    <>
        <div className="nk-block nk-block-text-wrap">
            <div className="row align-items-center">
                <div className="col-lg-7 order-lg-last">
                    <div className="nk-block-img edge-r1 pb-4 pb-lg-0 animated" data-animate="fadeInUp" data-delay=".1" style={{ visibility: "visible", animationDelay: "0.1s" }}>
                        <Image 
                            src={adminData.imageSrc}
                            alt={adminData.imageAlt}
                            fill={true}
                         />
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="nk-block-text">
                        <h6 className="title title-xs tc-primary animated" data-animate="fadeInUp" data-delay=".1" style={{ visibility: "visible", animationDelay: "0.1s" }}>{adminData.title}</h6>
                        <h2 className="title animated" data-animate="fadeInUp" data-delay=".2" style={{ visibility: "visible", animationDelay: "0.2s" }}>{adminData.subtitle}</h2>
                        <p className="animated" data-animate="fadeInUp" data-delay=".3" style={{ visibility: "visible", animationDelay: "0.3s" }}>{adminData.description}</p>
                        <ul className="list list-check animated" data-animate="fadeInUp" data-delay=".4" style={{ visibility: "visible", animationDelay: "0.4s" }}>
                            {adminData.features.map((feature, index) =>(
                                 <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default AdminDashboard;

/* props
    const adminDashboardData= {
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
