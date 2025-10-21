"use client";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navabar";
import HeroSection from "@/components/ui/HeroSection";
import WhyUsSection from "@/components/ui/WhyUsSection";
import MarketingCampaignCard from "@/components/ui/AIDesignCard";
import AnalyticsCard from "@/components/ui/AIDesignCard";
import TownHallCard from "@/components/ui/TownHallCard";
import MadeWithAI from "@/components/ui/MadeWithAI";
import DataManagementAgentCard from "@/components/ui/DataManagementCard";
import DataManagementSection from "@/components/ui/DataManagementCard";
import BigDataManagement from "@/components/ui/BigDataManagement";
import TabNavigation from "@/components/ui/TabNavigation";
import BookingReport from "@/components/ui/BookingReport";
import SolutionsDesignedForImpact from "@/components/ui/SolutionsDesignedForImpact";
import AIDesignCard from "@/components/ui/DesignCard";
import ContactSection from "@/components/ui/ContactSection";
import ProvenResults from "@/components/ui/ProvenResults";
import ChemcoCard from "@/components/ui/ChemcoCard";
import Footer from "@/components/ui/footer/Footer";
import InnovatorComponent from "@/components/ui/InnovatorComponent";
import BeyondCodeSection from "@/components/ui/BeyondCodeSection";

export default function HomePage() {
  return (
    <main>
      <>
        <Navbar />
        <HeroSection />
        <WhyUsSection />
        {/* <MadeWithAI /> */}
        <DataManagementAgentCard />
        <BigDataManagement />
        <BookingReport />
        <SolutionsDesignedForImpact />
        <div className="ml-30 mt-20">
          <ContactSection />
        </div>
        {/* <DataManagementAgentCard /> */}
        {/* <AIDesignCard /> */}
        <ProvenResults />
        <InnovatorComponent />
        <BeyondCodeSection />
        <Footer />
      </>
    </main>
  );
}
