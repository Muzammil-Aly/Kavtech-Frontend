import HeroSection from "@/components/ui/HeroSection";
import WhyUsSection from "@/components/ui/WhyUsSection";
import DataManagementAgentCard from "@/components/ui/DataManagementCard";
import BigDataManagement from "@/components/ui/BigDataManagement";
import BookingReport from "@/components/ui/BookingReport";
import SolutionsDesignedForImpact from "@/components/ui/SolutionsDesignedForImpact";
import ContactSection from "@/components/ui/ContactSection";
import ProvenResults from "@/components/ui/ProvenResults";
import InnovatorComponent from "@/components/ui/InnovatorComponent";
import BeyondCodeSection from "@/components/ui/BeyondCodeSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyUsSection />
      <DataManagementAgentCard />
      <BigDataManagement />
      <BookingReport />
      <SolutionsDesignedForImpact />
      <div className="mt-20 mx-30">
        <ContactSection />
      </div>
      <ProvenResults />
      <InnovatorComponent />
      <BeyondCodeSection />
    </main>
  );
}
