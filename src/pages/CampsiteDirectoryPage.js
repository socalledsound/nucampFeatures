import {
    Container,
    Row,
    Col,
    Breadcrumb,
    BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CampsitesList from '../features/campsites/CampsitesList'

const CampsiteDirectoryPage = () => {
 
    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </Col>
            </Row>
            <Row>
                <CampsitesList />
            </Row>
        </Container>
    );
}

export default CampsiteDirectoryPage;
