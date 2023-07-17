import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, first } from './action/productAction';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from '@mui/material/Stack';



export default function Product() {
    const prod = useSelector(y=>y.product);

    console.log(prod);

   const produ = useSelector(y=>y.product);

   const dis = useDispatch();

    useEffect(()=> {

        fetch("https://fakestoreapi.com/products").then(y=>y.json())
        .then(y=> {

            dis(first(y))

        })


    },[])

    const handleAddToCart = (value)=> {


      dis(addToCart(value));
    }

    console.log(produ);
  return (

    <div className='row'>
         <Stack direction="row" spacing={10}>
        <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon/>{prod.cart.length}
      </IconButton>
      </Stack>
    

      {
        produ.data.map((value)=>{

          return ( 
            <div className='col-4'>
            <div className="card" style={{width:'400px'}}>
            <img className="card-img-top" src={value.image} 
            alt="Card image" style={{width:'100%', height:'200px'}}/>
            <div className="card-body">
              <h4 className="card-title">{value.title}</h4>
              <h4 className="card-title">{value.price}</h4>
              <p className="card-text">{value.description.slice(0,50)}</p>
              <div className='card-footer d-grid'>
              <a href="#" className="btn btn-primary"  onClick={()=> {handleAddToCart(value) } }>Add To Cart</a>
            </div>
            </div>
          </div>
          </div>
          )
        })
      }
      


    </div>
  )
}