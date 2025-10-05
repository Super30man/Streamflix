import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Watch = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6">
        <Link to="/">
          <Button variant="ghost" className="gap-2 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Browse
          </Button>
        </Link>
      </div>

      <div className="aspect-video bg-black max-w-7xl mx-auto">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading video player for content #{id}...</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 mt-8">
        <h1 className="text-3xl font-bold mb-4">Sample Content Title</h1>
        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
          <span>2024</span>
          <span>2h 15m</span>
          <span className="px-2 py-1 border border-muted-foreground rounded">HD</span>
        </div>
        <p className="text-foreground/90 max-w-3xl">
          This is a placeholder for the video player and content details. In a full implementation, 
          this would include a working video player with controls, episode selection for shows, 
          and detailed information about the content.
        </p>
      </div>
    </div>
  );
};

export default Watch;
