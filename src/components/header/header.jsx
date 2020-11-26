import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {checkAuth} from "../../store/api-actions";
import HeaderContent from "./header-content";

class Header extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getLoginData();
  }

  render() {
    const {isLoading} = this.props;
    const Loading = () => <div>Loading...</div>;

    return !isLoading ? <Loading />
      : <HeaderContent {...this.props} />;
  }
}

Header.propTypes = {
  getLoginData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({USER}) => ({
  isLoading: USER.isLoading,
  authorizationStatus: USER.authorizationStatus,
  loginData: USER.loginData,
});

const mapDispatchToProps = (dispatch) => ({
  getLoginData() {
    dispatch(checkAuth());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
