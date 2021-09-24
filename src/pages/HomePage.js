import {useState} from 'react'
import { Button, ButtonGroup, Container } from 'reactstrap';
import AnimatedMenu from '../features/animatedMenu/AnimatedMenu';

const HomePage = () => {

    const [ defaultMode, toggleDefaultMode] = useState(true)

    return (
        <Container>
            <ButtonGroup>
                <Button outline color='info' active={defaultMode} onClick={() => toggleDefaultMode(true)}>1</Button>
                <Button outline color='info' active={!defaultMode} onClick={() => toggleDefaultMode(false)}>2</Button>
            </ButtonGroup>
            <AnimatedMenu defaultMode={defaultMode}/>      
        </Container>
    );
}
 
export default HomePage;