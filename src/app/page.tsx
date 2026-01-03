import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Blog } from "@/components/Blog";
import { Activities } from "@/components/Activities";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Blog />
      <Activities />
      <Footer />
    </div>
  );
}
