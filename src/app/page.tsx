import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import ConsultingServices from "@/components/ConsultingServices";
import SelectedWorks from "@/components/SelectedWorks";
import ImpactAbout from "@/components/ImpactAbout";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div className="relative w-full">
            <Navigation />
            <Hero />
            <Philosophy />
            <Services />
            <ConsultingServices />
            <SelectedWorks />
            <ImpactAbout />
            <Contact />
        </div>
    );
}
