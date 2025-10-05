import { Link } from "react-router-dom";

interface ContentCardProps {
  id: number;
  title: string;
  image: string;
}

const ContentCard = ({ id, title, image }: ContentCardProps) => {
  return (
    <Link to={`/watch/${id}`}>
      <div className="content-card-hover rounded-md overflow-hidden cursor-pointer">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-cover"
        />
      </div>
    </Link>
  );
};

export default ContentCard;
