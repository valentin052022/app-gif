import { useState } from "react";
import '../styles/index.css'


export const AddCategory = ({onNewValue}) => {
  const [inputValue, setInputValue] = useState("");
  
  const handleInputChanged = (event) => {
    setInputValue(event.target.value);
  };

  /* Funcion que se encarga de guardar el valor del formulario
    y actualizar el estado del useState
  */
  const handleSubmit = (event)=>{
    event.preventDefault()
    if(inputValue.trim().length <= 1) return;
    /* Llamo a la propiedad que es una funcion llamada añadirCategoria, que 
    como argumento le paso el valor del input */
    onNewValue(inputValue.trim());
    setInputValue('')
  }


  return (
    <form className="form" action="" onSubmit={handleSubmit}>
      <input className="input"
        id="input"
        onChange={handleInputChanged}
        value={inputValue}
        type="text"
        placeholder="Search Gift"
      />
      <button className="btn">Search 🔎</button>
    </form>
  );
};
