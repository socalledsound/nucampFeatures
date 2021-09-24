
import { Col, Row } from 'reactstrap'
import MenuCard from "./MenuCard";

const AnimatedRow = ({items}) => {



    return ( 
        <Row>
        {
            items.map(item => (
                <Col md className='md m-1'>
                    <MenuCard 
                        item={item.featured}
                        isLoading={item.isLoading}
                        errMsg={item.errMsg}
                    />
                </Col>
            ))
        }
        </Row>
     );
}
 
export default AnimatedRow;