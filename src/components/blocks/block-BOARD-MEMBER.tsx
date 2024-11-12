import React from 'react';
import { BoardMember } from "../elements/element-board-member";

interface SocialList {
    icon: string; 
    url: string;
}

interface MemberInfor {
    name: string; 
    position: string;
    imageUrl: string;
    delay: string;
    socialLinks: SocialList[];
}

interface BlockBoardMemberProps {
    membersBoard: MemberInfor[];
}

export const BlockBoardMember: React.FC<BlockBoardMemberProps> = ({membersBoard}) => {
    return(
        <div className="container container-xxl">
            <div className="row">
                {membersBoard.map((member, index) =>(
                <div className="col-md-4 col-lg-2 col-6" key={index}>
                    <BoardMember member={member} teamType={index}/>
                </div>
                ))}
            </div> 
        </div>
    )
}