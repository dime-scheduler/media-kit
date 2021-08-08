import React, { Component } from "react";

import 'react-image-lightbox/style.css';

import Start from "../components/Home/start";
import GeneralGuidelines from "../components/Home/general-guidelines";
import Leadership from "../components/Home/leadership";
import ProductDescription from "../components/Home/product-description";
import Resources from "../components/Home/resources";
import StyleGuidelines from "../components/Home/style-guidelines";
import ProductImages from "../components/Home/product-images";

class HelpCenterOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Dime.Scheduler", link: "/index" },
        { id: 2, name: "Help Center", link: "#" },
        { id: 3, name: "Overview" }]
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>

        <section className="section">
          <Start />
          <GeneralGuidelines />
          <ProductDescription />
          <Resources />
          <StyleGuidelines />
          <ProductImages />
          <Leadership />
        </section>

      </React.Fragment >
    );
  }
}

export default HelpCenterOverview;
