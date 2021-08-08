import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

//Import components
import background from "../assets/images/ds.svg";
import ds from "../assets/images/ds-logo.svg";
import dsBlack from "../assets/images/ds-logo-black.svg";
import dsPlanningBoard from "../assets/images/ds-illustration-planningboard.svg";
import dsGanttChart from "../assets/images/ds-illustration-ganttchart.svg";

import Section1 from "../components/Home/section1";
import Team from "../components/Home/team";

import work1 from '../assets/images/work/dimescheduler-1.png';
import work2 from '../assets/images/work/dimescheduler-2.png';
import work3 from '../assets/images/work/dimescheduler-3.png';
import work4 from '../assets/images/work/dimescheduler-4.png';
import work5 from '../assets/images/work/dimescheduler-5.png';
import work6 from '../assets/images/work/dimescheduler-6.png';
import work7 from '../assets/images/work/dimescheduler-manufacturing-1.png';
import work8 from '../assets/images/work/dimescheduler-manufacturing-2.png';
import work9 from '../assets/images/work/dimescheduler-manufacturing-3.png';
import work10 from '../assets/images/work/dimescheduler-manufacturing-4.png';

const images = [work1, work2, work3, work4, work5, work6, work7, work8, work9, work10];

class HelpCenterOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Dime.Scheduler", link: "/index" },
        { id: 2, name: "Help Center", link: "#" },
        { id: 3, name: "Overview" }],
      works: [
        { image: work1, title: "Dime.Scheduler", category: "All" },
        { image: work2, title: "Dime.Scheduler", category: "All" },
        { image: work3, title: "Dime.Scheduler", category: "All" },
        { image: work4, title: "Dime.Scheduler", category: "All" },
        { image: work5, title: "Dime.Scheduler", category: "All" },
        { image: work6, title: "Dime.Scheduler", category: "All" },
        { image: work7, title: "Dime.Scheduler", category: "Manufacturing" },
        { image: work8, title: "Dime.Scheduler", category: "Manufacturing" },
        { image: work9, title: "Dime.Scheduler", category: "Manufacturing" },
        { image: work10, title: "Dime.Scheduler", category: "Manufacturing" }
      ],
      displayCategory: "All",
      photoIndex: 0,
      isOpen: false,
      col1: true,
      col2: false,
      col3: false,
      col4: false,
    };
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col4 = this.t_col4.bind(this);
    this.setCategory.bind(this);
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col4: false,
    });
  }
  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col2: false,
      col1: false,
      col4: false,
    });
  }
  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col2: false,
      col3: false,
      col1: false,
    });
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

  setCategory(category) {
    this.setState({
      displayCategory: category
    });
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <React.Fragment>

        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-8 pb-4">
                  <div> <embed src={ds} width="500" /></div>
                  <img src={background} alt="Dime.Scheduler illustration" style={{ maxHeight: '350px', padding: "20px" }} />

                  <div style={{ paddingTop: "30px" }}>

                    <h1 className="mb-4">Media kit</h1>
                  </div>
                  <p className="para-desc mx-auto text-muted">
                    On this page, you will find all the brand assets for <span className="text-primary fw-bold">Dime.Scheduler</span>, the resource and project planning solution for Microsoft Dynamics 365 Business Central.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>

          <Section1 />

          <Container className="mt-60 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="mb-4">Product description</h4>
                  <p className="mx-auto text-muted">
                    Use the following descriptions as a guideline to write your own blurb of <span className="text-primary fw-bold">Dime.Scheduler</span>.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={8} md={8} xs={12} >
                <div className="faq-content">
                  <div className="accordion" id="accordionExample">
                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col1}
                        className={
                          this.state.col1
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 shadow bg-light p-3"
                          id="headingOne"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            One-liner
                            <i
                              className={
                                this.state.col1
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col1}>
                        <CardBody>
                          <p className="text-muted mb-0 faq-ans">
                            Plan and manage your resources and projects more effectively and accelerate your business by powering up Microsoft Dynamics 365 Business Central with <span className="text-primary fw-bold">Dime.Scheduler</span>
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col2}
                        className={
                          this.state.col2
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 shadow bg-light p-3"
                          id="headingTwo"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            Short version
                            <i
                              className={
                                this.state.col2
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col2}>
                        <CardBody>
                          <p className="text-muted mb-0 faq-ans">
                            Supercharge your business by powering up Microsoft Dynamics 365 Business Central with a centralized
                            resource and project planning solution. <span className="text-primary fw-bold">Dime.Scheduler</span>, with its powerful features and flexible design, has
                            a proven track record in various industries and is trusted by dozens of resellers and thousands of people
                            all over the world.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                    <Card className="border-0 rounded mb-2">
                      <Link
                        to="#"
                        onClick={this.t_col3}
                        className={
                          this.state.col3
                            ? "faq position-relative text-primary"
                            : "faq position-relative text-dark"
                        }
                      >
                        <CardHeader
                          className="border-0 shadow bg-light p-3"
                          id="headingfive"
                        >
                          <h6 className="title mb-0">
                            {" "}
                            Long version
                            <i
                              className={
                                this.state.col3
                                  ? "mdi mdi-chevron-up float-end"
                                  : "mdi mdi-chevron-down float-end"
                              }
                            ></i>
                          </h6>
                        </CardHeader>
                      </Link>
                      <Collapse isOpen={this.state.col3}>
                        <CardBody>
                          <p className="text-muted mb-4 faq-ans">
                            Wasted time and money due to inefficient and ineffective scheduling is lamentable. With powerful and
                            integrated tools such as <span className="text-primary fw-bold">Dime.Scheduler</span>, business planning can turn a chore into a catalyst for growth of
                            your organization. <span className="text-primary fw-bold">Dime.Scheduler</span> is a comprehensive and easy to use resource and project planning
                            solution for the Microsoft Dynamics product suite and has a proven track record in various industries and
                            is trusted by dozens of resellers and thousands of people all over the world.
                          </p>
                          <p className="text-muted mb-4 faq-ans">

                            With <span className="text-primary fw-bold">Dime.Scheduler</span> and its many powerful capabilities and flexible design, you get a real-time overview
                            of the work that needs to be done and you can create a schedule for your workforce accordingly, all of
                            which is seamlessly processed by the other workflows you may have in place in the organization. All of
                            this results in fewer errors, a higher occupancy rate, higher output, happier workforce, which in turn will
                            save you time and money.
                          </p>
                        </CardBody>
                      </Collapse>
                    </Card>

                  </div>
                </div>


              </Col>
              <Col lg={4} md={4} xs={12}>
                <img src={dsGanttChart} className="img-fluid mx-auto d-block" alt="" />
              </Col>
            </Row>
          </Container>

          <Container className="mt-60 mt-60">
            <Row className="align-items-center">
              <Col lg={6} md={6} xs={12}>
                <img src={dsPlanningBoard} className="img-fluid mx-auto d-block" alt="" />
              </Col>

              <Col lg={6} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title">
                  <h4 className="title mb-4">Resources</h4>
                  <p className="text-muted para-desc mb-0">Please use the following links to redirect to <span className="text-primary fw-bold">Dime.Scheduler</span>:</p>
                  <div className="d-inline-block">
                    <div className="pt-4 d-flex align-items-center">
                      <div className="content">
                        <ul>
                          <li> <a href="https://www.dimescheduler.com">Product page</a></li>
                          <li> <a href="https://www.youtube.com/user/DimenicsTV">Webinars, animation videos</a></li>
                          <li> <a href="https://docs.dimescheduler.com">Documentation</a></li>
                          <li> <a href="https://intro.dimescheduler.com">Slide deck</a></li>
                          <li> <a href="https://www.linkedin.com/company/dimenics">LinkedIn</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-60 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="mb-4">Style guidelines</h4>
                  <p className="para-desc mx-auto text-muted">
                    Use the following descriptions as a guideline to write your own blurb of <span className="text-primary fw-bold">Dime.Scheduler</span>.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg={4} md={4} xs={12}>
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <p className="text-dark">Color scheme</p>
                    </h5>
                    <p className="text-muted mb-0">
                      <ul>
                        <li>Primary color: #6e62b5</li>
                        <li>Secondary color: #46276d</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={4} xs={12}>
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <p className="text-dark">Fonts</p>
                    </h5>
                    <p className="text-muted mb-0">
                      <ul>
                        <li>Default font: Segoe UI</li>
                        <li>Logo font: <a href="https://www.dafont.com/birdman.font">Birdman Regular</a></li>
                      </ul>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} xs={12}>
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <p className="text-dark">Logos</p>
                    </h5>
                    <ul className="list-unstyled text-muted mb-0">
                      <li><embed src={ds} width="200px" /></li>
                      <li><embed src={dsBlack} width="200px" /></li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-60 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="mb-4">Product images</h4>
                  <p className="para-desc mx-auto text-muted">
                    Screenshots of <span className="text-primary fw-bold">Dime.Scheduler</span>.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <div className="row justify-content-center">
                <div className="col-12 filters-group-wrap">
                  <div className="filters-group">
                    <ul className="container-filter list-inline mb-0 filter-options text-center" id="filter">
                      <li onClick={() => this.setCategory("All")} className={this.state.displayCategory === "All" ? "list-inline-item categories-name border text-dark rounded active" : "list-inline-item categories-name border text-dark rounded"}>All</li>{' '}
                      <li onClick={() => this.setCategory("Manufacturing")} className={this.state.displayCategory === "Manufacturing" ? "list-inline-item categories-name border text-dark rounded active" : "list-inline-item categories-name border text-dark rounded"}>Manufacturing</li>{' '}
                    </ul>
                  </div>
                </div>
              </div>
              <Row id="grid">

                {this.state.works
                  .filter(
                    ({ category }) =>
                      this.state.displayCategory === category ||
                      this.state.displayCategory === "All"
                  )
                  .map(({ title, image, subtitle }, key) => (
                    <Col key={key} lg={4} md={6} xs={12} className="mt-4 pt-2 branding">
                      <Card className="border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                        <CardBody className="p-0">
                          <Link className="mfp-image d-inline-block" to="#" onClick={(event) => { event.preventDefault(); this.setState({ isOpen: true, photoIndex: key }) }} title="">
                            <img src={image} className="img-fluid" alt="work" />
                          </Link>
                          <div className="content bg-white p-3">
                            <h5 className="mb-0"><Link to="page-work-detail" className="text-dark title">{title}</Link></h5>
                            <h6 className="text-muted tag mb-0">{subtitle}</h6>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}

                {/* lightbox for portfolio images */}
                {isOpen && (
                  <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    imagePadding={100}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                      })
                    }
                  />
                )}

              </Row>
            </Row>
          </Container>


          <Team />
        </section>

      </React.Fragment >
    );
  }
}

export default HelpCenterOverview;
