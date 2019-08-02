import React from 'react';
import style from './recipe.module.css'

const Recipe =({title, calories, image,ingredients,label})=> {
    
    
    return (
        
        <div className={style.recipe} id="data-output">
      
       
        <h1>{title}</h1>
       
        <ol>
        {ingredients.map(ingredient=>(
          <li key={ingredient.text}>{ingredient.text}</li>
        ))}
        </ol>
       <p>Label : {label}</p>
       <p>Calories: {calories}</p>
       
       <img className={style.image} src={image} alt=''/>

     </div>
    
);

}

export default Recipe;