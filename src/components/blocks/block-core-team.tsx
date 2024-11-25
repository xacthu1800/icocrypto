import Image from "next/image";
import React, { useState } from "react";

interface TeamMember {
  id: number;
  image: string;
  name: string;
  position: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
  };
  description: string[];
  skills?: {
    title: string;
    percent: number;
  }[];
}

/*const teamMembers: TeamMember[] = [
  {
    id: 1,
    image: "images/team/a.jpg",
    name: "Louis Baker",
    position: "CEO & Lead Blockchain",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
    },
    description: [
      "He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem.",
      "Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.",
    ],
    skills: [
      { title: "Blockchain", percent: 85 },
      { title: "Decentralization", percent: 68 },
    ],
  },
  {
    id: 2,
    image: "images/team/b.jpg",
    name: "Jonathan Rios",
    position: "CTO & Software Engineer",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
    },
    description: [
        "He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem.",
        "Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.",
      ],
  },
  {
    id: 3,
    image: "images/team/c.jpg",
    name: "Jonathan Rios",
    position: "Sr.Backend developer",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
    },
    description: [
        "He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem.",
        "Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.",
      ],
  },
  {
    id: 4,
    image: "images/team/d.jpg",
    name: "Jason Morales",
    position: "Software Engineer",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
    },
    description: [
        "He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem.",
        "Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.",
      ],
  },
];
*/
const teamMembers: TeamMember[] = []; 

const BlockCoreTeam = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
    const handleClick = (member: TeamMember) => {
      setSelectedMember(member);
    };
  
    const handleClosePopup = () => {
      setSelectedMember(null);
    };
  
    return (
      <div className="nk-block">
        <div className="row justify-content-center">
          {teamMembers.map((member) => (
            <div className="col-md-3 col-6" key={member.id}>
              <div className="team animated" data-animate="fadeInUp" data-delay=".2" style={{ visibility: "visible" }}>
                <div className="team-photo" onClick={() => handleClick(member)} style={{ cursor: "pointer" }}>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={200} 
                    height={200} 
                  />
                  <ul className="team-social">
                    {member.socialLinks.linkedin && (
                      <li>
                        <a href={member.socialLinks.linkedin}>
                          <em className="fab fa-linkedin-in"></em>
                        </a>
                      </li>
                    )}
                    {member.socialLinks.facebook && (
                      <li>
                        <a href={member.socialLinks.facebook}>
                          <em className="fab fa-facebook-f"></em>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <h5 className="team-name title title-sm">{member.name}</h5>
                <span className="team-position">{member.position}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Button */}
        <div
          className="text-center animated"
          data-animate="fadeInUp"
          data-delay=".5"
          style={{ visibility: "visible" }}
        >
          <a href="#" className="btn btn-grad">
            See All Team Member
          </a>
        </div>
  
        {/* Member Information */}
        {selectedMember && (
          <div style={popupOverlayStyle}>
            <div style={popupStyle}>
              <a title="Close" className="mfp-close" onClick={handleClosePopup} style={closeButtonStyle}>
                ×
              </a>
              <div className="row align-items-start">
                <div className="col-md-6">
                  <div className="team-photo">
                    <Image 
                      src={selectedMember.image} 
                      alt={selectedMember.name} 
                      width={400} 
                      height={600} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="team-popup-info ps-md-3">
                    <h3 className="team-name title title-lg pt-4 text-info">{selectedMember.name}</h3>
                    <p className="team-position">{selectedMember.position}</p>
                    <ul className="team-social mb-4">
                      {selectedMember.socialLinks.facebook && (
                        <li>
                          <a href={selectedMember.socialLinks.facebook}>
                            <em className="fab fa-facebook-f"></em>
                          </a>
                        </li>
                      )}
                      {selectedMember.socialLinks.linkedin && (
                        <li>
                          <a href={selectedMember.socialLinks.linkedin}>
                            <em className="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                      )}
                    </ul>
                    {selectedMember.description.map((desc, index) => (
                      <p key={index}>{desc}</p>
                    ))}
                    {selectedMember.skills && (
                      <div className="progress-list">
                        {selectedMember.skills.map((skill, index) => (
                          <div className="progress-wrap" key={index}>
                            <div className="progress-title">
                              {skill.title} <span className="progress-amount">{skill.percent}%</span>
                            </div>
                            <div className="progress-bar progress-bar-xs bg-black-10">
                              <div
                                className="progress-percent bg-primary"
                                style={{ width: `${skill.percent}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  
  const popupOverlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1001,
  };
  
  const popupStyle: React.CSSProperties = {
    background: "#fff",
    padding: "50px",
    borderRadius: "10px",
    width: "80%",
    maxWidth: "910px",
  };
  
  const closeButtonStyle: React.CSSProperties = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "30px",
    cursor: "pointer",
    color: "#000",
    backgroundColor: "transparent",
    border: "none",
    zIndex: 1101,
    display: "block",
  };
  
  export default BlockCoreTeam;
  