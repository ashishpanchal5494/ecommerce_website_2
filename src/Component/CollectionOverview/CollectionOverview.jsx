import React from 'react'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import { connect } from 'react-redux'
import { selectCollectionsForPreview } from '../../Redux/shop/ShopSelector'




function CollectionOverview({collections}) {

  return (
    <div className='collection-overview'>
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
          ))
        }
      
    </div>
  )
}

const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state)
   })
  

export default connect(mapStateToProps) (CollectionOverview)
