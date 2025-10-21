"use client";
import React from "react";

type Feature = {
  module: string;
  feature: string;
  description: string;
  readyInMVP: boolean;
  readyToShip: number;
  exactMatchEffort: {
    customization: number;
    effort: string;
  };
};

const features: Feature[] = [
  {
    module: "Module",
    feature: "Real-time Inventory Tracking",
    description: "Monitors stock levels in real-time, alerts when low.",
    readyInMVP: true,
    readyToShip: 100,
    exactMatchEffort: { customization: 0, effort: "No effort" },
  },
  {
    module: "Module",
    feature: "Batch & Expiry Tracking",
    description: "Tracks expiry dates and batches for compliance.",
    readyInMVP: true,
    readyToShip: 100,
    exactMatchEffort: { customization: 0, effort: "No effort" },
  },
  {
    module: "Module",
    feature: "ERP/SAP Integration",
    description: "Syncs with ERP for automated data flow.",
    readyInMVP: false,
    readyToShip: 0,
    exactMatchEffort: { customization: 10, effort: "2 weeks effort" },
  },
  {
    module: "Order Tracking",
    feature: "Sales Rep App",
    description: "Mobile app for agents to place and update orders.",
    readyInMVP: true,
    readyToShip: 90,
    exactMatchEffort: { customization: 10, effort: "No effort" },
  },
  {
    module: "Order Tracking",
    feature: "Automated Order Approval",
    description: "Auto-approves orders based on business rules.",
    readyInMVP: true,
    readyToShip: 60,
    exactMatchEffort: { customization: 40, effort: "2 weeks effort" },
  },
  {
    module: "Agent mgmt.",
    feature: "Agent Location Tracking",
    description: "Live GPS tracking of field agents during order runs.",
    readyInMVP: true,
    readyToShip: 100,
    exactMatchEffort: { customization: 0, effort: "No effort" },
  },
  {
    module: "Agent mgmt.",
    feature: "Performance Dashboard",
    description: "View KPIs, order completion rate, agent stats.",
    readyInMVP: true,
    readyToShip: 85,
    exactMatchEffort: { customization: 15, effort: "No effort" },
  },
  {
    module: "Logistics",
    feature: "Route Optimization",
    description: "Auto-suggests optimal delivery routes.",
    readyInMVP: false,
    readyToShip: 0,
    exactMatchEffort: { customization: 100, effort: "2 weeks effort" },
  },
];

const FeatureMatrixMap = () => {
  // Group features by module name
  const grouped = features.reduce((acc, curr) => {
    if (!acc[curr.module]) acc[curr.module] = [];
    acc[curr.module].push(curr);
    return acc;
  }, {} as Record<string, Feature[]>);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-10 bg-[#101010]"
      style={{ fontFamily: "SF Pro, ui-sans-serif, system-ui " }}
    >
      <div
        className="flex flex-col w-[1440px] rounded-[40px] backdrop-blur-[16.7px]
        bg-[linear-gradient(346deg,rgba(16,16,16,0.4)_7.52%,rgba(43,17,0,0.4)_92.74%)]
        border border-[#2B1100]/40 p-10 text-[#FFFFFF]"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="text-[72px] leading-[80px] font-[400] tracking-[-1.44px]
             text-white text-center font-[sf-pro]"
            style={{ fontFamily: "SF Pro, ui-sans-serif, system-ui" }}
          >
            Feature Matrix Map
          </h2>
          <p
            className="self-stretch text-[#D1D5DB] text-center font-[sf-pro] text-[20px] font-[400] leading-normal 
             mt-4 w-[80%] mx-auto"
            style={{ fontFamily: "SF Pro, ui-sans-serif, system-ui" }}
          >
            This map highlights which modules and features are already
            available, where partial customization is needed, and the estimated
            effort to get you to 100% fit.
          </p>
        </div>

        {/* Table */}
        <div className="flex flex-col items-start gap-[10px] p-[48px] rounded-[48px] bg-[#000] overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-[#888D93] border-b border-[#2B1100]/40 text-left">
                <th className="pb-3 font-normal text-[16px] text-[#888D93] font-[SF Pro] w-[150px]">
                  Module
                </th>

                <th className="pb-3 font-normal text-[16px] text-[#888D93] font-[SF Pro] w-[160px]">
                  Features
                </th>
                <th className="pb-3 font-normal text-[16px] text-[#888D93] font-[SF Pro] w-[320px]">
                  Description
                </th>
                <th className="pb-3 font-normal text-[16px] text-[#888D93] font-[SF Pro] w-[160px]">
                  Ready in MVP
                </th>
                <th className="pb-3 text-center font-medium bg-[#1E1E1E] text-[#4FABFF] rounded-t-[16px] w-[150px] h-[100px]">
                  Ready to Ship
                </th>

                <th className="pb-3 text-left  pl-5 font-medium  text-[#4FABFF] rounded-t-[16px] w-[200px] h-[100px]">
                  <div
                    className="text-[#FFFFFF] font-[sf-pro] text-[16px] font-[700] leading-[14px]"
                    style={{ fontFamily: "SF Pro, ui-sans-serif, system-ui" }}
                  >
                    Exact Match Effort
                    <div
                      className="mt-2 text-[#888D93] font-[sf-pro] text-[12px] font-[400] leading-[18px]  "
                      style={{
                        fontFamily: "SF Pro, ui-sans-serif, system-ui ",
                      }}
                    >
                      This is the effort if you were to require a 100% match
                      product for your requirements
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(grouped).map(
                ([moduleName, moduleFeatures], groupIdx, arr) => (
                  <React.Fragment key={moduleName}>
                    {moduleFeatures.map((f, idx) => (
                      <tr
                        key={f.feature}
                        className="hover:bg-[#2B1100]/10 transition "
                      >
                        {/* Show module name only once */}
                        {idx === 0 && (
                          <td
                            className="py-8 align-top text-[#fffff] font-normal  text-[16px] font-[SF Pro]"
                            rowSpan={moduleFeatures.length}
                          >
                            {moduleName}
                          </td>
                        )}

                        <td className="flex flex-col gap-[10px] w-[160px] h-[88px] py-8 font-semibold text-white">
                          {f.feature}
                        </td>
                        <td className="py-4 text-[#888D93]">{f.description}</td>
                        <td className="py-4 text-center">
                          {f.readyInMVP ? (
                            <div className="flex justify-center items-center w-[40px] h-[40px] p-[10px] rounded-[12px] bg-[rgba(95,192,100,0.20)] mx-auto">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#5FC064"
                                strokeWidth="2"
                                className="w-5 h-5"
                              >
                                <path d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          ) : (
                            <div className="flex justify-center items-center w-[40px] h-[40px] p-[10px] rounded-[12px] bg-[rgba(205,62,71,0.20)] mx-auto">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#CD3E47"
                                strokeWidth="2"
                                className="w-5 h-5"
                              >
                                <path d="M6 6l12 12M6 18L18 6" />
                              </svg>
                            </div>
                          )}
                        </td>

                        <td
                          className={`py-4 text-center bg-[#1E1E1E] ${
                            groupIdx === arr.length - 1 &&
                            idx === moduleFeatures.length - 1
                              ? "rounded-b-[16px]"
                              : ""
                          }`}
                        >
                          <div className="flex justify-center items-center gap-[10px] flex-[1_0_0] self-stretch px-[24px] py-[10px] text-[#4FABFF] font-semibold rounded-[8px] mx-auto">
                            {f.readyToShip}%
                          </div>
                        </td>

                        <td className="py-4 text-center text-[#FFFFFF]">
                          {f.exactMatchEffort.customization}%
                          <p className="mt-1 text-[#888D93] text-sm">
                            {f.exactMatchEffort.effort}
                          </p>
                        </td>
                      </tr>
                    ))}

                    {/* Divider line AFTER each group, except the last one */}
                    {groupIdx < arr.length - 1 && (
                      <tr>
                        <td colSpan={7}>
                          <div className="border-b border-[#888D93]/40 w-full"></div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeatureMatrixMap;
