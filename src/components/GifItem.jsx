import React from "react";
import '../styles/index.css'
export default function GifItem({ url, title }) {
  return (
    <div className="cont-img">
      <div className="img">
        <img className="imagen" src={url} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
}
