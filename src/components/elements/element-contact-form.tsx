"use client";
import React,{useState} from "react";
import Image from "next/image";

interface contactList {
    icon: string;
    text: string;
}

interface LinkList {
    icon: string;
    url: string;
}

interface infor {
    title: string;
    subTitle?: string;
    text?: string;
    backgroundImage: string; 
    altText: string; 
    labelSubmitButton: string
}

interface ContactFormProps {
    contact?: contactList[];
    links?: LinkList[];
    infor?: infor;
} 

export const ContactS1: React.FC<{contactContent: ContactFormProps}> = ({contactContent}) => {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      };
    return (
        <div className="nk-block block-contact animated" data-animate="fadeInUp" data-delay=".9" style={{ visibility: "visible", animationDelay: "0.9s" }} >
          <div className="row justify-content-center g-0">
            {/* Left column */}
            <div className="col-lg-6">
              <div className="contact-wrap split split-left split-lg-left bg-white">
                <h5 className="title title-md" style={{color: "#1940b0"}}>{contactContent.infor?.title}</h5>
                <form className="nk-form-submit" onSubmit={handleSubmit}>
                    <div className="field-item animated" data-animate="fadeInUp" data-delay="0.8" style={{ visibility: "visible", animationDelay: "0.8s" }}>
                        <input 
                            name="contact-name"
                            type="text"
                            className="input-line required"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            title="Your Name"
                            placeholder="Your Name"
                            style={{color:"CaptionText"}}
                            />
                        {/* <label className="field-label field-label-line" style={{color:"GrayText"}}>Your Name</label> */}
                    </div>
                    <div className="field-item animated" data-animate="fadeInUp" data-delay="0.8" style={{ visibility: "visible", animationDelay: "0.8s" }}>
                        <input 
                            name="contact-email"
                            type="email"
                            className="input-line required email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            title="Your Email"
                            placeholder="Your Email"
                            style={{color:"CaptionText"}}
                            />
                        {/* <label className="field-label field-label-line" style={{color:"GrayText"}}>Your Email</label> */}
                    </div>
                    <div className="field-item animated" data-animate="fadeInUp" data-delay="0.8" style={{ visibility: "visible", animationDelay: "0.8s" }}>
                        <textarea 
                            name="contact-message"
                            className="input-line input-textarea required"
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                            title="Your Message"
                            placeholder="Your Message"
                            style={{color:"CaptionText"}}
                            ></textarea>
                        {/* <label className="field-label field-label-line" style={{color:"GrayText"}}>Your Message</label> */}
                    </div>
                    <input type="text" className="d-none" name="form-anti-honeypot" value="" title="none"/>
                    <div className="row">
                        <div className="col-sm-4">
                            <button type="submit" className="btn btn-grad">{contactContent.infor?.labelSubmitButton}</button>
                        </div>
                        <div className="col-sm-8">
                            <div className="form-results"></div>
                        </div>
                    </div>
                </form>
              </div>
            </div>
    
            {/* Right column */}
            <div className="col-lg-4">
              <div className="contact-wrap split split-right split-lg-right bg-genitian bg-theme tc-light">
                <div className="d-flex flex-column justify-content-between h-100">
                  {/* Contact information list */}
                  <ul className="contact-list">
                    {contactContent.contact?.map((info, index) => (
                      <li key={index}>
                        <em className={`contact-icon ${info.icon}`}></em>
                        <div className="contact-text">
                          <h6>{info.icon}</h6>
                          <span>{info.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
    
                  {/* Social media links */}
                  <div className="contact-social">
                    <h6>Be a part of our community</h6>
                    <ul className="social-links">
                      {contactContent.links?.map((link, index) => (
                        <li key={index}>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <em className={link.icon}></em>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export const ContactS2: React.FC<{contactContent: ContactFormProps}> = ({contactContent}) => {
    return (
        <>
            
        </>
    ); 
};

export const ContactS3: React.FC<{contactContent: ContactFormProps}> = ({contactContent}) => {
    return (
        <>
            
        </>
    ); 
};

export const ContactS4: React.FC<{contactContent: ContactFormProps}> = ({contactContent}) => {
    return (
        <>
            
        </>
    ); 
};

export const ContactS5: React.FC<{contactContent: ContactFormProps}> = ({contactContent}) => {
    return (
        <>
            
        </>
    ); 
};

export const ContactS6: React.FC<{contactContent: ContactFormProps}> = ({contactContent}) => {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      };
    return (
        <div className="nk-block nk-block-about">
            <div className="row justify-content-between align-items-center gutter-vr-50px">
                <div className="col-lg-6">
                <div className="nk-block-text">
                    <div className="nk-block-text-head">
                    <h2 className="title title-lg ttu animated" data-animate="fadeInUp" data-delay="0.7" style={{ visibility: "visible", animationDelay: "0.7s" }}>{contactContent.infor?.title}</h2>
                    <p className="animated" data-animate="fadeInUp" data-delay="0.8" style={{ visibility: "visible", animationDelay: "0.8s" }}>
                        {contactContent.infor?.text}
                    </p>
                    </div>
                    <form className="nk-form-submit" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-sm-6">
                            <div className="field-item animated" data-animate="fadeInUp" data-delay="0.8" style={{ visibility: "visible", animationDelay: "0.8s" }}>
                                <label className="field-label ttu">Your Name</label>
                                <div className="field-wrap">
                                <input
                                    name="contact-name"
                                    placeholder="Introduce yourself"
                                    type="text"
                                    className="input-bordered required"
                                    value={contactName}
                                    onChange={(e) => setContactName(e.target.value)}
                                />
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6">
                            <div className="field-item animated" data-animate="fadeInUp" data-delay="0.9" style={{ visibility: "visible", animationDelay: "0.9s" }}>
                                <label className="field-label ttu">Your Email</label>
                                <div className="field-wrap">
                                <input
                                    name="contact-email"
                                    placeholder="Who do we reply to"
                                    type="email"
                                    className="input-bordered required email"
                                    value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="field-item animated" data-animate="fadeInUp" data-delay="1.0" style={{ visibility: "visible", animationDelay: "1.0s" }}>
                            <label className="field-label ttu">Your Message</label>
                            <div className="field-wrap">
                            <textarea
                                name="contact-message"
                                placeholder="Leave your question or comment here"
                                className="input-bordered input-textarea required"
                                value={contactMessage}
                                onChange={(e) => setContactMessage(e.target.value)}
                            ></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5 text-end animated" data-animate="fadeInUp" data-delay="1.1" style={{ visibility: "visible", animationDelay: "1.1s" }}>
                                <button type="submit" className="btn btn-round btn-primary">{contactContent.infor?.labelSubmitButton}</button>
                            </div>
                            <div className="col-sm-7 order-sm-first">
                                <div className="form-results"></div>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
                <div className="col-lg-5 text-center order-lg-first">
                    <div className="nk-block-contact nk-block-contact-s1 animated" data-animate="fadeInUp" data-delay="0.1" style={{ visibility: "visible", animationDelay: "0.1s" }}>
                        <ul className="contact-list">
                            {contactContent.contact?.map((main,index)=>(
                            <li className="animated" data-animate="fadeInUp" data-delay="0.2" style={{ visibility: "visible", animationDelay: "0.2s" }} key={index}>
                                <em className={`contact-icon ${main.icon}`}></em>
                                <div className="contact-text">
                                    <span>{main.text}</span>
                                </div>
                            </li>
                            ))}
                        </ul>
                        <div className="nk-circle-animation nk-df-center white small"></div>{/* <!-- .circle-animation --> */}
                        <Image
                            src={contactContent.infor?.backgroundImage ?? ''} 
                            alt={contactContent.infor?.altText ?? ''}
                            fill={true} style={{zIndex:0}}
                        />
                    </div>
                    <ul className="social-links social-links-s2 justify-content-center animated" data-animate="fadeInUp" data-delay="0.6" style={{ visibility: "visible", animationDelay: "0.6s" }}>
                        {contactContent.links?.map((media,index)=>(
                            <li key={index}><a href={media.url}><em className={media.icon}></em></a></li>
                        ))}     
                    </ul>
                </div>
            </div>
        </div>  
    ) 
};

