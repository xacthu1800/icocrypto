"use client";
import styles from "@/app/page.module.css";
import Body from "@/components/body";
import NavBar from "@/components/navbar";
import "@/themes/vendor.bundle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactNode, useEffect, useRef } from "react";
import "./azalea.css";
import ParticleBackground from "@/components/particlebackground";
import PageHeader from "@/components/blocks/block-banner";
import CustomButton from "@/components/elements/element-button";

const GentianLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    const navbarRefs = useRef<HTMLElement>(null);

    useEffect(() => {
        const onScroll = () => {
            const scroll = window.scrollY;
            if (scroll > 0) {
                navbarRefs.current?.classList.add("has-fixed");
            } else {
                navbarRefs.current?.classList.remove("has-fixed");
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <html lang="en">
            <Body extraClasses="bg-theme page-loaded nk-nio-theme">
                <div className="nk-wrap has-ovm">
                    <header
                        id="header"
                        ref={navbarRefs}
                        className="nk-header page-header is-transparent is-sticky is-dark"
                    >
                        <NavBar activate="home">
                            <li>
                                <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#login-popup"
                                    className="btn btn-md btn-thin btn-outline btn-auto btn-round btn-primary no-change"
                                >
                                    <span>Sign In</span>
                                </a>
                            </li>
                        </NavBar>
                    </header>
                    <main className='nk-pages tc-light' style={{zIndex: 2}}>
                        {children}
                    </main>
                </div>
                <ParticleBackground
                    count={30}
                    color="255, 255, 255, 0.02"
                    maxRadius={8}
                    minRadius={2}
                    speed={0.8}
                    lineColor="255, 255, 255"
                    lineOpacity={0.02}
                    linksDistance={200}
                />
                <div className="nk-ovm nk-ovm-repeat nk-ovm-fixed shape-i">
                    <div className="ovm-line"></div>
                </div>
            </Body>
        </html>
    );
};

export default GentianLayout