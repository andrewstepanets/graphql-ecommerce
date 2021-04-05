import React from 'react' 

import { gql, useQuery } from '@apollo/client';

import Header from './header.component'


const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`

function HeaderContainer() {
  const { data } = useQuery(GET_CART_HIDDEN);

  console.log(data);

  return(
    <Header hidden={data.cartHidden}/>
  )
}

export default HeaderContainer;