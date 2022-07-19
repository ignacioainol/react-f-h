import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if (categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>Gif Search</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

        {
          categories.map((category) =>
          (
            <GifGrid 
                category={category} 
                key={category} />
          ))
        }


    </>
  )
}
