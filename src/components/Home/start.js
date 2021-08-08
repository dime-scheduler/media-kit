import { Container, Row, Col } from 'reactstrap';
import background from "../../assets/images/ds.svg";
import ds from "../../assets/images/ds-logo.svg";

const Start = () => (
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
)

export default Start;