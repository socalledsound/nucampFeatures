import {
    Col,
} from 'reactstrap';
import { useSelector } from "react-redux";
import { selectCampsites, selectFetchCampsitesStatus} from './campsitesSlice'
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import CampsiteCard from "./CampsiteCard";

const CampsitesList = () => {

    const campsites = useSelector(selectCampsites)
    const {campsitesLoading, campsitesErrMsg } = useSelector(selectFetchCampsitesStatus)

    if(campsitesLoading){
        return <Loading />
    }

    if(campsitesErrMsg){
        return <ErrorMessage errMsg={campsitesErrMsg}/>
    }

    if(campsites){
        campsites.map((campsite) => {
            return (
                <Col md='5' key={campsite.id} className='m-1'>
                    <CampsiteCard campsite={campsite} />
                </Col>
            );
        })
    }

}

export default CampsitesList 