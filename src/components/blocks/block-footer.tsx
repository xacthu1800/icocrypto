import { ColorStyle, Stylable } from "@/utils/colorclass";
import Image from "next/image";

interface itemLink {
    title: string;
    link: string;
}

interface FooterColumn {
    title?: string; 
    items?: itemLink[]; 
}

interface socialLinkList{
    icon: string;
    link: string;
}

interface FooterContent{
    logoSrc: string;
    logoAlt: string;
    socialLinkList?: socialLinkList[];
    copyrightText: string;
    templateBy?: string;
    templateLink?: string;
    handcraftedBy?: string;
    handcraftedLink?: string;
    privacyPolicyLink?: string; 
    termsOfSalesLink?: string;
    columns?: FooterColumn[]
    buttonIcon?: String;
}

interface FooterProp{
    FooterContent: FooterContent;
    color?: ColorStyle;
    style?: Stylable;
    dark?: boolean;
    variant: "S1" | "S2" | "S3" | "S4" | "S5" | "S6" | "S7" | "S8" ;
}

export const Footer: React.FC<FooterProp> = ({
    FooterContent,
    color = "default", // Default color if not provided
    style = "",
    dark = false, // Default dark mode to false
    variant = "S1",
}) => {
    const darkClass = dark ? "dark" : "";
    const styleClass = style ? style : "";
    const colorClass = color ? color : "default";
    return (
        <section className={`${styleClass} ${colorClass} ${darkClass}`}>
            {variant === "S1" && (
                <footer className="nk-block block-footer mgb-m30">
                    <div className="row">
                        {FooterContent.columns?.map((column, index)=>(
                            <div className="col-lg-2 col-sm-4" key={index}>
                                <div className="wgs wgs-menu animated" data-animate="fadeInUp" data-delay='.3s' style={{ visibility: "visible", animationDelay: '0.3s' }}>
                                        <h6 className="wgs-title">{column.title}</h6>
                                        <div className="wgs-body">
                                            <ul className="wgs-links">
                                                {column.items?.map((item,index) =>(
                                                    <li key={index}><a href={item.link}>{item.title}</a></li>
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
                                            src={FooterContent.logoSrc}
                                            alt={FooterContent.logoAlt}
                                            width={181}
                                            height={40}
                                            //sizes="(max-width: 768px) 100px, 200px"
                                        />
                                    </a>
                                    <p>{FooterContent.copyrightText} </p>
                                    <p>ABN: 2018AD947. All rights reserved.</p>
                                    <p className="copyright-text">Template by <a href={FooterContent.templateLink}>{FooterContent.templateBy}</a>. Handcrafted by {FooterContent.handcraftedBy}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            )}

            {variant === "S8" && (
            <footer className="nk-footer-bar section section-s tc-light">
            <div className="container container-xxl">
                <div className="row gutter-vr-10px">
                <div className="col-lg-6 order-lg-last text-lg-end">
                    <ul className="footer-nav">
                    <li><a href={FooterContent.privacyPolicyLink}>Privacy Policy</a></li>
                    <li><a href={FooterContent.termsOfSalesLink}>Terms of sales</a></li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <div className="copyright-text copyright-text-s2">
                    {FooterContent.copyrightText} Handcrafted by <a href={FooterContent.handcraftedLink}>{FooterContent.handcraftedBy}</a>.
                    </div>
                </div>
                </div>
            </div>
            </footer>
            )}

            
        </section>
    );
};

/*
const footerData = {
  logoSrc: 'https://ico.themenio.com/images/logo-full-white.png',
  logoAlt: 'logo',
  socialLinkList: [],

  copyrightText: 'Copyright © 2022 ICO.',
  templateBy: 'Softnio',
  templateLink: 'https://softnio.com/',
  handcraftedBy: 'IO',
  handcraftedLink: '#',

  privacyPolicyLink: '#', 
  termsOfSalesLink: '#',

  columns:[
      { 
          title: 'COMPANY',
          items: [
              { title: 'About Us', link: '#'},
              { title: 'Meet Our Team', link: '#'},
              { title: 'Advisors', link: '#'},
              { title: 'Insights', link: '#'} 
         ]
      },
      {
          title: 'Legal',
          items: [
              { title: 'Terms & Conditions', link: '#'},
              { title: 'Privacy Policy', link: '#'},
              { title: 'Terms of Sales', link: '#'},
              { title: 'Whitepaper', link: '#'} 
         ]
      },
      {
          title: 'Quick Links',
          items: [
              { title: 'Ecosystems', link: '#'},
              { title: 'Roadmaps', link: '#'},
              { title: 'Faqs', link: '#'},
              { title: 'Login', link: '#'} 
         ]
      }

  ],
  buttonIcon: '',
}
*/
