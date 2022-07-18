import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {

    if (categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;

    // if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de Gif */}
      <ol>
        {
          categories.map((category) =>
          (
            <GifGrid category={category} key={category} />
          ))
        }
      </ol>


    </>
  )
}
