import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";

import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

import { fetchCollectionStart } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => <CollectionsOverviewContainer {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionPageContainer {...props} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(
  undefined,
  mapDispatchToProps
)(ShopPage);
