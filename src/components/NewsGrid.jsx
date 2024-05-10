import NewsItem from "./NewsItem";

function NewsGrid({ items }) {
  return (
    <>
      <div className="">
        {items.map((item, i) => (
          <NewsItem key={i} item={item} />
        ))}
      </div>
    </>
  );
}

export default NewsGrid;
