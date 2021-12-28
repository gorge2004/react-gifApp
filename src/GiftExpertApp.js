import React, { useState } from 'react'
import { AddCategories } from './components/AddCategories';
import GiftGrid from './components/GiftGrid';

const GiftExpertApp = () => {
    const [categories, setCategories] = useState([ 'One punch']);
    console.log(categories);
    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategories setCategories={setCategories}  />
            <hr />
            <ol>
                {
                    categories.map((category, index) => <GiftGrid key={category+index} category={category} />  )
                }
            </ol>
        </>
    )
}



export default GiftExpertApp;
