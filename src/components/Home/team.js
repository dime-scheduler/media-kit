import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//import images
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
                    linkedin: "https://be.linkedin.com/in/tomtaffin"
                },
                {
                    id: 2,
                    img: hendrik,
                    name: "Hendrik Bulens",
                    position: "Managing Partner",
                    linkedin: "https://www.linkedin.com/in/hendrikbulens"
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
                                                <a href={members.linkedin} className="rounded">
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
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
