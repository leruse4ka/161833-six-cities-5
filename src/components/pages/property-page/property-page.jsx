import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchOffer, fetchOffersNearbyList, fetchComments} from "../../../store/api-actions";
import {setFavorite} from "../../../store/api-actions";
import PropertyPageContent from "./property-page-content";
import {getSortComments} from "../../../store/selectors";

class PropertyPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {getOffer, id} = this.props;
    getOffer(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const {getOffer, id} = this.props;
      getOffer(id);
    }
  }

  render() {
    const {isLoading} = this.props;
    const Loading = () => <div>Loading...</div>;

    return !isLoading ? <Loading />
      : <PropertyPageContent
        {...this.props}
      />;
  }
}

PropertyPage.propTypes = {
  getOffer: PropTypes.func.isRequired,
  id: PropTypes.number,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  offer: state.DATA.activeOffer,
  activeId: state.STATUS.activeId,
  authorizationStatus: state.USER.authorizationStatus,
  offersNearby: state.DATA.offersNearby,
  comments: getSortComments(state),
  id: Number(ownProps.match.params.id),
  isLoading: state.DATA.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getOffer(id) {
    dispatch(fetchOffersNearbyList(id));
    dispatch(fetchComments(id));
    dispatch(fetchOffer(id));
  },
  onFavoriteClick(id, status, offer) {
    dispatch(setFavorite(id, status, offer));
  },
});

export {PropertyPage};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyPage);
