import { useSelector } from 'react-redux'
import { selectItems, selectFeaturedItems } from './animationSelectors'
import AnimatedRow from '../../components/FadeInRow';
import CarouselRow2 from '../../components/CarouselRow2'

const AnimatedMenu = ({defaultMode}) => {

   const allItems = useSelector(selectItems) 
   const featuredItems = useSelector(selectFeaturedItems)

    console.log(featuredItems)
    return ( 
            defaultMode ?
                <AnimatedRow items={featuredItems}/>
            :
                <CarouselRow2 categories={allItems}/>
                    
                     
     );
}
 
export default AnimatedMenu;


