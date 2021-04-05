import React from 'react'
import { gql, useQuery } from '@apollo/client';

import CollectionPage from './collection.component'

import Spinner from '../../components/spinner/spinner.component'


const GET_COLLECTIONS_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

function CollectionPageContainer({ match }) {

   const { loading, error, data } = useQuery(GET_COLLECTIONS_BY_TITLE, {
     variables: { title: match.params.collectionId}
   });

   if(loading) return <Spinner />

  return(
    <CollectionPage collection={data.getCollectionsByTitle}/>
  )
}

export default CollectionPageContainer;