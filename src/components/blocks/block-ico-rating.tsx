import React from 'react';
import Image from 'next/image';

interface RatingItem {
  logoSrc: string;
  rating: string;
  scale: string;
  delay: string;
}

const ratingItems: RatingItem[] = [
  { logoSrc: '/images/logo/a.png', rating: '4.7', scale: '/5', delay: '.9' },
  { logoSrc: '/images/logo/b.png', rating: 'A', scale: '', delay: '1' },
  { logoSrc: '/images/logo/c.png', rating: '9.4', scale: '/10', delay: '1.1' },
  { logoSrc: '/images/logo/d.png', rating: '4.9', scale: '/5', delay: '1.2' },
  { logoSrc: '/images/logo/e.png', rating: '5', scale: '/5', delay: '1.3' },
];

const BlockIcoRating: React.FC = () => {
  return (
    <section className="section no-pd overflow-hidden text-center over-up">
      <h6 className="title title-xs tc-secondary pdb-s animated" data-animate="fadeInUp" data-delay=".8" style={{ visibility: "visible" }}>
        Ico Rating
      </h6>
      <ul className="rank-list">
        {ratingItems.map((item, index) => (
          <li
            key={index}
            className="rank-item animated"
            data-animate="fadeInUp"
            data-delay={item.delay}
            style={{ visibility: "visible" }}
          >
            <Image
              src={item.logoSrc}
              alt={`rating logo ${index + 1}`}
              width={80} 
              height={80} 
            />
            <div className="rank-count">
              {item.rating} <span>{item.scale}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlockIcoRating;
