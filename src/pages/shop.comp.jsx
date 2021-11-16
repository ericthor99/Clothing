import React                            from 'react';
import { Route }                        from 'react-router-dom';

import CollectionsOverview              from '../Components/collections-overview/collections-overview.comp';
import CollectionPage                   from  './collection/collection.comp';


const ShopPage = ({ match }) => (
 
<div className='shop-page'>
    <Route  exact   path = {`${match.path}`}                component = {CollectionsOverview}/>
    <Route          path = {`${match.path}/:collectionId`}  component = {CollectionPage}/>
 </div>

);

export default ShopPage;

//! -----------------------------------------------------------------------------

// import { selectCollections }            from '../redux/shop/shop.selectors';
// import { connect }                      from 'react-redux';
// import { createStructuredSelector }     from 'reselect';

// import SHOP_DATA from './../shop.data';

// import                              './shop.styles.scss';



// const ShopPage = ({ collections }) => (
//     <div className='shop-page'>
//     {
//         collections.map(( {id, ...otherCollectionProps }) => (
//             <CollectionPreview key = { id  } { ...otherCollectionProps }/>
//         ))
//     }
//  </div>

// );

// const mapStateToProps = createStructuredSelector ({
//     collections: selectCollections
// });

// export default connect ( mapStateToProps ) ( ShopPage);



// class ShopPage extends React.Component {

//     constructor(props) {
//         super(props);

//     this.state = {
//         collections: SHOP_DATA
        
//     };
// }
// render() {
//     const { collections } = this.state;

//     return (<div className='shop-page'>
//         {
//             collections.map(( {id, ...otherProps }) => (
//                 <CollectionPreview key={id} {...otherProps}/>
//             ))
//         }
//      </div>);
// }

// };

