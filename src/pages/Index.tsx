import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentRow from "@/components/ContentRow";
import { trendingNow, popularMovies, newReleases } from "@/data/mockContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <div className="pb-12">
        <ContentRow title="Trending Now" content={trendingNow} />
        <ContentRow title="Popular Movies" content={popularMovies} />
        <ContentRow title="New Releases" content={newReleases} />
      </div>
    </div>
  );
};

export default Index;
