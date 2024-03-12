import React, { useState} from'react';
import Menu from '../../components/Menu';
import Lists from '../../components/Lists';

export default function MainPage({products ,setSel_product}) {
    const [Menu_sel,setMenu_sel] = useState('');

  
    const handleMenu = (sel_Menu) =>  {
      setMenu_sel(sel_Menu);
    }

    const handleprod = (sel_product) =>  {
      setSel_product(sel_product);
      console.log('Selected product:', sel_product);
    }
  
    return (
      <div className="App">
        <Menu handleMenu = {handleMenu}  />
        <Lists Menu_sel={Menu_sel} products={products} handleprod={handleprod} />
  
      </div>
    );
}
