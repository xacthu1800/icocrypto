import React from "react";
import Image from "next/image";

interface ProductItem {
    title: string;
    image: string;
    link: string;
    delay: string;
}

interface BlockOurProductProps {
    products: ProductItem[];
}

export const BlockOurProduct: React.FC<BlockOurProductProps> = ({ products }) => (
    <section className="container">
        <div className="nk-block nk-block-features-s4 mgb-m30">
            <div className="row">
                <div className="col-lg-4">
                    <div className="section-head">
                        <h2 className="title animated" data-animate="fadeInUp" data-delay=".1" style={{ visibility: "visible" }}>
                            Our Products
                        </h2>
                        <p className="animated" data-animate="fadeInUp" data-delay=".2" style={{ visibility: "visible" }}>
                            We created our product libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                        </p>
                    </div>
                </div>
                {products.map((product, index) => (
                    <div className="col-lg-4 col-sm-6" key={index}>
                        <a
                            href={product.link}
                            className="feature feature-s4 feature-center animated"
                            data-animate="fadeInUp"
                            data-delay={product.delay}
                            style={{ visibility: "visible" }}
                        >
                            <div className="feature-img">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={300}
                                    height={200}
                                />
                            </div>
                            <h5 className="title title-sm title-dark">{product.title}</h5>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default BlockOurProduct;
/*
const products = [
    {
        title: "Product Title One",
        image: "images/products/a.jpg",
        link: "#",
        delay: ".3",
    },
    {
        title: "Product Title Two",
        image: "images/products/b.jpg",
        link: "#",
        delay: ".4",
    },
];
*/