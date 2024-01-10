import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CollectionOverview from '../../Component/CollectionOverview/CollectionOverview';
import Collection from '../Collection/Collection';
import SHOP_DATA from './ShopPageData';

function ShopPage() {
  const location = useLocation();
  return (
    <div className='shop-page'>
      <Routes location={location}>
        <Route path='/' element={<CollectionOverview />} />
        {SHOP_DATA.map(collection => (
          <Route
            key={collection.id}
            path={`/${collection.routeName}`}
            element={<Collection {...collection} />
          

          }
          />
        ))}

        
       
      </Routes>
    </div>
  );
}

export default ShopPage;