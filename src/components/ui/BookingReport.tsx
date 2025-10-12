import React from "react";
import TabNavigation from "./TabNavigation";
import MatchInput from "./MatchInput";

const BigDataManagement = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between p-8 pt-0  mx-20 gap-0 relative mt-10 "
      style={{
        width: "1200px", // Set the width to 1440px
        height: "500.22px", // Set the height to 626.22px
        borderRadius: "40px", // Apply rounded corners with a larger radius
        borderWidth: "0.5px", // Apply the border width
        overflow: "hidden", // Prevent content from overflowing with rounded corners
      }}
    >
      {/* Gradient Border using pseudo-element */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1, // Keep the border behind the content
          borderRadius: "40px", // Apply rounded corners to the border
          background:
            "linear-gradient(180.25deg, #736540 -12.54%, #1D1D1F 46.34%)", // Gradient for the border
          padding: "1px", // Ensures the border width is applied correctly
        }}
      ></div>

      <div className="w-full  flex justify-center items-center lg:mt-0 mr-10">
        <img
          src="/images/dataManagement/DM-IMG-3.png"
          alt="Big Data Management"
          className="rounded-xl shadow-2xl"
        />
      </div>
      <div className="flex flex-col justify-center  items-start space-y-4 w-full lg:w-1/2 px-10">
        <h2
          style={{
            fontFamily: "SF Pro",
            fontWeight: 510,
            fontStyle: "Medium",
            fontSize: "40px",
            letterSpacing: "0%",
            verticalAlign: "middle",
            width: "378px",
            height: "48px",
            opacity: 1,
            color: "#FFFFFF", // White color for the text
          }}
        >
          Bookin Report
        </h2>

        <p
          style={{
            fontFamily: "SF Pro",
            fontWeight: 400,
            fontStyle: "Regular",
            fontSize: "20px",
            lineHeight: "100%",
            letterSpacing: "0%",
            verticalAlign: "middle",
            width: "516px",
            height: "24px",
            opacity: 1,
            color: "#E48242", // Orange color for the text
            marginBottom: "50px",
          }}
        >
          Unearth the most valuable data by intelligently managing your dataset
        </p>

        {/* Button for the 'I have same problem' */}
        <div className="flex items-center">
          <p
            className="font-light text-lg leading-[28px] tracking-normal text-white"
            style={{ width: "542px", height: "112px", opacity: 1 }}
          >
            Scale’s suite of dataset management, testing, model evaluation, and
            model comparison tools enable you to “label what matters.” Maximize
            the value of your labeling budget by identifying the highest value
            data to label, even without ground truth labels.
          </p>
        </div>

        <button className="w-[187px] h-[41px] bg-gray-800 text-white border border-gray-600 rounded-[12px] py-[8px] px-[16px] text-center text-[16px] leading-[26px] font-medium hover:bg-gray-700">
          Manage my booking
        </button>
      </div>
    </div>
  );
};

export default BigDataManagement;
