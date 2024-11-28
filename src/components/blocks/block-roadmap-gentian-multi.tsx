import React from "react";

interface RoadmapItem {
  year?: string;
  time?: string;
  title?: string;
  description?: string | null;
  listItems?: string[] | null;
  position: string;
  state?: string | null;
}

interface RoadmapProps {
  roadmapList: RoadmapItem[];
}

const BlockRoadMapV2: React.FC<RoadmapProps> = ({ roadmapList }) => {
  return (
    <div className="container container-xxl">
      <div className="nk-block nk-block-roadmap">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="roadmap-wrap">
              <div className="roadmap-line"></div>
              {roadmapList.map((item, index) => (
                <div
                  key={index}
                  className={`roadmap roadmap-${item.position} ${
                    item.state ? `roadmap-${item.state}` : ""
                  } animated`}
                  data-animate="fadeInUp"
                  data-delay={`.${index + 4}`}
                  style={{ visibility: "visible" }}
                >
                  {/* Show the year in the center. */} 
                  {item.position === "center" && (
                    <div className="roadmap-year">{item.year}</div>
                  )}

                  {/* Show the roadmap information. */}
                  {(item.time || item.title || item.description || item.listItems) && (
                    <div className="roadmap-step">
                      <div className="roadmap-head">
                        {item.time && <span className="roadmap-time">{item.time}</span>}
                        {item.title && <span className="roadmap-title">{item.title}</span>}
                      </div>
                      {item.description && <p>{item.description}</p>}
                      {item.listItems && (
                        <ul className="list list-dot">
                          {item.listItems.map((listItem, idx) => (
                            <li key={idx}>{listItem}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="text-center animated"
          data-animate="fadeInUp"
          data-delay=".4"
          style={{ visibility: "visible" }}
        >
          <a href="#" className="btn btn-grad">
            View Full Roadmap
          </a>
        </div>
      </div>
    </div>
  );
};
export default BlockRoadMapV2;
/*
const roadmapData = [
        {
          year: "2022",
          position: "center",
        },
        {
          year: "2022",
          time: "March 2022",
          title: "Concept development",
          description:
            "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
          position: "right",
          state: "finished",
        },
        {
          year: "2022",
          time: "Q3 & Q4 2022",
          title: "Website and Whitepaper",
          description: null,
          listItems: [
            "MVP of wallet prototype released",
            "Pre-Sale ICO Starts",
            "Redesign of website goes live",
            "Version 2 of Whitepaper released",
            "Version 3 of Onepager released",
          ],
          position: "left",
          state: "finished",
        },
        {
          year: "2022",
          position: "center",
        },
        {
          year: "2022",
          time: "Q1 2022",
          title: "Public Token Sale Begins",
          description:
            "Public ICO launch and crowd-sale starts - 5th January & Token distribution will commence - 2nd March.",
          position: "right",
          state: null,
        },
        {
          year: "2022",
          time: "Q2 2022",
          title: "Beta App User Testing",
          description:
            "Release our first apps for beta testing to our members community.",
          position: "left",
          state: null,
        },
      ];     
*/
