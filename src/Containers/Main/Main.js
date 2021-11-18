import {Container, Button} from 'react-bootstrap';
import TitreH1 from '../../Components/TitreH1/TitreH1';
import TableFormations from '../../Components/TableFormations/TableFormations';
import { useEffect } from 'react';
import useLoadData from '../../Hooks/useLoadData';

function Main(){
    const [dataFormations, loadDataFormations] = useLoadData();

    useEffect(() => {
        loadDataFormations('https://dev.h2prog.com/API_TEST/formations');
    },[]);

    return(
        <>
            <TitreH1>Les formations <span className="text-info">H2PROG</span></TitreH1>
            <Container>
                <Button variant="outline-info">Toutes</Button>{' '}
                <Button variant="outline-info">PHP</Button>{' '}
                <Button variant="outline-info">Javascript</Button>{' '}
                <Button variant="outline-info">Algorithmique</Button>{' '}
                <TableFormations dataFormations = {dataFormations}/>
            </Container>
        </>
    )
};

export default Main;