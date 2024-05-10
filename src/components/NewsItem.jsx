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
        <a href={websiteUrl} className="">
          <div className="">
            <img src={imageSrc} alt={item.title} />
          </div>
          <div className="">
            <div className="">
              <img
                src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE%2CSIZE%2CURL&url=http://${website}&size=16`}
                alt={item.source.id}
              />
              <span>{item.source.name}</span>
            </div>
            <div className="">
              <h2>{item.title}</h2>
            </div>
            <p className="">{item.description}</p>
            <div className="">
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
