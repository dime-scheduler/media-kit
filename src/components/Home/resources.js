import { Container, Row, Col } from 'reactstrap';
import dsPlanningBoard from "../../assets/images/ds-illustration-planningboard.svg";

const Resources = () => (
    <Container className="mt-60 mt-60">
        <Row className="align-items-center">
            <Col lg={6} md={6} xs={12}>
                <img src={dsPlanningBoard} className="img-fluid mx-auto d-block" alt="" />
            </Col>

            <Col lg={6} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title">
                    <h4 className="title mb-4">Resources</h4>
                    <p className="text-muted para-desc mb-0">Please use the following links to refer to <span className="text-primary fw-bold">Dime.Scheduler</span>:</p>
                    <div className="d-inline-block">
                        <div className="pt-4 d-flex align-items-center">
                            <div className="content">
                                <ul>
                                    <li> <a href="https://www.dimescheduler.com" target="_blank" rel="noreferrer">Product page</a></li>
                                    <li> <a href="https://www.youtube.com/channel/UCYD4LGox7SJLL7r8gmjulNA" target="_blank" rel="noreferrer">Webinars, animation videos</a></li>
                                    <li> <a href="https://docs.dimescheduler.com" target="_blank" rel="noreferrer">Documentation</a></li>
                                    <li> <a href="https://intro.dimescheduler.com" target="_blank" rel="noreferrer">Slide deck</a></li>
                                    <li> <a href="https://www.dimescheduler.com/assets/brochure.pdf" target="_blank" rel="noreferrer">Brochure</a></li>
                                    <li> <a href="https://www.linkedin.com/company/dimesoftware" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                    <li> <a href="https://twitter.com/dimesoftware" target="_blank" rel="noreferrer">Twitter</a></li>
                                    <li> <a href="https://www.facebook.com/dimesoftware" target="_blank" rel="noreferrer">Facebook</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
)

export default Resources;