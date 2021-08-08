import { Container, Row, Col } from 'reactstrap';
import ds from "../../assets/images/ds-logo.svg";
import dsBlack from "../../assets/images/ds-logo-black.svg";

const StyleGuidelines = () => (
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
)

export default StyleGuidelines;