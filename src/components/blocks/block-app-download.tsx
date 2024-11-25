import React from 'react';
import Image from 'next/image';

interface AppDownloadItem {
  title: string;
  description: string;
  buttonLink: string;
  imageUrl: string;
}

interface AppDownloadProps {
  appData: AppDownloadItem[];
}

export const AppDownload: React.FC<AppDownloadProps> = ({ appData }) => {
  return (
    <div className="nk-block nk-block-text-wrap">
      <div className="row align-items-center justify-content-center flex-row-reverse">
        {appData.map((app, index) => (
          <div key={index} className="col-lg-7 mb-4 mb-lg-0">
            <div className="nk-block-img bg-pattern-dots-color">
              <div
                className="app-slide-wrap animated"
                data-animate="fadeInUp"
                data-delay=".1"
                style={{ visibility: "visible" }}
              >
                <div className="app-slide">
                  <Image
                    src={app.imageUrl}
                    alt="App Screen"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-lg-5 col-md-10 text-center text-lg-start">
          {appData.map((app, index) => (
            <div key={index} className="nk-block-text">
              <h2 className="title animated" data-animate="fadeInUp" data-delay=".1"  style={{ visibility: "visible" }}>
                {app.title}
              </h2>
              <p className="animated" data-animate="fadeInUp" data-delay=".2"  style={{ visibility: "visible" }}>
                {app.description}
              </p>
              <div className="pdt-m animated" data-animate="fadeInUp" data-delay=".3" style={{ visibility: "visible" }}>
                <a href={app.buttonLink} className="btn btn-grad">
                  Download Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
/*
const appData = [
    {
      title: 'Our Powerful All-In-One Wallets',
      description:
        'ICOX Wallets is most secure am libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
      buttonLink: '#',
      imageUrl: 'images/app-screens/a.jpg',
    },
  ];
*/