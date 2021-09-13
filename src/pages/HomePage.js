import { useSelector } from 'react-redux'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import FadeInCard from "../components/FadeInCard";
import { selectFeaturedCampsite, selectFetchCampsitesStatus } from '../features/campsites/campsitesSlice'
import { selectFeaturedPromotion, selectFetchPromotionsStatus } from '../features/promotions/promotionsSlice'
import { selectFeaturedPartner, selectFetchPartnersStatus } from '../features/partners/partnersSlice'

const HomePage = () => {

    const featuredCampsite = useSelector(selectFeaturedCampsite)
    const {campsitesLoading, campsitesErrMsg } = useSelector(selectFetchCampsitesStatus)
    const featuredPromotion = useSelector(selectFeaturedPromotion)
    const {promotionsLoading, promotionsErrMsg } = useSelector(selectFetchPromotionsStatus)
    const featuredPartner = useSelector(selectFeaturedPartner)
    const {partnersLoading, partnersErrMsg } = useSelector(selectFetchPartnersStatus)

    return (
        <Container>
            <Row>
                <Col md className='md m-1'>
                    <FadeInCard
                        item={featuredCampsite}
                        isLoading={campsitesLoading}
                        errMsg={campsitesErrMsg}
                    />
                </Col>
                <Col md className='md m-1'>
                    <FadeInCard
                        item={featuredPromotion}
                        isLoading={promotionsLoading}
                        errMsg={promotionsErrMsg}
                    />
                </Col>
                <Col md className='md m-1'>
                    <FadeInCard
                        item={featuredPartner}
                        isLoading={partnersLoading}
                        errMsg={partnersErrMsg}
                    />
                </Col>
            </Row>
        </Container>
    );
}
 
export default HomePage;