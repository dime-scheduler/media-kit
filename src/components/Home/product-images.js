import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Lightbox from 'react-image-lightbox';
import { Link } from "react-router-dom";
import 'react-image-lightbox/style.css';

import ss1 from '../../assets/images/work/dimescheduler-1.png';
import ss2 from '../../assets/images/work/dimescheduler-2.png';
import ss3 from '../../assets/images/work/dimescheduler-3.png';
import ss4 from '../../assets/images/work/dimescheduler-4.png';
import ss5 from '../../assets/images/work/dimescheduler-5.png';
import ss6 from '../../assets/images/work/dimescheduler-6.png';
import ss7 from '../../assets/images/work/dimescheduler-manufacturing-1.png';
import ss8 from '../../assets/images/work/dimescheduler-manufacturing-2.png';
import ss9 from '../../assets/images/work/dimescheduler-manufacturing-3.png';
import ss10 from '../../assets/images/work/dimescheduler-manufacturing-4.png';

import ss11 from '../../assets/images/work/ds-screen-logistics-1.png';
import ss12 from '../../assets/images/work/ds-screen-logistics-2.png';
import ss13 from '../../assets/images/work/ds-screen-logistics-3.png';
import ss14 from '../../assets/images/work/ds-screen-logistics-4.png';
import ss15 from '../../assets/images/work/ds-screen-logistics-5.png';

const allImages = [
    { cat: "None", coll: [ss1, ss2, ss3, ss4, ss5, ss6] },
    { cat: "Manufacturing", coll: [ss7, ss8, ss9, ss10, ss11, ss12, ss13, ss14, ss15] },
    { cat: "Transportation", coll: [ss11, ss12, ss13, ss14, ss15] }
];

class ProductImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            works: [
                { image: ss1, title: "Schedule resources and jobs through the map", category: "All" },
                { image: ss2, title: "Plan projects with the Gantt chart", category: "All" },
                { image: ss3, title: "Resource and project planning in one single view", category: "All" },
                { image: ss4, title: "Discover bottlenecks with the capacity reporting pivot grid", category: "All" },
                { image: ss5, title: "Find the right resource for the job with smart resource filtering", category: "All" },
                { image: ss6, title: "Personalize Dime.Scheduler just the way you like it", category: "All" },

                { image: ss7, title: "Scheduling manufacturing orders", category: "Manufacturing" },
                { image: ss8, title: "Look for appropriate work and machine centers", category: "Manufacturing" },
                { image: ss9, title: "Optimize the occupancy of the machine and work centers", category: "Manufacturing" },
                { image: ss10, title: "Optimize the schedule of resources through the capacity reporting grid", category: "Manufacturing" },

                { image: ss11, title: "Create trips", category: "Transportation" },
                { image: ss12, title: "Create trips", category: "Transportation" },
                { image: ss13, title: "Create trips", category: "Transportation" },
                { image: ss14, title: "Create trips", category: "Transportation" },
                { image: ss15, title: "Create trips", category: "Transportation" }
            ],
            displayCategory: "All",
            photoIndex: 0,
            isOpen: false,
        };

        this.setCategory.bind(this);
    }

    getVisibleImages = () => this.state.displayCategory === "All"
        ? allImages.map(x => x.coll).flat()
        : allImages.filter(x => x.cat === this.state.displayCategory).map(x => x.coll).flat();

    setCategory(category) {
        this.setState({
            displayCategory: category
        });
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        const images = this.getVisibleImages();

        return <Container className="mt-60 mt-60">
            <Row className="justify-content-center">
                <Col xs={12}>
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="mb-4">Product images</h4>
                        <p className="para-desc mx-auto text-muted">
                            Here is a set of screenshots which you may use to promote <span className="text-primary fw-bold">Dime.Scheduler</span>.
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
                                <li onClick={() => this.setCategory("Transportation")} className={this.state.displayCategory === "Transportation" ? "list-inline-item categories-name border text-dark rounded active" : "list-inline-item categories-name border text-dark rounded"}>Transportation</li>{' '}
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