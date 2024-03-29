import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GifExpertApp = ({ defaultCategories = [] }) => {


    const [categories, setCategories] = useState(defaultCategories);


    return (

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>



            <ol>
                {categories.map((categorie) => <GifGrid key={categorie} category={categorie} />)}
            </ol>

        </>

    );

};



export default GifExpertApp;