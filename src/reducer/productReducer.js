const initialState = {

    data: [],
    cart: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'GET_PRODUCT':
    return { ...state, data: payload }

  case 'ADD_TO_CART': 

  let d = [...state.cart];

  if(d.length == 0)
  {

    d.push({item:payload, count : 1});
  }
  else
  {
      let index = d.findIndex((v)=> {
        
        return v.item.id == payload.id;
      })

      if(index >=0)
      {

        d = d.map((v)=> {

          if(v.item.id == payload.id)
          {
            return { item: payload, count : v.count+1}
          }
          else
          {
            return v;
          }

        })

      }
      else
      {

        d.push({item:payload, count : 1});

      }
     
  }


  return   { ...state, cart: d }

  default:
    return state
  }
}