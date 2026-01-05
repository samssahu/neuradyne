import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Blog } from "@/components/Blog";
import { Activities } from "@/components/Activities";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Blog />
      <Activities />
    </div>
  );
}
