import React from "react";

interface solution{
    icon: string,
    title: string;
    description: string;
    delay: string
}

interface SolutionProps {
    solutionData: solution[]
}

const Solution: React.FC<SolutionProps> = ({solutionData}) => {
  return (
    <>
        <div className="nk-block nk-block-features-s3">
            <div className="row gutter-vr-40px justify-content-center">
                {solutionData.map((solution, index) => (
                    <div
                        key={index}
                        className="col-lg-6 col-md-10"
                    >
                        <div
                            className="feature feature-s3 feature-center animated"
                            data-animate="fadeInUp"
                            data-delay={solution.delay}
                            style={{ visibility: "visible", animationDelay: `${solution.delay}s` }}
                        >
                            <div className="feature-icon feature-icon-lg">
                                <em className={`icon icon-lg ikon ikon-${solution.icon}`}></em>
                            </div>
                            <div className="feature-text">
                                <h4 className="title title-md title-dark">{solution.title}</h4>
                                <p>{solution.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  );
};

/* props
const solutionData = [
    {
        icon: 'ikon ikon-cloud',
        title: 'Global Single-Platform',
        description:
            'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid eos qui ratione',
        delay: '0.3',
    },
    {
        icon: 'ikon ikon-safety',
        title: 'Be Safe and Secure',
        description:
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia agni dolores eos qui ratione voluptatem sequi',
        delay: '0.4',
    },
    {
        icon: 'ikon ikon-cash',
        title: 'Decentralize Payment Systems',
        description:
            'Empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris fugiat nulla sed do',
        delay: '0.5',
    },
    {
        icon: 'ikon ikon-globe',
        title: 'Blockchain Based DevOps Marketplace',
        description:
            'Ut enim ad minim veniam, quis nostrud ullamco laboris fugiat nulla sed do eiusmod. Empor incididunt ut labore et dolore magna',
        delay: '0.6',
    },
];
*/

export default Solution;
