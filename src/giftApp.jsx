import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  /* tengo la funcion q como argumento ha recibido el valor del input en el otr
  componente y aca finalmente lo añado a las categorias. */
  const añadirCatategoria = (newValue) => {
    const cleanValue = newValue.toUpperCase();
    if (categories.find((item) => item === cleanValue)) {
      return;
    }
    setCategories([...categories, cleanValue]);
  };

  /*setCategory={setCategories}*/
  return (
    <>
      <h1>Gif App de Valentín Peralta</h1>
      <AddCategory onNewValue={añadirCatategoria} />
      {categories.map((category) => (
        <GifGrid key={category} category={category}/>
      ))}
      
    </>
  );
};
