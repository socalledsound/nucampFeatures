import { Row, Col } from 'reactstrap'
import MenuCard from "./MenuCard";
const CarouselRow = ({categories}) => {

    console.log(categories)

    return ( 
        <div>
        <Row>
        {
            categories.map((category, idx) => (
                <Col md className='md m-1' key={`${idx}${category.items[0].id}`}>
                    <MenuCard 
                        item={category.items[0]}
                        isLoading={category.isLoading}
                        errMsg={category.errMsg}
                    />
                </Col>
            ))
        }
        </Row>
        </div>
     );
}
 
export default CarouselRow;