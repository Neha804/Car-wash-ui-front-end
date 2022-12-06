import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";
import { Navbar2 } from "../../components/Navbar2";

function Content(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <center><Navbar2/></center>
      <div className="all__news row" >
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default Content;