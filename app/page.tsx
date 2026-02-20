import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSolution } from "./components/ProblemSolution";
import { TargetAudience } from "./components/TargetAudience";
import { Features } from "./components/Features";
import { Review } from "./components/Review";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <TargetAudience />
        <Features />
        <Review />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
