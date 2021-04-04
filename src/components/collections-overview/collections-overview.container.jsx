import React from 'react' 
import { gql, useQuery } from '@apollo/client';

import CollectionsOverview from './collections-overview.component'
import Spinner from '../spinner/spinner.component'

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`

 function  CollectionsOverviewContainer(){

    const { loading, error, data } = useQuery(GET_COLLECTIONS);

            console.log(loading);
            console.log(error);
            console.log(data);

    if(loading) return <Spinner />

   return (
      <CollectionsOverview collections={data.collections}/>
    )
 } 

export default CollectionsOverviewContainer