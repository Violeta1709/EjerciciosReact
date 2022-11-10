import { useState } from "react";
import { AddCategoria, GifGrid } from "./componentes/index";

export const GifExpertApp = () => {
   
    const [categorias, setCategorias] = useState(['One Punch']);
    const onAddCategoria = (newCategoria) =>{

        if(categorias.includes(newCategoria)) return;
        
       //console.log(newCategoria);
        //categorias.push([newCategoria]);

      setCategorias([newCategoria, ...categorias]);
    }
   
   return (
<>
{/*titulo*/}
<h1>GifExpertApp</h1>

{/*input*/}

<AddCategoria 
onNewCategoria = { (value) => onAddCategoria(value)}
/>

{/*listado de gif*/}



    {
    categorias.map( ( categoria )=> (
    
        <GifGrid
        key={categoria}
        categoria={categoria}/>
    )   )     
    }
    


</>

    )
}