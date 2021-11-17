import {Container} from 'react-bootstrap';
import TitreH1 from '../../Components/TitreH1/TitreH1';

function Main(){
    return(
        <>
            <TitreH1>Les formations <span className="text-info">H2PROG</span></TitreH1>
            <Container>
                <div>Titre</div>
                <div>Boutton</div>
                <div>Table</div>
            </Container>
        </>
    )
};

export default Main;