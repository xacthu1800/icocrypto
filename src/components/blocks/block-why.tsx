import Image from 'next/image';

interface Feature {
  iconClass: string;
  title: string;
  description: string;
  delay: string;
}

interface BlockWHYProps {
  featuresWhy: Feature[]; 
}

const BlockWHY = ({ featuresWhy }: BlockWHYProps) => {
  return (
      <div className="container section bg-white">
        {/* Block */}
        <div className="nk-block nk-block-features-s2">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-5">
              <div className="gfx py-4 animated" data-animate="fadeInUp" data-delay=".1" style={{ visibility: "visible" }}>
                <Image src="/images/gfx/gfx-a.png" alt="gfx" width={500} height={300} />
              </div>
            </div>

            <div className="col-lg-7">
              {/* Section Head */}
              <div className="section-head">
                <h2 className="title animated" data-animate="fadeInUp" data-delay=".2" style={{ visibility: "visible", color: "#007bff" }}>
                  Why Choose ICO Crypto?
                </h2>
                <p className="animated text-secondary" data-animate="fadeInUp" data-delay=".3" style={{ visibility: "visible" }}>
                  We believe in a new world, which helps you lunch and introduce your ICO Website. We designed it very carefully to make it more attractive, useful and fit any kind of ICO/Crypto website.
                </p>
              </div>

              {/* Features List */}
              <div className="features-list me-4 mgb-m30">
                {featuresWhy.map((feature, index) => (
                  <div className="feature feature-s2 animated" data-animate="fadeInUp" style={{ visibility: "visible" }} data-delay={feature.delay} key={index}>
                    <div className="feature-icon dot">
                      <em className={`icon ikon ${feature.iconClass}`} style={{ color: "#007bff" }} ></em>
                    </div>
                    <div className="feature-text">
                      <h5 className="title title-sm" style={{ color: "#007bff" }} >{feature.title}</h5>
                      <p className="text-secondary">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BlockWHY;
/*
const featuresWhy = [
        {
          iconClass: 'ikon-shiled-alt',
          title: 'Secured User Data',
          description: 'We protect user data and emo enim ipsam voluptatem quia voluptas sitaut odit aut fugit, sed quia conseq ur magni dolores aspernatur.',
          delay: '.4',
        },
        {
          iconClass: 'ikon-user',
          title: 'Most Credibility',
          description: 'Most authentically sed do eiusmod tempor incididunt ut labore et dolore magna aliqua cillum dolore eu fugiat ipsum dolor sit amet.',
          delay: '.5',
        },
        {
          iconClass: 'ikon-data-server',
          title: 'Big Data Insights',
          description: 'You can trade & invest token oluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat magni dolores.',
          delay: '.6',
        },
      ];
*/
