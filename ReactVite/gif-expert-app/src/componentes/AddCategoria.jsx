import { useState } from "react";

export const AddCategoria = ({onNewCategoria}) =>{
   
const [ inputValue, setInputValue ] = useState( '' );
   
   const onInputChange = ({target}) => {
    setInputValue(target.value);
   }

const onSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1) return;

    //setCategorias( categorias => [ inputValue, ...categorias ]);
    onNewCategoria(inputValue.trim());
    setInputValue('');
}

   return (
    <form onSubmit={onSubmit }>
          <input 
        type="text" 
        placeholder="buscar gifs"
        value={inputValue}
        onChange=  { onInputChange }
        />
    </form>
      
    )
}