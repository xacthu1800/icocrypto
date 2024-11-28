import React from 'react';

interface ContactFormField {
  name: string;
  type: string;
  label: string;
}

interface ContactInfo {
  icon: string;
  title: string;
  text: string;
}

interface SocialLink {
  url: string;
  iconClass: string;
}

interface BlockContactGentianMultiProps {
  formTitle: string;
  formFields: ContactFormField[];
  formButtonLabel: string;
  contactInfo: ContactInfo[];
  socialLinks: SocialLink[];
}

const BlockContactGentianMulti: React.FC<BlockContactGentianMultiProps> = ({
  formTitle,
  formFields,
  formButtonLabel,
  contactInfo,
  socialLinks
}) => {
  return (
    <div className="nk-block block-contact animated" data-animate="fadeInUp" data-delay=".9" style={{ visibility: "visible" }} >
      <div className="row justify-content-center g-0">
        {/* Left column */}
        <div className="col-lg-6">
          <div className="contact-wrap split split-left split-lg-left bg-white">
            <h5 className="title title-md" style={{ color: "#007bff" }}>{formTitle}</h5>
            <form className="nk-form-submit" action="form/contact.php" method="post">
              {formFields.map((field, index) => (
                <div className="field-item" key={index}>
                  {field.type === 'textarea' ? (
                    <textarea name={field.name} className="input-line input-textarea "></textarea>
                  ) : (
                    <input name={field.name} type={field.type} className="input-line"/>
                  )}
                  <label className="field-label field-label-line text-secondary" >{field.label}</label>
                </div>
              ))}
              <div className="row">
                <div className="col-sm-4">
                  <button type="submit" className="btn btn-grad">
                    {formButtonLabel}
                  </button>
                </div>
                    <div className ="col-sm-8">
                        <div className ="form-results"></div>
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
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <em className={`contact-icon ${info.icon}`}></em>
                    <div className="contact-text">
                      <h6>{info.title}</h6>
                      <span>{info.text}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Social media links */}
              <div className="contact-social">
                <h6>Be a part of our community</h6>
                <ul className="social-links">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <em className={link.iconClass}></em>
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

export default BlockContactGentianMulti;
/*
const contactInfo = [
  { icon: 'fas fa-building', title: 'ICO Crypto', text: '728 Dooley Branch Beckershire, LA 63598' },
  { icon: 'fas fa-phone', title: '', text: '+44 0123 4567' },
  { icon: 'fas fa-envelope', title: '', text: 'info@company.com' },
  { icon: 'fas fa-paper-plane', title: '', text: 'Join us on Telegram' }
];

const socialLinks = [
  { url: '#', iconClass: 'fab fa-twitter' },
  { url: '#', iconClass: 'fab fa-medium-m' },
  { url: '#', iconClass: 'fab fa-facebook-f' },
  { url: '#', iconClass: 'fab fa-youtube' },
  { url: '#', iconClass: 'fab fa-bitcoin' },
  { url: '#', iconClass: 'fab fa-github' }
];

const form = {
  formTitle: 'Contact Us',
  formFields: [
    { name: 'contact-name', type: 'text', label: 'Your Name' },
    { name: 'contact-email', type: 'email', label: 'Your Email' },
    { name: 'contact-message', type: 'textarea', label: 'Your Message' }
  ],
  formButtonLabel: 'Submit'
};
*/