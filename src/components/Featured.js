'use strict';

export default function Featured(props) {
    const { products } = props;

    // get all featured product and filter by the most cheapest and expensive 
    let featuredProduct = products
        .filter(product=> product.featured)  // get only the featured
        // .sort(cheapestProduct => -cheapestProduct.price) // cheapest sort it negaitvely
        .sort(mostExpensive => mostExpensive.price)[0]; // most expensive


    console.table(featuredProduct.img)

    return (
        <div className="featured">

            {/*<h1>FEATURED</h1>*/}
            
            <div className="featured_product">

               <h3>{featuredProduct.name}</h3>
               <img src={featuredProduct.image.src} alt={featuredProduct.image.alt}/>

            </div>
        
        </div>
    )
}