

import React from 'react'
import CollectionItem from '../../Component/CollectionItem/CollectionItem'
import "./Collection.scss"



function Collection({id, title, items}) {


  return (
    

    <div className='collection-page'>
      
     <h1 className='title'>{title}</h1>
      <div className='items'>
      {items 
            .map(item => <CollectionItem key={item.id} item={item} />)}

      </div>
    </div>
    
  )
}

export default  Collection

 





