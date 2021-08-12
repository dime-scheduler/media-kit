import React, { Component, Suspense } from "react";
import { withRouter } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";
import FeatherIcon from "feather-icons-react";
import { Footer } from "@dimescheduler/ds-website-layout";
import { col1, col2 } from "../../data/footer";

const Topbar = React.lazy(() => import("./Topbar"));

const CustomDot = () => {
  return (
    <React.Fragment>
      <FeatherIcon icon="arrow-up" className="icons" />
    </React.Fragment>
  );
};

const Loader = () => {
  return (
    <div id="preloader">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );
};

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={Loader()}>
          <Topbar hasDarkTopBar={this.props.hasDarkTopBar} />

          {this.props.children}

          <Footer isLight={true} col1={col1} col2={col2} />

          <ScrollUpButton
            ContainerClassName="classForContainer"
            style={{ height: 36, width: 36 }}
            TransitionClassName="classForTransition"
          >
            <CustomDot />
          </ScrollUpButton>
        </Suspense>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
