"use client";

import PageHeader from "@/components/blocks/block-banner";
import CustomButton from "@/components/elements/element-button";
import Countdown from "@/components/elements/element-countdown";
import ProgressBar from "@/components/elements/element-progess-bar";
import { ColorStyle } from "@/utils/colorclass";
import { SizeStylable } from "@/utils/sizeclass";
import {
  ContentTitleX1,
} from "@/components/elements/element-content";
import CustomText from "@/components/elements/element-typography";
import ProcessBar  from "@/components/elements/element-process-bar";
import { BlockFAQ } from "@/components/blocks/block-FAQ";
import { BlockDocument } from "@/components/blocks/block-DOCUMENT";
import { BlockOurPartner } from "@/components/blocks/block-OURPARTNER";
import { BlockInPress } from '@/components/blocks/block-INPRESS';
import { BlockNews } from '@/components/blocks/block-NEWS';
import Footer from "@/components/blocks/block-footer"

import { BlockContactUs } from "@/components/blocks/block-CONTACT-US";
import { BlockAbout } from "@/components/blocks/block-ABOUT";
import { BlockEcosystems } from "@/components/blocks/block-ECOSYSTEMS";
import BlockPlatform from "@/components/blocks/block-platform";
import BlockMVP from "@/components/blocks/block-MVP";
import { BlockTokens } from "@/components/blocks/block-TOKEN";
import { BlockOurTeam } from "@/components/blocks/block-OURTEAM";
import { BlockBoardMember } from "@/components/blocks/block-BOARD-MEMBER";
import { BlockRoadMap } from "@/components/blocks/block-ROADMAP"

import page from '@/configs/page.json'

export default function Home() {
 return (
    <>
      <PageHeader title={page.contents.banner.title}>
        <span>
          {page.contents.banner.description}
        </span>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            gap: "20px",
            marginTop: "5%",
          }}
        >
          <CustomButton
            variant={ColorStyle.Primary}
            borderRadius={SizeStylable.BorderRadius}
          >
            Private Sale
          </CustomButton>
          <CustomButton
            outline={ColorStyle.Outline}
            variant={ColorStyle.Primary}
            borderRadius={SizeStylable.BorderRadius}
          >
            Private Token
          </CustomButton>
        </div>
      </PageHeader>
      <section
        style={{
          padding: "2% 10%",
        }}
      >
        <div className="row">
          <div className="col-9"> 
          <ProcessBar
            processPoint={[
              { title: 'Soft Cap', percent: 25 },
              { title: 'Crowdsale', percent: 55 },
              { title: 'Hard Cap', percent: 85 }
            ]}
            progressPoint={30}
            raised="1,1250"
            target="150,000"
            currency="Tokens"
            status={{
            title: 'CURRENT BONUS',
            percent: 20,
            bonusTitle: 'Contributor can receive'
           }}
          />
          </div>
          <div className="col-3">
            <Countdown
              title="Test"
              percent="20"
              caption="test"
              subtitle="The Bonus ends in"
              endDate="2024/10/01"
            />
          </div>
        </div>

        <div
          className="row"
          style={{
            marginTop: "5%",
          }}
        >
          <div className="col-sm-7 d-flex justify-content-center justify-content-sm-start">
            <ul className="btn-grp btn-grp-break justify-content-center justify-content-sm-start gutter-vr-20px">
              <li
                className="animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.8"
                style={{ visibility: "visible", animationDelay: "0.8s" }}
              >
                <a
                  href="https://www.youtube.com/watch?v=SSo_EIwHSd4"
                  className="link link-light link-break video-popup"
                >
                  <em className="icon-circle icon-border icon-animation fas fa-play"></em>
                  <span>How it Works</span>
                </a>
              </li>
              <li
                className="animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.9"
                style={{ visibility: "visible", animationDelay: "0.9s" }}
              >
                <a href="#" className="link link-light link-break">
                  <em className="icon-circle icon-border far fa-lightbulb"></em>
                  <span>Why buy Tokens now?</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-5">
            <ul
              className="social-links social-links-s2 justify-content-center justify-content-sm-end animated fadeInUp"
              data-animate="fadeInUp"
              data-delay="1"
              style={{ visibility: "visible", animationDelay: "1s" }}
            >
              <li>
                <a href="#">
                  <em className="fab fa-twitter"></em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em className="fab fa-medium-m"></em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em className="fab fa-facebook-f"></em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em className="fab fa-youtube"></em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em className="fab fa-bitcoin"></em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em className="fab fa-github"></em>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section> 
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title={page.contents.about.title} mainTitle={page.contents.about.mainTitle} />
      <BlockAbout aboutContent={page.contents.about}/>
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title={page.contents.ecosystems.title} mainTitle={page.contents.ecosystems.mainTitle} />
      <BlockEcosystems contents={page.contents.ecosystems.contents} imageBackground={page.contents.ecosystems.imageBackground}/>
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title={page.contents.platform.title} mainTitle={page.contents.platform.mainTitle} />
      <BlockPlatform tabs = {page.contents.platform.tabsPlatform} />
      <div style={{ marginBottom: "100px" }}/>
      <ContentTitleX1 title={page.contents.mvp.title} mainTitle={page.contents.mvp.mainTitle}>Our project is based on an existing cryptocurrency exchange.</ContentTitleX1>
      <BlockMVP items={page.contents.mvp.items} />
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title={page.contents.token.title} mainTitle={page.contents.token.mainTitle}>Breakdown of our Token Recipients.</ContentTitleX1>
      <section className="container">
        {/* TOKENS */}
        <BlockTokens
                    chartData={page.contents.chart}
                    tokenInfo={page.contents.token.items}
                    canvasId="token-distribution"
                    color="light"
                    style="custom-style"
                    dark={false}
                />
      </section>
      <div style={{ marginBottom: "100px" }}/>
      <ContentTitleX1 title={page.contents.roadmap.title} mainTitle={page.contents.roadmap.mainTitle}>ICO Crypto is developing a global data-driven platform for the world. Powered by blockchain and smart contracts.</ContentTitleX1>
      <section className="container">
        {/* ROADMAP */}
        <BlockRoadMap roadmapList={page.contents.roadmap.items} /> 
      </section>
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title={page.contents.ourteamMember.title} mainTitle={page.contents.ourteamMember.mainTitle} />
      <section className="container">
        {/* OUR TEAM */}
        <BlockOurTeam ourteamMember={page.contents.ourteamMember.members} />
      </section>
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title={page.contents.membersBoard.title} mainTitle={page.contents.membersBoard.mainTitle}>Our advisors and board members are great part of our team.</ContentTitleX1> 
      <BlockBoardMember membersBoard={page.contents.membersBoard.members}/>
      <div style={{ marginBottom: "100px" }}/> 
      <div className="nk-block block-partners" style={{
        display: "flex", alignItems: "center", flexDirection: "column"
      }}>
        <CustomText heading="h4">OUR PARTNERS</CustomText>
        <BlockOurPartner partners={page.contents.partners}/>
      </div>
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title={page.contents.documents.title} mainTitle={page.contents.documents.mainTitle}>Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.</ContentTitleX1> 
      <section className="container">
        {/* BOARD MEMBER */}
        <BlockDocument documents={page.contents.documents.items} color="primary" style="custom-style" dark={true} />
      </section>
      <div style={{ marginBottom: "100px" }}/> 
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <ContentTitleX1 title={page.contents.inpress.title} mainTitle={page.contents.inpress.mainTitle} />
            <section className="container">
              {/* IN PRESS */}
              <BlockInPress inPressItems={page.contents.inpress.items} />
            </section>
          </div>
          <div className="col-lg-6">
            <ContentTitleX1 title={page.contents.news.title} mainTitle={page.contents.news.mainTitle} />
            <section className="container">
              {/* NEWS */}
              <BlockNews newsItems={page.contents.news.items} />
            </section>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "100px" }}/> 
      <ContentTitleX1 title={page.contents.faqTabs.title} mainTitle={page.contents.faqTabs.mainTitle}>Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others. If you have any other questions, please get in touch.</ContentTitleX1> 
      <section className="container">
        <BlockFAQ tabs={page.contents.faqTabs.items} variant="S2"/>
      </section>
      <div style={{ marginBottom: "100px" }}/> 
      <section className="container">
        <BlockContactUs contentList={page.contents.contact}/>
      </section>
      <div style={{ marginBottom: "100px" }}/> 
      <Footer /> 
    </>
  );
}