import React from "react";
import Image from "next/image";

interface FooterLink{
    text: string,
    href: string,
}

interface FooterColumn{
    title: string,
    links: FooterLink[],
    delay: string
}

interface FooterProps {
    footerData: {
        columns: FooterColumn[],
        logoSrc: string,
        logoAlt: string,
        copyrightText: string,
        templateCredit: string,
        templateCreditLink: string,
        handcrafted: string    
    }
}

const Founder: React.FC<FooterProps> = ({
    footerData
}) => {
  return (
    <>
        <div className="nk-block block-footer mgb-m30">
            <div className="row">
                <div className="col-lg-2 col-sm-4">
                    <div className="wgs wgs-menu animated" data-animate="fadeInUp" data-delay=".2" style={{ visibility: "visible", animationDelay: "0.2s" }}>
                        <h6 className="wgs-title">Company</h6>
                        <div className="wgs-body">
                            <ul className="wgs-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Meet Our Team</a></li>
                                <li><a href="#">Advisors</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Insights</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-4">
                    <div className="wgs wgs-menu animated" data-animate="fadeInUp" data-delay=".3" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                        <h6 className="wgs-title">Legal</h6>
                        <div className="wgs-body">
                            <ul className="wgs-links">
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Sales</a></li>
                                <li><a href="#">Whitepaper</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-4">
                    <div className="wgs wgs-menu animated" data-animate="fadeInUp" data-delay=".4" style={{ visibility: "visible", animationDelay: "0.4s" }}>
                        <h6 className="wgs-title">Quick Links</h6>
                        <div className="wgs-body">
                            <ul className="wgs-links">
                                <li><a href="#">Ecosystems</a></li>
                                <li><a href="#">Tokens</a></li>
                                <li><a href="#">Roadmaps</a></li>
                                <li><a href="#">Faqs</a></li>
                                <li><a href="#">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {footerData.columns.map((column, index)=>(
                    <div className="col-lg-2 col-sm-4" key={index}>
                        <div className="wgs wgs-menu animated" data-animate="fadeInUp" data-delay={column.delay} style={{ visibility: "visible", animationDelay: `${column.delay}s` }}>
                                <h6 className="wgs-title">{column.title}</h6>
                                <div className="wgs-body">
                                    <ul className="wgs-links">
                                        {column.links.map((link,index) =>(
                                            <li key={index}><a href={link.href}>{link.text}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                    </div>
                ))}

                <div className="col-lg-6 order-lg-first">
                    <div className="wgs wgs-text animated" data-animate="fadeInUp" data-delay=".1" style={{ visibility: "visible", animationDelay: "0.1s" }}>
                        <div className="wgs-body">
                            <a href="./" className="wgs-logo">
                                <Image 
                                    src={footerData.logoSrc}
                                    alt={footerData.logoAlt}
                                    width={181}
                                    height={40}
                                    //sizes="(max-width: 768px) 100px, 200px"
                                 />
                            </a>
                            <p>{footerData.copyrightText} </p>
                            <p className="copyright-text">Template by <a href={footerData.templateCreditLink}>{footerData.templateCredit}</a>. {footerData.handcrafted}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Founder;

/* prompt
const footerData = {
    columns: [
      {
        title: 'Legal',
        links: [
          { text: 'Terms & Conditions', href: '#' },
          { text: 'Privacy Policy', href: '#' },
          { text: 'Terms of Sales', href: '#' },
          { text: 'Whitepaper', href: '#' },
        ],
        delay: '0.2',
      },
      {
        title: 'Company',
        links: [
          { text: 'About Us', href: '#' },
          { text: 'Meet Our Team', href: '#' },
          { text: 'Advisors', href: '#' },
          { text: 'Contact Us', href: '#' },
          { text: 'Insights', href: '#' },
        ],
        delay: '0.3',
      },
      {
        title: 'Quick Links',
        links: [
          { text: 'Ecosystems', href: '#' },
          { text: 'Tokens', href: '#' },
          { text: 'Roadmaps', href: '#' },
          { text: 'Faqs', href: '#' },
          { text: 'Login', href: '#' },
        ],
        delay: '0.4',
      },
    ],
    logoSrc: 'https://ico.themenio.com/images/logo-full-white.png',
    logoAlt: 'logo',
    copyrightText: 'Copyright &copy; 2022 ICO Crypto. ABN: 2018AD947. All rights reserved.',
    templateCredit: 'Softnio',
    templateCreditLink: 'https://softnio.com/',
    handcrafted: 'Handcrafted by iO.'
  };
*/


