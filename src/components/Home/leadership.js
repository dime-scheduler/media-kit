import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import hendrik from "../../assets/images/leadership/Hendrik Bulens.jpg";
import tom from "../../assets/images/leadership/Tom Taffin.jpg";

export default class TeamMembers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [
                {
                    id: 1,
                    img: tom,
                    name: "Tom Taffin",
                    position: "Managing Partner",
                    linkedin: "https://be.linkedin.com/in/tomtaffin",
                    description: "Tom is managing partner at Dime Software and is the founder of Dime.Scheduler. With more than a decade of experience in the Microsoft Dynamics product suite, Tom is an authority in the field with a proven track record in building solutions for complex business environments."
                },
                {
                    id: 2,
                    img: hendrik,
                    name: "Hendrik Bulens",
                    position: "Managing Partner",
                    linkedin: "https://www.linkedin.com/in/hendrikbulens",
                    description: "Hendrik is managing partner at Dime Software and leads the Dime.Scheduler product team. His many years of experience as a consultant and passion for business and technology have helped shape Dime.Scheduler to what it is today and where it is headed."
                }
            ],
        };
    }
    render() {
        return (
            <React.Fragment>
                <Container className=" mt-100 mt-60">
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <div className="section-title mb-4 pb-2 text-center">
                                <h4 className="title mb-4">Leadership</h4>
                                <p className="mx-auto text-muted">
                                    Here is a short bio of the people behind <span className="text-primary fw-bold">Dime.Scheduler</span>.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.members.map((members, key) => (
                            <Col lg={6} md={6} className="mt-4 pt-2" key={key}>
                                <div className="card team text-center border-0">
                                    <div className="position-relative">
                                        <img src={members.img} className="img-fluid" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item ms-1">
                                                <a href={members.linkedin} target="_blank" rel="noreferrer" className="rounded">
                                                    <i>
                                                        <FeatherIcon
                                                            icon="linkedin"
                                                            className="fea icon-sm fea-social"
                                                        />
                                                    </i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body py-3 px-0 content">
                                        <h5 className="mb-0">
                                            <p className="name text-dark">{members.name}</p>
                                        </h5>
                                        <small className="designation text-muted">{members.position}</small>
                                    </div>
                                    <div className="card-body py-3 px-4 content">
                                        <p className="text-muted">{members.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
