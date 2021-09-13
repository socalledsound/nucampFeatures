
import { useSelector } from 'react-redux';
import {
    Breadcrumb,
    BreadcrumbItem,
    Container,
    Row,
    Col,
} from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Comments from '../features/comments/Comments'
import CampsiteDetail from '../features/campsites/CamspiteDetail'

const CampsiteDetailPage = () => {
    const { isLoading, errMsg, campsitesArray } = useSelector(
        (state) => state.campsites
    );
    const { campsiteId } = useParams();
    const campsite = campsitesArray.find(
        (campsite) => campsite.id === +campsiteId
    );
        return (
            isLoading ?
                <Loading />
                :
                
                errMsg ?
                    <ErrorMessage errMsg={errMsg}/>
                    :
                    campsite ?
                    <Container>
                        <Row>
                            <Col>
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <Link to='/directory'>Directory</Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem active>
                                        {campsite.name}
                                    </BreadcrumbItem>
                                </Breadcrumb>
                                <h2>{campsite.name}</h2>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <CampsiteDetail campsite={campsite} />
                            <Comments campsiteId={campsiteId}/>
                        </Row>
                    </Container>
                    
                    : 
                    null

        )


}

export default CampsiteDetailPage;
