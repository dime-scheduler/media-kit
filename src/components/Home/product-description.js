import React, { Component } from "react";

import { Container, Row, Col, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { Link } from "react-router-dom";
import dsGanttChart from "../../assets/images/ds-illustration-ganttchart.svg";

class ProductDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            col1: true,
            col2: false,
            col3: false
        };

        this.t_col1 = this.t_col1.bind(this);
        this.t_col2 = this.t_col2.bind(this);
        this.t_col3 = this.t_col3.bind(this);
    }

    t_col1() {
        this.setState({
            col1: !this.state.col1,
            col2: false,
            col3: false
        });
    }
    t_col2() {
        this.setState({
            col2: !this.state.col2,
            col1: false,
            col3: false
        });
    }
    t_col3() {
        this.setState({
            col3: !this.state.col3,
            col2: false,
            col1: false
        });
    }
    t_col4() {
        this.setState({
            col4: !this.state.col4,
            col2: false,
            col3: false
        });
    }

    render() {
        return <Container className="mt-60 mt-60">
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
                                            Plan and manage your resources and projects more effectively and accelerate your business by powering up Microsoft Dynamics 365 Business Central  <span className="text-primary fw-bold">Dime.Scheduler</span>.
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
    }
}

export default ProductDescription;