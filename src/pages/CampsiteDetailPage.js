
import { useSelector } from 'react-redux';
import {
    Container,
    Row,
} from 'reactstrap';
import {useParams } from 'react-router-dom';
import { selectFetchCampsitesStatus, selectCampsiteById } from '../features/campsites/campsitesSlice'
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Comments from '../features/comments/Comments'
import CampsiteDetail from '../features/campsites/CamspiteDetail'
import SubHeader from '../components/SubHeader'

const CampsiteDetailPage = () => {
    const { campsitesLoading, campsitesErrMsg } = useSelector( selectFetchCampsitesStatus)
    const { campsiteId } = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId))


        return (
            campsitesLoading ?
                <Loading />
                :
                
                campsitesErrMsg ?
                    <ErrorMessage errMsg={campsitesErrMsg}/>
                    :
                    campsite ?
                    <Container>
                        <SubHeader current={campsite.name}/>
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
