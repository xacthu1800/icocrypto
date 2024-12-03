import { ColorStyle, Stylable } from "@/utils/colorclass";
import { FeatureS1, FeatureS4, FeatureS20, FeatureS21, FeatureS22 } from "@/components/elements/element-featurePanels";

interface featureS1 {
    title: string;
    textRow1: string;
    textRow2: string;
    textRow3: string;
    imageUrl: string;
    imageAlt: string;
    link: string;
}

interface featureS4{
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[]; 
}

interface featureS20{
    contentTitle: string,
    content: string ,
    buttonLabel: string ,
    buttonIcon: string ,
    linkLabel: string ,
    link: string,
    imageUrl: string,
    imageAlt: string
}

interface featureS21{
    title: string,
    mainTitle: string,
    tabsPlatform: {
        id: string;
        title: string;
        description: string;
        features: {
            icon: string;
            text: string;
        }[];
        image: {
            src: string;
            alt: string;
            width: number;
            height: number;
        };
    }[]
}

interface featureS22 {
    title: string,
    mainTitle: string,
    items: {
      src: string;
      alt: string;
      width: number;
      height: number;
      className?: string; 
    }[]
  }

  type FeatureContentType = featureS1 | featureS4 | featureS20 | featureS21 | featureS22;
  type VariantType = "S1" | "S4" | "S20" | "S21" | "S22"
  
interface featureContent {
    featureContent?: FeatureContentType,
    color?: ColorStyle;
    style?: Stylable;
    dark?: boolean;
    variant: VariantType;
}

export const FeaturePanels: React.FC<featureContent> = ({
    featureContent,
    color = "default", 
    style = "",
    dark = false, 
    variant = "S1",
}) => {
    const darkClass = dark ? "dark" : "";
    const styleClass = style ? style : "";
    const colorClass = color ? color : "default";
    return (
        <section className={`${styleClass} ${colorClass} ${darkClass}`}>
                {variant === "S1"  && <FeatureS1 FeatureContent={featureContent as featureS1} />}
                {variant === "S4"  && <FeatureS4 FeatureContent={featureContent as featureS4} />} 
                {variant === "S20" && <FeatureS20 FeatureContent={featureContent as featureS20} />} 
                {variant === "S21" && <FeatureS21 FeatureContent={featureContent as featureS21} />} 
                {variant === "S22" && <FeatureS22 FeatureContent={featureContent as featureS22} />} \
        </section>
    );
};

/* 
    S1 =  "About block" => gentian multi - theme
    S4 =  "Admin dash board block" => gentian multi - theme
    S20 = "About block" => azalea - theme
    S21 = "PlatForm  block" => azalea - theme
*/