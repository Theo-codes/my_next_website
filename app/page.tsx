import { Main, Section, Container } from "@/components/craft";
import CTA from "@/components/homepage/cta";
import FeatureCenter from "@/components/homepage/feature-center";
import FeatureLeft from "@/components/homepage/feature-left";
import FeatureRight from "@/components/homepage/feature-right";
import Footer from "@/components/homepage/footer";
import Hero from "@/components/homepage/hero";

export default function Page() {
  return (
    <Main>
      <Section>
        <Container>
         <Hero />
         <FeatureLeft/>
         <FeatureRight/>
         <FeatureCenter/>
         <CTA />
         <Footer />
        </Container>
      </Section>
    </Main>
  );
}