import NewsItem from "./NewsItem";

function NewsGrid({ items }) {
  return (
    <>
      <div className="max-w-[1240px] h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 px-4 gap-8">
        {items.map((item, i) => (
          <NewsItem key={i} item={item} />
        ))}
      </div>
    </>
  );
}

export default NewsGrid;
