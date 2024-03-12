import React from 'react';
import './Lists.css';
import { Link } from 'react-router-dom';

export default function Lists({ Menu_sel, products ,handleprod}) {
  let filteredProducts = [];
  // menu_sel 값에 따라 카테고리별로 필터링된 제품들 가져오기
  switch (Menu_sel) {
    case 1:
      filteredProducts = products.filter(product => product.category === "electronics");
      break;
    case 2:
      filteredProducts = products.filter(product => product.category === "jewelery");
      break;
    case 3:
      filteredProducts = products.filter(product => product.category === "women's clothing");
      break;
    case 4:
      filteredProducts = products.filter(product => product.category === "men's clothing");
      break;
    default:
      filteredProducts = products;
      break;
  }

  console.log("menu_sel:", Menu_sel);
  console.log("filteredProducts:", filteredProducts);
  console.log("products:", products);

  const handleClick = (product) => {
    console.log('Clicked product:', product);
    handleprod(product);
  };

  return (
    <div className='item_List'>
      <p className='showing'>showing : {Menu_sel === 0 ? 'all' : filteredProducts[Menu_sel -1]?.category} / {filteredProducts.length} items</p>
      <div className='grid-container'>
        {filteredProducts.map((product, index) => (
           <div className='grid-item' key={index} onClick={() => handleClick(product)}>
            <div className="products-card">
              <Link to={`/product/${product.id}`} className='products-img'>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
            </Link>
            </div>
           <div className="products-info">
             <button>Add to Cart</button>
             <p>$ {product.price}</p>
           </div>
         </div>
       ))}
     </div>
   </div>
 );
}