import ContentCard from "./ContentCard";

interface Content {
  id: number;
  title: string;
  image: string;
}

interface ContentRowProps {
  title: string;
  content: Content[];
}

const ContentRow = ({ title, content }: ContentRowProps) => {
  return (
    <div className="mb-12 px-6 md:px-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {content.map((item) => (
          <ContentCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContentRow;
