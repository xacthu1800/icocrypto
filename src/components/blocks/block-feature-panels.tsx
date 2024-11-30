import { ColorStyle, Stylable } from "@/utils/colorclass";
import { FeatureS1, FeatureS4, FeatureS20 } from "@/components/elements/element-feature";

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

type FeatureContentType = featureS1 | featureS4 | featureS20;
type VariantType = "S1" | "S4" | "S20"

interface featureContent {
    featureContent?: FeatureContentType,
    color?: ColorStyle;
    style?: Stylable;
    dark?: boolean;
    variant: VariantType;
}

export const Feature: React.FC<featureContent> = ({
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
        </section>
    );
};