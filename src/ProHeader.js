import React from 'react'
import { useSelector } from 'react-redux'


export default function ProHeader() {

   const prod = useSelector(y=>y.product);

   console.log(prod);
  return (
    <nav class="navbar navbar-expand-sm bg-light">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">{prod.cart.length}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link 2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link 3</a>
      </li>
    </ul>
  </div>
</nav>
  )
}
