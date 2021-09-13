import {
    Container,
    Row,
    Col,
} from 'reactstrap';

const ErrorMessage = ({errMsg}) => {
    return ( 
        <Container>
        <Row>
            <Col>
                <h4>{errMsg}</h4>
            </Col>
        </Row>
    </Container>
     );
}
 
export default ErrorMessage;