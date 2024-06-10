import React from "react";
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
import Spinner from "./Spinner";

export function GifGrid({ category }) {
  const { images, isLoanding } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      <div className="card-gif">
        {images.map(({ url, id, title }, index) => {
          if (isLoanding) {
           return <Spinner/>
          } else{
            return <GifItem url={url} title={title}/>
          }
        })}
      </div>
    </>
  );
}
