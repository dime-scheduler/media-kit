import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: "Dime.Scheduler", link: "https://dimescheduler.com" },
        { title: "Docs", link: "https://docs.dimescheduler.com" },
        { title: "Intro", link: "https://intro.dimescheduler.com" }
      ],
      grid2: [
        { title: "Follow us on LinkedIn", link: "https://www.linkedin.com/company/dimenics" }
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className={this.props.isLight ? "footer bg-light" : "footer"}>
          <Container>
            <Row>
              <Col
                lg="4"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <Link to="#" className="logo-footer">
                  <img
                    src={this.props.isLight ? logodark : logolight}
                    height="24"
                    alt=""
                  />
                </Link>
                <p className={this.props.isLight ? "mt-4 text-muted" : "mt-4"}>
                  Stop puzzling. Start planning.
                </p>
                <ul className={this.props.isLight ? "list-unstyled social-icon social mb-0 m t-4" : "list-unstyled social-icon foot-social-icon mb-0 mt-4"}>
                  <li className="list-inline-item me-1">
                    <a href="https://www.linkedin.com/company/dimenics" target="_blank" rel="noreferrer" className="rounded">
                      <FeatherIcon
                        icon="linkedin"
                        className="fea icon-sm fea-social"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item me-1">
                    <a href="https://www.youtube.com/user/DimenicsTV" target="_blank" rel="noreferrer" className="rounded">
                      <FeatherIcon
                        icon="youtube"
                        className="fea icon-sm fea-social"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item me-1">
                    <a href="https://www.facebook.com/Dime-352837688099832/" target="_blank" rel="noreferrer" className="rounded">
                      <FeatherIcon
                        icon="facebook"
                        className="fea icon-sm fea-social"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item me-1">
                    <a href="https://twitter.com/Dimenics" target="_blank" rel="noreferrer" className="rounded">
                      <FeatherIcon
                        icon="twitter"
                        className="fea icon-sm fea-social"
                      />
                    </a>
                  </li>
                </ul>
              </Col>

              <Col
                lg="2"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Dime.Scheduler
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid1.map((grid, key) => (
                    <li key={key}>
                      <a
                        href={grid.link}
                        target="_blank"
                        rel="noreferrer"
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>{" "}
                        {grid.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="3"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Useful Links
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid2.map((grid, key) => (
                    <li key={key}>
                      <a
                        href={grid.link}
                        target="_blank"
                        rel="noreferrer"
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>
                        {grid.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
