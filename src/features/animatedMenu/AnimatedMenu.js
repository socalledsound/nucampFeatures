import { useSelector } from 'react-redux'
import { selectItems, selectFeaturedItems } from './animationSelectors'
import AnimatedRow from '../../components/AnimatedRow';
import CarouselRow from '../../components/CarouselRow'

const AnimatedMenu = ({defaultMode}) => {

   const allItems = useSelector(selectItems) 
   const featuredItems = useSelector(selectFeaturedItems)

    console.log(featuredItems)
    return ( 
            defaultMode ?
                <AnimatedRow items={featuredItems}/>
            :
                <CarouselRow categories={allItems}/>
                    
                     
     );
}
 
export default AnimatedMenu;


