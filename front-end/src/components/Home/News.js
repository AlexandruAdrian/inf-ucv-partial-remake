import React from 'react';
import "../../styles/News.css";
import NewsItem from "./News-Item";

const News = () => {
  /* Temporary until back-end is implemented */
  const newsItems = [{
    title: "Orarul pentru semestrul 1 al anului universitar 2019 - 2020",
    datetime: "29/09/2019 09:45:38"
  }, {
    title: "Examen de disertatie la master-informatica MMIA si TAPI",
    datetime: "12/09/2019 11:49:50"
  }, {
    title: "Summer School (August 31st - September 13th 2019)",
    datetime: "23/08/2019 17:04:13"
  },{
    title: "ADMITERE 2019 - Rezultate finale",
    datetime: "27/07/2019 15:40:41"
  }, {
    title: "ADMITERE 2019 - Rezultate partiale",
    datetime: "23/07/2019 16:34:36"
  }];

  return (
    <aside className="news">
      <h4>Utimele Noutati</h4>
      <ul>
        {newsItems.map((item,index) => <NewsItem key={index} item={item}/>)}
      </ul>
      <a href="#">Mai multe</a>
    </aside>
  );
}

export default News;