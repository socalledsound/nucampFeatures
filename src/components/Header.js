import { useState } from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Container,
    Row,
    Col,
    Collapse,
    NavItem,
    Jumbotron,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import NucampLogo from '../app/assets/images/logo.png'

const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username < 6) {
        errors.username = 'Must be at least 6 characters.';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password < 8) {
        errors.password = 'Must be at least 8 characters.';
    }

    return errors;
};

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleLogin = (values) => {
        alert(
            `Username: ${values.username} Password: ${values.password} Remember: ${values.remember}`
        );
        setIsModalOpen(false);
    };

    return (
        <>
            {/* <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col>
                            <h1>NuCamp</h1>
                            <h2>a better way to camp</h2>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron> */}

            <Navbar dark sticky='top' expand='md'>
                <Container>
                    <NavbarBrand className='mr-auto' href='/'>
                        <img
                            src={NucampLogo}
                            height='30'
                            width='30'
                            alt='NuCamp Logo'
                        />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <i className='fa fa-home fa-lg' /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/campsites'>
                                    <i className='fa fa-list fa-lg' /> Directory
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/aboutus'>
                                    <i className='fa fa-info fa-lg' /> About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contactus'>
                                    <i className='fa fa-address-card fa-lg' />{' '}
                                    Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <span className='navbar-text ml-auto'>
                            <Button outline onClick={toggleModal} style={{color: 'white', border: '1px solid white'}}>
                                <i className='fa fa-sign-in fa-lg' /> Login
                            </Button>
                        </span>
                    </Collapse>
                </Container>
            </Navbar>

            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                            remember: false,
                        }}
                        onSubmit={handleLogin}
                        validate={validate}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Field
                                    id='username'
                                    name='username'
                                    placeholder='Username'
                                    className='form-control'
                                />
                                <ErrorMessage name='username'>
                                    {(msg) => (
                                        <p className='text-danger'>{msg}</p>
                                    )}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Field
                                    id='password'
                                    name='password'
                                    placeholder='Password'
                                    className='form-control'
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Field
                                        name='remember'
                                        type='checkbox'
                                        className='form-check-input'
                                    />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Login
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
}

export default Header;
