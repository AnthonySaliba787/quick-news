import React from "react";
import Default from "../assets/thumbnail.png";

function NewsItem({ item }) {
  const websiteUrl = item.url;
  const website = websiteUrl.split("https://").pop().split("/")[0];

  const date = item.publishedAt;
  const formatDate = date.replace("T", " ");
  const formatTime = formatDate.replace("Z", "");

  const imageSrc = item.urlToImage ? item.urlToImage : Default;

  if (websiteUrl !== "https://removed.com") {
    return (
      <>
        <a
          href={websiteUrl}
          target="_blank"
          className="max-w-[400px] flex flex-col overflow-hidden rounded-md shadow-lg pb-2 hover:scale-[1.02] hover:shadow-xl duration-300"
        >
          <div className="w-full h-56 overflow-hidden">
            <img src={imageSrc} alt={item.title} />
          </div>
          <div className="flex flex-col justify-between items-start gap-2 flex-grow px-2">
            <div className="flex justify-start items-center gap-2">
              <img
                src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE%2CSIZE%2CURL&url=http://${website}&size=16`}
                alt={item.source.id}
              />
              <span>{item.source.name}</span>
            </div>
            <div className="text-xl font-bold">
              <h2>{item.title}</h2>
            </div>
            <p className="text-base">{item.description}</p>
            <div className="text-base">
              <small>
                <b>Published At: </b>
                {formatTime}
              </small>
            </div>
          </div>
        </a>
      </>
    );
  } else {
    return null;
  }
}

export default NewsItem;
