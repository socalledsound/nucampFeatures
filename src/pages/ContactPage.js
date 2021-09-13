import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Container,
    Col,
    Row,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm'

const ContactPage  = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Contact Us</h2>
                    <hr />
                </Col>
            </Row>

            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                        1 Nucamp Way
                        <br />
                        Seattle, WA 98001
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+12065551234'
                    >
                        <i className='fa fa-phone' /> 1-206-555-1234
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:fakeemail@fakeemail.co'
                    >
                        <i className='fa fa-envelope-o' /> campsites@nucamp.co
                    </a>
                </Col>
            </Row>

            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Send us your Feedback</h2>
                    <hr />
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}

export default ContactPage;