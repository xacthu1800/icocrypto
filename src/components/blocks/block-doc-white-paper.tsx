import React from 'react';
import Image from 'next/image';

interface DocWhitePaperItem {
  title: string;
  description: string;
  whitePaperLink: string;
  twoPagerLink: string;
  imageUrl: string;
}

interface DocWhitePaperProps {
  docData: DocWhitePaperItem[];
}

const DocWhitePaper: React.FC<DocWhitePaperProps> = ({ docData }) => {
  return (
    <div className="nk-block nk-block-document">
      <div className="row justify-content-center">
        {docData.map((doc, index) => (
          <div key={index} className="col-lg-10">
            <div
              className="card card-lg animated"
              data-animate="fadeInUp"
              data-delay=".3"
              style={{ visibility: "visible" }}
            >
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="nk-block-img px-4 pb-4 pb-md-0">
                  <Image 
                      src={doc.imageUrl} 
                      alt="doc" 
                      width={380} 
                      height={100} 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="nk-block-text">
                    <h4 className="title title-md" style={{ color: "#007bff" }}>{doc.title}</h4> 
                    <p className="text-secondary">{doc.description}</p>
                    <ul className="btn-grp gutter-30px gutter-vr-20px">
                      <li>
                        <a href={doc.whitePaperLink} className="btn btn-grad">
                          Download Whitepaper
                        </a>
                      </li>
                    </ul>
                    <div style={{ marginBottom: "20px" }}/> 
                    <ul>
                        <a href={doc.twoPagerLink} className="link" style={{ color: "#007bff" }}>
                          <em className="link-icon fas fa-file-alt"></em>{' '}
                          <span>Download Two Pager</span>
                        </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocWhitePaper;

/*
  const docData = [
    {
      title: 'Read the Whitepaper',
      description: 'Our main goal helps rem aperiam, et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit molestiae illum quim eum.',
      whitePaperLink: '#',
      twoPagerLink: '#',
      imageUrl: 'images/doc-a.png',
    },
  ];
*/