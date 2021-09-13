import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from 'reactstrap';
import Loading from './Loading';
// import { FadeTransform } from 'react-animation-components';
import { baseUrl } from '../app/shared/baseUrl';
import { ErrorMessage } from 'formik';

const FadeInCard = ({ item, isLoading, errMsg }) => {
    
    console.log(item)
    return (
        isLoading ? 
            <Loading />
            :
            errMsg ?
                <ErrorMessage errMsg={errMsg}/>
                :
                item ?
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
                :
                null
    )
}
export default FadeInCard