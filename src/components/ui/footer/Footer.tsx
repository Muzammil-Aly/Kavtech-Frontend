import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-40">
      <div className="absolute left-[400px] top-[-150px] w-[499px] h-[468px]">
        <div
          className="w-full h-full bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/images/Logo/logo.png')",
            backgroundSize: "auto 400px",
            backgroundPosition: "100px",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#08080880] " />
      </div>

      {/* Footer content area with overlay */}

      <div className="relative bg-[#08080880] backdrop-blur-2xl text-gray-400 py-16 px-10 md:px-24 border-t border-b border-[#3A404B]">
        <div className="max-w-7xl mx-auto">
          {/* ===== Top Grid ===== */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-20">
            {/* Platform */}
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>AI Agent Platform</li>
                <li>AI Agents</li>
                <li>Agentic Workflows</li>
                <li>AgentOS</li>
                <li>Database, Memory & Rag</li>
                <li>Integrations</li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li>Data management</li>
                <li>Big data</li>
                <li>Booking reporting</li>
                <li>Healthcare</li>
                <li>Property Management</li>
                <li>Custom AI Solutions</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Case studies</li>
                <li>Industry verticals</li>
                <li>Partner program</li>
                <li>AI feed</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Career</li>
                <li>Contact</li>
                <li>Culture</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>Privacy Policy</li>
                <li>Security</li>
                <li>Data Protection</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div
            className="my-10"
            style={{
              borderWidth: "1px 0px 1px 0px",
              borderStyle: "solid",
              borderColor: "#3A404B",
            }}
          />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>© Kavtech . All rights reserved 2025</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                Term of Use
              </a>
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </div>
          </div>

          <div
            className="my-10"
            style={{
              borderWidth: "1px 0px 1px 0px",
              borderStyle: "solid",
              borderColor: "#3A404B",
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
