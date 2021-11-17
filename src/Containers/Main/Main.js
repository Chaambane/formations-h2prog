import {Container} from 'react-bootstrap';
import TitreH1 from '../../Components/TitreH1/TitreH1';
import Bouton from '../Boutton/Boutton';

function Main(){
    return(
        <>
            <TitreH1>Les formations <span className="text-info">H2PROG</span></TitreH1>
            <Container>
                <Bouton>PHP</Bouton>
                <Bouton>Javascript</Bouton>
                <Bouton>Algorithmique</Bouton>
                <div>Table</div>
            </Container>
        </>
    )
};

export default Main;