import React, {PureComponent} from "react";

const withSorts = (Component) => {
  class WithSorts extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
      };

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
      evt.preventDefault();

      this.setState({
        isOpen: !this.state.isOpen,
      });
    }

    render() {
      const {isOpen} = this.state;

      return (
        <Component
          {...this.props}
          isOpen={isOpen}
          onMenuClick={this.handleClick}
        />
      );
    }
  }

  return WithSorts;
};

export default withSorts;
