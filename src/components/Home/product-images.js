import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Lightbox from 'react-image-lightbox';
import { Link } from "react-router-dom";

import work1 from '../../assets/images/work/dimescheduler-1.png';
import work2 from '../../assets/images/work/dimescheduler-2.png';
import work3 from '../../assets/images/work/dimescheduler-3.png';
import work4 from '../../assets/images/work/dimescheduler-4.png';
import work5 from '../../assets/images/work/dimescheduler-5.png';
import work6 from '../../assets/images/work/dimescheduler-6.png';
import work7 from '../../assets/images/work/dimescheduler-manufacturing-1.png';
import work8 from '../../assets/images/work/dimescheduler-manufacturing-2.png';
import work9 from '../../assets/images/work/dimescheduler-manufacturing-3.png';
import work10 from '../../assets/images/work/dimescheduler-manufacturing-4.png';

const images = [work1, work2, work3, work4, work5, work6, work7, work8, work9, work10];

class ProductImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        };

        this.setCategory.bind(this);
    }

    setCategory(category) {
        this.setState({
          displayCategory: category
        });
      }

    render() {
        const { photoIndex, isOpen } = this.state;
        
        return <Container className="mt-60 mt-60">
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

    }
}

export default ProductImages;