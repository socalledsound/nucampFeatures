import { useSelector } from 'react-redux'
import { selectCampsitesData } from '../campsites/campsitesSlice'
import { selectPromotionsData } from '../promotions/promotionsSlice'
import { selectPartnersData } from '../partners/partnersSlice'
import AnimatedRow from './AnimatedRow';
import CarouselRow from './CarouselRow'

const AnimatedMenu = ({defaultMode}) => {

    const campsites = useSelector(selectCampsitesData)
    const promotions = useSelector(selectPromotionsData)
    const partners = useSelector(selectPartnersData) 
    const items = [campsites, promotions, partners]

    return ( 
            defaultMode ?
                <AnimatedRow items={items}/>
            :
                <CarouselRow />
                    
                     
     );
}
 
export default AnimatedMenu;


