import React from "react";

interface FeatureItem {
    title: string;
    description: string;
    backgroundClass: string;
}

interface BlockProblemProps {
    leftContent: {
        title: string;
        description: string;
        listItems: string[];
    };
    rightContent: FeatureItem[];
}

export const BlockProblem: React.FC<BlockProblemProps> = ({ leftContent, rightContent }) => {
    return (
        <section className="nk-block nk-block-problems tc-light">
            <div className="row g-0 align-items-center">
                {/* Left Column */}
                <div className="col-lg-6">
                    <div
                        className="feature boxed boxed-lg bg-theme no-mg split-lg-left split-left animated"
                        data-animate="fadeInUp"
                        data-delay=".3"
                        style={{ visibility: "visible" }}
                    >
                        <h4 className="title title-md">{leftContent.title}</h4>
                        <p>{leftContent.description}</p>
                        <ul className="list list-dot">
                            {leftContent.listItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Right Column */}
                <div className="col-lg-6">
                    <div
                        className="feature-group bg-theme-alt split-right split-lg animated"
                        data-animate="fadeInUp"
                        data-delay=".4"
                        style={{ visibility: "visible" }}
                    >
                        {rightContent.map((feature, index) => (
                            <div
                                key={index}
                                className={`feature boxed ${feature.backgroundClass}`}
                            >
                                <div className="feature-text">
                                    <h4 className="title title-md">{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlockProblem;

/*
  const problemData = {
    leftContent: {
      title: 'Automation Development',
      description: 'The automation development provides rem aperiam, et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit molestiae illum qui dolorem eum.',
      listItems: [
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Wende omnis iste natus error sit volupt.',
        'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Exercitation ullamco laboris nisi ut consequ.',
      ],
    },
    rightContent: [
      {
        title: 'High transfer fees',
        description: 'Each year over than 200$ bilion fees rem aperiam, et quasi architecto beatae vitae dicta sunt explicabo. Voluptas sit aspernatur aut odit aut fugit molestiae illum qui dolorem eum.',
        backgroundClass: 'bg-white-10',
      },
      {
        title: 'Scaling and Absolete Tool',
        description: 'Scalling is biggest problem that comes rem aperiam, et quasi architecto beatae vitae dicta sunt explicabo. Voluptas sit aspern odit aut fugit illum qui dolorem eum.',
        backgroundClass: 'bg-white-2',
      },
      {
        title: 'Secure Networks & Flexibility',
        description: 'Security is most concern for long rem aperiam, et quasi architecto beatae vitae aspernatur aut odit aut fugit molestiae illum qui dolorem ullamco laboris nisi volupt natus.',
        backgroundClass: 'bg-black-10',
      },
    ],
  };
*/