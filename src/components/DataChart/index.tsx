import React from "react";
import './styles.css'

export default function DataChart() {
  return (
    <>
      <section className="predict-with-actual-data">
        <div className="content">
          <h1>
            Predict and confirm your ovulation with{" "}
            <span className="image_as_underline">actual</span> data
          </h1>
          <p className="description">
            Unlike most ovulation tests that only give you "yes/no" results,
            Inito provides <strong>real numerical values</strong> of your
            fertility hormones.
            <br />
            <br />
            If you have irregular cycles, actual data is necessary to know{" "}
            <em>exactly</em> when you ovulate, and when is the best time to try
            to conceive.
          </p>
          <a className="button" href="/buy-now">
            <span className="button__small-view">GET THE INITO KIT</span>
            <span className="button__large-view">Get the Inito Kit</span>
          </a>{" "}
        </div>
        <div className="iphone slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{ opacity: 1, width: "1020px" }}
            >
              <img
                src="https://cdn.inito.com/inito_website/ovulation_confirmed.png"
                className="slick-slide"
                data-slick-index="0"
                aria-hidden="true"
                tabIndex={-1}
                style={{
                  width: "286px",
                  position: "relative",
                  left: "0px",
                  top: "0px",
                  zIndex: 998,
                  opacity: 0,
                  transition: "opacity 500ms ease 0s",
                }}
              />
              <img
                src="https://cdn.inito.com/inito_website/hormone_chart.png"
                className="slick-slide"
                data-slick-index="1"
                aria-hidden="true"
                tabIndex={-1}
                style={{
                  width: "286px",
                  position: "relative",
                  left: "-340px",
                  top: "0px",
                  zIndex: 998,
                  opacity: 0,
                  transition: "opacity 500ms ease 0s",
                }}
              />
              <img
                src="https://cdn.inito.com/inito_website/cycle_day_view.png"
                className="slick-slide slick-current slick-active"
                data-slick-index="2"
                aria-hidden="false"
                tabIndex={0}
                style={{
                  width: "286px",
                  position: "relative",
                  left: "-680px",
                  top: "0px",
                  zIndex: 999,
                  opacity: 1,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="chart-con">
        <div className="chart-con__text-content">
          <h1 className="text-center text-dtheme">
            Never miss{" "}
            <span className="an-egg">
              <img
                className="text-image"
                src="https://cdn.inito.com/inito_website/an_egg.png"
              />
              a day
              <img
                className="strike-through"
                src="https://cdn.inito.com/inito_website/strike_through.png"
              />
            </span>
            again with Inito
          </h1>
          <p className="description">
            Inito tracks up to 6 fertile days and confirms ovulation by
            measuring all 4 hormones in just 10 minutes:
          </p>
          <div className="chart-con__text-content__about">
            <ul>
              <li>Estrogen, which rises 3-4 days before ovulation</li>
              <li>LH, which surges 24-36 hours before ovulation</li>
              <li>PdG, which rises after ovulation</li>
              <li>FSH, to track follicle growth</li>
            </ul>
          </div>
        </div>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://cdn.inito.com/inito_website/hormones_graph_mob.jpg"
          />
          <source
            media="(min-width: 769px)"
            srcSet="https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png"
          />
          <img
            className="v2-homepage-chart"
            src="https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png"
          />
        </picture>
      </section>

      <section className="why-inito-is-smarter-way">
        <section className="why-measure-progesterone">
          <img
            className="blue-calendar"
            src="https://cdn.inito.com/inito_website/blue_calendar.png"
          />
          <h6>Why measure the PdG? (urine metabolite of progesterone)?</h6>
          <p>
            <strong>Anovulation</strong> (having a menstrual cycle with no egg)
            is actually a common occurrence, affecting 1 in 10 women*.
            <br />
            <br />
            If ovulation occurs, the levels of Progesterone and its urine
            metabolite PdG rise after a few days and stay elevated. Sustained,
            elevated PdG levels after peak fertility indicate a successful
            ovulation.
            <br />
            <br />
          </p>
          <div className="doctor-review-source">
            <span className="source">
              * Source: National Institutes of Health
            </span>
            <span className="quote">
              “Inito is all that you need to give you the best chance of
              conception."
            </span>

            <div className="doctor">
              <img
                className="doctor-image"
                src="https://cdn.inito.com/inito_website/doc_testimonial_wagner.jpg"
              />
              <div className="doctor-info">
                <strong className="doctor-name">Dr. Rachel Wagner</strong>
                <em className="doctor-qualification">MD</em>
                <div></div>
              </div>
            </div>
          </div>
        </section>
        <section className="blue-background">
          <h1>
            Why Inito is the smarter way to get{" "}
            <span className="image_as_underline">pregnant</span>
          </h1>

          <section className="left-card">
            <div className="text-content">
              <h1>
                Get charts and actual{" "}
                <span className="image_as_underline">values</span> of your{" "}
                <span className="inline-image">
                  hormones
                  <img
                    className="homepage-4-star"
                    src="https://cdn.inito.com/inito_website/homepage_4_star.png"
                  />
                </span>
              </h1>
              <div>
                Most ovulation kits have a set value or a threshold, making them
                likely to give a false read if your hormones fall outside the
                average range.
                <br />
                <br />
                Inito measures real values of your hormones to personalize
                results to the unique you.
              </div>
              <a className="small-view-button" href="/buy-now">
                GET THE INITO KIT
              </a>
            </div>
            <picture className="card-image">
              <source
                media="(min-width:769px)"
                srcSet="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values@2x.png"
              />
              <source
                media="(max-width:768px)"
                srcSet="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values.png"
              />
              <img src="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values@2x.png" />
            </picture>
          </section>

          <section className="right-card">
            <div className="text-content">
              <h1>Inito tracks everything so you don't have to</h1>
              <div>
                The Inito Fertility Monitor comes with a free easy-to-use App,
                so you can track your fertile days with ease and know exactly
                when you ovulate.
                <br />
                <br />
                Our App notifies you for everything:
                <ul className="blue-bullet-list">
                  <li>Your fertility levels</li>
                  <li>When to test on the right days</li>
                  <li>When you’ve successfully ovulated</li>
                  <li>And when to roll into bed!</li>
                </ul>
              </div>
              <a className="button" href="/buy-now">
                Get the Inito Kit
              </a>
            </div>

            <picture className="card-image">
              <source
                media="(min-width:769px)"
                srcSet="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/inito_tracks_everything@2x.jpg"
              />
              <source
                media="(max-width:768px)"
                srcSet="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/inito_tracks_everything.jpg"
              />
              <img src="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/inito_tracks_everything@2x.jpg" />
            </picture>

            <div className="fertility-card-carousel slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{ opacity: 1, width: "1500px" }}
                >
                  <img
                    src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/high_fertility-277405f0c3b1f844907885a9866aac272ff865c0ed3431d0a7f5673b2440b21e.svg"
                    className="slick-slide"
                    data-slick-index="0"
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      width: "321px",
                      position: "relative",
                      left: "0px",
                      top: "0px",
                      zIndex: 998,
                      opacity: 0,
                      transition: "opacity 500ms ease 0s",
                    }}
                  />
                  <img
                    src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/peak_fertility-21ac68f7f91f18f7e76b83c05e0eefec17e26037a254311312b59c3606bb952a.svg"
                    className="slick-slide"
                    data-slick-index="1"
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      width: "321px",
                      position: "relative",
                      left: "-375px",
                      top: "0px",
                      zIndex: 998,
                      opacity: 0,
                      transition: "opacity 500ms ease 0s",
                    }}
                  />
                  <img
                    src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/ovulation_confirmed-1af13f574905b54b0614d422f2161aebbdebd85d6cd39cb6ae2078706ba42642.svg"
                    className="slick-slide"
                    data-slick-index="2"
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      width: "321px",
                      position: "relative",
                      left: "-750px",
                      top: "0px",
                      zIndex: 998,
                      opacity: 0,
                      transition: "opacity 500ms ease 0s",
                    }}
                  />
                  <img
                    src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/low_fertility-51402a5906afd6879626e776235fbb7cbbe84d94529366f7266c51f4d3b406ab.svg"
                    className="slick-slide slick-current slick-active"
                    data-slick-index="3"
                    aria-hidden="false"
                    tabIndex={0}
                    style={{
                      width: "321px",
                      position: "relative",
                      left: "-1125px",
                      top: "0px",
                      zIndex: 999,
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      <section className="inito-steps">
        <div className="content">
          <h1 className="text-dtheme text-center">
            A <span className="image_as_underline">fertility lab</span> at your
            fingertips
          </h1>
          <p className="description">
            Easy-to-read fertility diagnostic results directly on your iPhone*,
            in just 10 minutes.
          </p>
          <div className="visible-in-large">
            <a className="button" href="/buy-now">
              Get the Inito kit
            </a>
            <div className="inito-monitor-support">
              * The Inito Fertility Monitor currently supports iPhone 7 and up.
              Android phones are not supported at the moment.
            </div>
            <div className="download-on-app-store">
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/inito-fertility-ovulation/id1183799668"
              >
                <img src="https://cdn.inito.com/inito_website/download_on_app_store.png" />
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="inito-steps-con">
          <div className="inito-step">
            <div className="video-con">
              <span className="num" style={{ background: "#BDE0E6" }}>
                1
              </span>
              <video
                autoPlay
                loop
                muted
                src="https://cdn.inito.com/inito_website/step1.mp4"
              ></video>
            </div>
            <div className="data-con">
              <span className="data text-dtheme font-med">
                <span className="num">1</span>Dip the test strip in urine for 15
                seconds.
              </span>
            </div>
          </div>
          <div className="inito-step">
            <div className="video-con">
              <span className="num" style={{ background: "#96CDD7" }}>
                2
              </span>
              <video
                autoPlay
                loop
                muted
                src="https://cdn.inito.com/inito_website/step2.mp4"
              ></video>
            </div>
            <div className="data-con">
              <span className="data text-dtheme font-med">
                <span className="num">2</span>Attach the Inito Fertility Monitor
                to your iPhone*.
              </span>
            </div>
          </div>
          <div className="inito-monitor-support">
            * The Inito Fertility Monitor currently supports iPhone 7 and up.
            Android phones are not supported at the moment.
          </div>

          <div className="inito-step">
            <div className="video-con">
              <span className="num" style={{ background: "#64B4C3" }}>
                3
              </span>
              <video
                autoPlay
                loop
                muted
                src="https://cdn.inito.com/inito_website/step3.mp4"
              ></video>
            </div>
            <div className="data-con">
              <span className="data text-dtheme font-med">
                <span className="num">3</span>Insert the test strip into the
                Inito Fertility Monitor.
              </span>
            </div>
          </div>
          <div className="inito-step">
            <div className="video-con">
              <span className="num">4</span>
              <video
                autoPlay
                loop
                muted
                src="https://cdn.inito.com/inito_website/step4.mp4"
              ></video>
            </div>
            <div className="data-con">
              <span className="data text-dtheme font-med">
                <span className="num">4</span>Get personalized results on our
                App in 10 minutes.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
