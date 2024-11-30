import { ColorStyle, Stylable } from "@/utils/colorclass";
import {ContactS1, ContactS2, ContactS3, ContactS4, ContactS5, ContactS6} from "@/components/elements/element-contact-form"

interface contactList {
    icon: string;
    text: string;
}

interface LinkList {
    icon: string;
    url: string;
}

interface infor {
    title: string;
    subTitle: string;
    text: string;
    backgroundImage: string; 
    altText: string; 
    labelSubmitButton: string
}

interface contactContent {
    contact?: contactList[];
    links?: LinkList[];
    infor?: infor;
}

interface BlockContactProps {
    contactContent: contactContent,
    color?: ColorStyle;
    style?: Stylable;
    dark?: boolean;
    variant: "S1" | "S2" | "S3" | "S4" | "S5" | "S6";
}

export const BlockContact: React.FC<BlockContactProps> = ({
    contactContent,
    color = "default", 
    style = "",
    dark = false, 
    variant = "S1",
}) => {
    const darkClass = dark ? "dark" : "";
    const styleClass = style ? style : "";
    const colorClass = color ? color : "default";
    const Contact =
        variant === "S1"
            ? ContactS1
            : variant === "S2"
            ? ContactS2
            : variant === "S3"
            ? ContactS3
            : variant === "S4"
            ? ContactS4
            : variant === "S5"
            ? ContactS5
            : variant === "S6"
            ? ContactS6
            : ContactS1
    return (
        <section className={`${styleClass} ${colorClass} ${darkClass}`}>
            <Contact contactContent={contactContent}/>    
        </section>
    );
};