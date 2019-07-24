import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverView from "../../components/collections-overview/collections-overview.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverView} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
