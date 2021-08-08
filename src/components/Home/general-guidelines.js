import React, { Component } from 'react'
import { Container, Row, Col, NavItem, TabContent, TabPane, NavLink, Nav } from 'reactstrap'
import classnames from "classnames";

export default class GeneralGuideLines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "1",
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
        this.setState({ activeTab: tab });
    }
    render() {
        return (
            <React.Fragment>
                <Container className="mt-60 mt-60">
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="mb-4">General guidelines</h4>
                                <p className="para-desc mx-auto text-muted">
                                    Carefully read the instructions about the usage of the <span className="text-primary fw-bold">Dime.Scheduler</span> brand.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav
                                pills
                                justified
                                id="pills-tab"
                                className="flex-column bg-white rounded shadow p-3 mb-0 sticky-bar">
                                <NavItem>
                                    <NavLink
                                        className={classnames(
                                            { active: this.state.activeTab === "1" },
                                            "rounded"
                                        )}
                                        onClick={() => {
                                            this.toggle("1");
                                        }} >
                                        <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                            <h6 className="mb-0"><i className="uil uil-podium me-2 h5"></i> Slogan</h6>
                                            <i className="uil uil-angle-right-b"></i>
                                        </div>
                                    </NavLink>
                                </NavItem>

                                <NavItem className="mt-2">
                                    <NavLink
                                        className={classnames(
                                            { active: this.state.activeTab === "2" },
                                            "rounded"
                                        )}
                                        onClick={() => {
                                            this.toggle("2");
                                        }}
                                    >
                                        <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                            <h6 className="mb-0"><i className="uil uil-pen me-2 h5"></i> Nomenclature</h6>
                                            <i className="uil uil-angle-right-b"></i>
                                        </div>
                                    </NavLink>
                                </NavItem>

                                <NavItem className="mt-2">
                                    <NavLink
                                        className={classnames(
                                            { active: this.state.activeTab === "3" },
                                            "rounded"
                                        )}
                                        onClick={() => {
                                            this.toggle("3");
                                        }}
                                    >
                                        <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                            <h6 className="mb-0"><i className="uil uil-at me-2 h5"></i> Contact</h6>
                                            <i className="uil uil-angle-right-b"></i>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>

                        <Col md={8} xs={12} className="mt-0 pt-0 col-12 col-md-8">
                            <TabContent id="pills-tabContent" activeTab={this.state.activeTab}>
                                <TabPane tabId="1" className="p-4 rounded shadow" id="developing" role="tabpanel" aria-labelledby="proposal">
                                    <p className="text-muted mb-0">
                                        The slogan for <span className="text-primary fw-bold">Dime.Scheduler</span> is <span className="fw-bold">"Stop puzzling. Start planning"</span>.
                                    </p>
                                </TabPane>

                                <TabPane tabId="2" className="p-4 rounded shadow" id="data-analise" role="tabpanel" aria-labelledby="contract">
                                    <p className="text-muted mb-2">
                                        <span className="text-primary fw-bold">Dime.Scheduler</span> is the only right name for the product.
                                    </p>
                                    <p className="text-muted mb-2">
                                        The commonly used ‘Dime’ is incorrect as it refers to the company rather than the scheduling software for
                                        the Microsoft Dynamics product suite. Therefore, refrain from using 'Dime' when referring to
                                        <span className="text-primary fw-bold"> Dime.Scheduler</span>.
                                    </p>
                                </TabPane>

                                <TabPane tabId="3" className="p-4 rounded shadow" id="security" role="tabpanel" aria-labelledby="crm">
                                    <p className="text-muted mb-2">
                                        For all inquiries related to <span className="text-primary fw-bold">Dime.Scheduler</span>, please refer to <span className="fw-bold">hello@dimescheduler.com</span>.
                                    </p>
                                    <p className="text-muted mb-2">
                                        For free demos, choose an available timeslot on <a href="www.dimescheduler.com"><span className="fw-bold">www.dimescheduler.com</span></a>.
                                    </p>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
