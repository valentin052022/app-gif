import { useState,useEffect } from "react";
import { getGif } from "../helpers/getGifs";

export default function useFetchGifs(category) {

  const [images, setimages] = useState([""]);
const [isLoanding, setIsLoanding] = useState(true)
  const obtnerImagenes = async () => {
    const newImages = await getGif(category);
    setimages(newImages);
    setIsLoanding(false)
  };

  useEffect(() => {
    obtnerImagenes();
  }, []);

  return {
    images,
    isLoanding
  };
}
