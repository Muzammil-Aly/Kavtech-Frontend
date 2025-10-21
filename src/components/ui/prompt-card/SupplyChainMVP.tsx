import React from "react";
import FeatureMatrixMap from "./FeatureMatrixMap";
import SolutionsDesignedForImpact from "../SolutionsDesignedForImpact";
import ProvenResults from "../ProvenResults";
import ContactSection from "../ContactSection";
import SalesDistribution from "./SalesDistribution";

const SupplyChainMVP = () => {
  const buttonLabels = [
    "Audit to ROI in 30 Days",
    "Automate 80% of Workflows",
    "Custom AI Modules",
    "Secure. Embedded, Always On",
  ];

  return (
    <>
      <div
        className="relative py-12 flex items-center gap-10 pl-20"
        style={{
          borderRadius: "40px",
          background:
            "linear-gradient(346deg, rgba(16,16,16,0.4) 7.52%, rgba(43,17,0,0.4) 92.74%)",
          backdropFilter: "blur(16.7px)",
        }}
      >
        {/* Heading */}

        <div className="flex flex-col flex-1 self-stretch ">
          {/* H2 */}
          <div className="flex items-center gap-2">
            {/* Heading */}
            {/* SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999544 9.14164 -0.0999544 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
                fill="#E48242"
              />
            </svg>
            <h3
              className="flex-1"
              style={{
                fontFamily: "SF Pro, ui-sans-serif, system-ui",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "24px",
                letterSpacing: "-0.24px",
                color: "#E48242",
              }}
            >
              Your MVP match
            </h3>
          </div>

          <h2
            className="mb-6"
            style={{
              fontFamily: "SF Pro, ui-sans-serif, system-ui",
              fontWeight: 700,
              fontSize: "64px",
              lineHeight: "88px",
              letterSpacing: "-1.76px",
              color: "#F1F1EF",
            }}
          >
            Jump-Start Your Project With Our{" "}
            <span style={{ color: "#E48242" }}>Supply Chain MVP</span>
          </h2>

          {/* Paragraph */}
          <p
            className="mb-8"
            style={{
              fontFamily: "SF Pro, ui-sans-serif, system-ui",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "-0.24px",
              color: "#ADADAD",
              marginLeft: "20px",
            }}
          >
            Our modular MVP is built for pharma suppliers who need rapid
            digitization. It covers the essentials, so you can go live quickly,
            and is fully customizable to match your unique process.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {buttonLabels.map((label, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{
                  backgroundColor: "#212121",
                  width: "240px",
                  height: "32px",
                  fontFamily: "SF Pro, ui-sans-serif, system-ui",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "100%",
                  textAlign: "center",
                  color: "#FFF",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#D9D9D9",
                    flexShrink: 0,
                  }}
                ></div>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/SupplyChain/supplychain.png"
            alt="Supply Chain"
            style={{
              width: "782px",
              height: "589px",
              borderRadius: "16px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <FeatureMatrixMap />
      <SolutionsDesignedForImpact />
      <ProvenResults />
      <SalesDistribution />
      <div className="ml-20 mt-20">
        <ContactSection />
      </div>
    </>
  );
};

export default SupplyChainMVP;
