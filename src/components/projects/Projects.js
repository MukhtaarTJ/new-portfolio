import React, { Fragment, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ExpenseTackerModal from "../layouts/modals/ExpenseTrackerModal";
import Expense from "../../Assets/WhatsApp Image 2023-08-22 at 19.41.23.jpg";
// import Exam from "../../Assets/exam.png";
import Snappy from"../../Assets/snappy.png"
import Fast from "../../Assets/fast.png";
import Chat_Ai from "../../Assets/chat-ai.png";
import Code from "../../Assets/code-editor.jpg"
import SnappyChat from "../layouts/modals/SnappyChat";
import EstateAgencyModal from "../layouts/modals/CodeLab";
import FasttrackModal from "../layouts/modals/FasttrackModal";
import InfoModal from "../layouts/modals/InfoModal";
import ChatAiModal from "../layouts/modals/ChatAiModal";
import CodeLab from "../layouts/modals/CodeLab";

const Projects = () => {
  return (
    <Fragment>
      <ExpenseTackerModal />
      <CodeLab/>
      <SnappyChat/>
      <EstateAgencyModal />
      <FasttrackModal />
      <InfoModal />
      <ChatAiModal />
      <div className="portfolio" id="portfolio">
        <div className="container">
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            className="section-header text-center wow zoomIn"
            data-wow-delay="0.1s">
            <p>My Portfolio</p>
            <h2>Recent Projects</h2>
          </AnimationOnScroll>
          <div className="row">
            <div className="col-12">
              <ul id="portfolio-filter">
                <li
                  data-filter="*"
                  className="filter-active"
                  style={{ borderColor: "2px solid #110487" }}>
                  All
                </li>
                <li data-filter=".filter-">Web Applications</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp"
              data-wow-delay="0.4s">
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img src={Expense} alt="Image" />
                  </div>
                  <div className="portfolio-text">
                    <h3>
                      <a
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop2">
                        Expense Tracker
                      </a>{" "}
                    </h3>
                    <a className="btn">+</a>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp"
              data-wow-delay="0.0s"
              style={{ marginBottom: "40px" }}>
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img src={Code} alt="Image" />
                  </div>
                  <div className="portfolio-text">
                    <h3>
                      <a
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop1">
                          Code Lab
                      </a>
                    </h3>
                    <a className="btn">+</a>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
              data-wow-delay="0.2s">
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img src={Snappy} alt="Image" />
                  </div>
                  <div className="portfolio-text">
                    <h3>
                      <a
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        Snappy Chat
                      </a>{" "}
                    </h3>
                    <a className="btn">+</a>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
              data-wow-delay="0.8s">
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img src={Fast} alt="Image" />
                  </div>
                  <div className="portfolio-text">
                    <h3>
                      <a
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop3">
                        WebDev Blog
                      </a>
                    </h3>
                    <a className="btn">+</a>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
              data-wow-delay="0.8s">
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img src={Chat_Ai} alt="Image" />
                  </div>
                  <div className="portfolio-text">
                    <h3>
                      <a
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop5">
                        Chat AI
                      </a>
                    </h3>
                    <a className="btn" href="# ">
                      +
                    </a>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
