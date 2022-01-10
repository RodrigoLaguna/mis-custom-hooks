import { useState } from "react"

/**============================================
 **               FORM HOOK
    Este custom hook toma todos los valores
    captados por un formulario.

  @return [
      values: Valores
      handleInputChange: Funcion para cambiar el estado
      reset: Funcion para limpiar formulario
    ]
 *=============================================**/


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



