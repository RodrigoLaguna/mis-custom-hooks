import { useState } from "react"

export const useForm = ( initialState = {} ) => {

  const [values, setValues] = useState(initialState);


  const reset = ( ) => {
    setValues( initialState );
  };

  const handleInputChange = ({ target }) => {
    setValues( {
      // Defino las propiedades
      ...values,
      // Reescribo las propiedades con los nuevo valores
      [ target.name ]: target.value
    } );
  }

  return [values,handleInputChange,reset];
}



