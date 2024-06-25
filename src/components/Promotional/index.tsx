import React from "react";

export default function Promotional() {
  return (
    <>
      <div className="promotion">
        <h1>
          The <span className="image_as_underline">only</span> fertility kit you
          will ever need
        </h1>
        <p className="description">
          Most ovulation tests predict your fertile days by tracking Estrogen
          and Luteinizing Hormone (LH), but fail to measure the hormone that
          actually confirms your ovulation:{" "}
          <strong>PdG (urine metabolite of progesterone).</strong>
        </p>
      </div>

      <div className="makes-inito-different">
        <h1>What makes Inito different?</h1>
        <p className="description">
          Inito is the only fertility monitor that measures all{" "}
          <strong>4 hormones</strong> on a <strong>single test strip</strong>,
          showing you a full picture of your cycles with results unique to your
          body.
        </p>
      </div>

      <div className="images-in-small-view">
        <div className="content">
          <img src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/trusted_by_20000_couples-a0a4930b99d93a9587185841c933b190cdf9e3fe6325bbff144fe51bd32b3db6.svg" />
          <span className="img-text">TRUSTED BY 20,000+ COUPLES</span>
        </div>
        <div className="content">
          <img src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/hsa_fsa_eligible-092a0fffe6b337920210c2f2537bf09a7a9ff167b311c549003950fc33a4fc2b.svg" />
          <span className="img-text">HSA/FSA ELIGIBLE</span>
        </div>
      </div>
    </>
  );
}
