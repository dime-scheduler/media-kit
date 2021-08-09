import { Container, Row, Col } from 'reactstrap';
import ds from "../../assets/images/ds-logo.svg";
import dsBlack from "../../assets/images/ds-logo-black.svg";

const StyleGuidelines = () => (
    <Container className="mt-60 mt-60">
        <Row className="justify-content-center">
            <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                    <h4 className="mb-4">Style guidelines</h4>
                    <p className="mx-auto text-muted">
                        Use the following brand style guidelines when you wish to include <span className="text-primary fw-bold">Dime.Scheduler</span> in your correspondence.
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
                        <ul className="text-muted mb-0">
                            <li>Primary color: <span style={{ color: "#6e62b5" }}>#6e62b5</span></li>
                            <li>Secondary color: <span style={{ color: "#46276d" }}>#46276d</span></li>
                        </ul>
                    </div>
                </div>
            </Col>

            <Col lg={4} md={4} xs={12}>
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                    <div className="flex-1 content ms-4">
                        <h5 className="mb-1">
                            <p className="text-dark">Fonts</p>
                        </h5>
                        <ul className="text-muted mb-0">
                            <li>Logo: <a href="https://www.dafont.com/birdman.font" target="_blank" rel="noreferrer">Birdman Regular</a></li>
                        </ul>
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
                            <li><img src={ds} width="200px" alt="Dime.Scheduler logo" /></li>
                            <li><img src={dsBlack} width="200px" alt="Dime.Scheduler logo" /></li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
)

export default StyleGuidelines;