import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSolution } from "./components/ProblemSolution";
import { TargetAudience } from "./components/TargetAudience";
import { Features } from "./components/Features";
import { Review } from "./components/Review";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <ProblemSolution />
        <TargetAudience />
        <Features />
        <Review />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
      <StickyCTA />
    </>
  );
}
