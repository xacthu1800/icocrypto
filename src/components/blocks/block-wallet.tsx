import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
  delay: string;
}

interface WalletProps {
  features: FeatureItem[];
  titleWallet: string;
}

const Wallet: React.FC<WalletProps> = ({ features, titleWallet }) => {
  return (
    <div className="nk-block nk-block-text-grp mgb-m30">
      <h6 className="title title-xs tc-primary pdb-s animated" data-animate="fadeInUp" data-delay=".4"  style={{ visibility: "visible" }}>
        {titleWallet}
      </h6>
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-lg-4">
            <div
              className="feature feature-s5 animated"
              data-animate="fadeInUp"
              data-delay={feature.delay}
              style={{ visibility: "visible" }}
            >
              <h4 className="title title-md">{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
/*
const titleWallet = 'Why Use Tokenpay Wallets?';

const featuresData = [
  {
    title: 'Safe & Secure',
    description:
      'Tempore, cum soluta nobis est eligendi optio cumque nihil id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor impedit quo minus repellendus.',
    delay: '.5',
  },
  {
    title: 'Universal and Interactive',
    description:
      'Placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
    delay: '.6',
  },
  {
    title: 'Send and Receive',
    description:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor.',
    delay: '.7',
  },
];
*/