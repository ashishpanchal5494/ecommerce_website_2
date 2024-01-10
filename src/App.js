import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Homepage from './Homepage/HomepageComponent/Homepage';
import ShopPage from './Homepage/Shop/ShopPage';
import Header from './Component/Header/Header';
import SigninAndSignup from './Homepage/SigninAndSignup/SigninAndSignup';
import { addCollectionAndDocuments, auth, createUserProfileDocument } from './Firebase/Firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/user/UserAction';
import { Navigate } from 'react-router';

import { selectCurrentUser } from './Redux/user/userSelector';
import CheckOut from './Homepage/CheckOut/CheckOut';
import { selectCollectionsForPreview } from './Redux/shop/ShopSelector';
import { GlobalStyle } from '../src/GlobalStyle';
import Contact from './Contact/Contact';
import ItemView from './ItemView/ItemView';







class App extends React.Component {

  

  unSubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser, collectionsArray} = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot => {
              setCurrentUser( {
            id: snapshot.id,
            ...snapshot.data()
          })
        })
        
    }

    setCurrentUser( userAuth)
    addCollectionAndDocuments('collections', collectionsArray)
  })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
  
    return (
      <div>
        <GlobalStyle/>
        <Header  />
        
        
       <Routes>
        <Route path="/" Component={Homepage} />
        <Route path='/shop/*' Component={ShopPage}/>
        <Route path='/product' Component={ItemView} />
        <Route path='contact' Component={Contact}/>
        <Route path='/checkout' Component={CheckOut}/>
        <Route path={`shop/item/:id`} Component={ItemView}/>
        <Route path='/signin' Component = { () => this.props.currentUser ? (<Navigate to='/'/>) : (<SigninAndSignup/>) }/>
       </Routes>
        
      </div>
    );
  }
  }

  const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    collectionsArray : selectCollectionsForPreview(state)
  })

  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
  })

export default connect(mapStateToProps, mapDispatchToProps ) (App);
