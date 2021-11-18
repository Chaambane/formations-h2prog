import {Container, Button} from 'react-bootstrap';
import TitreH1 from '../../Components/TitreH1/TitreH1';
import TableFormations from '../../Components/TableFormations/TableFormations';
import { useState, useEffect, useRef } from 'react';
import useLoadData from '../../Hooks/useLoadData';

function Main(){
    const [dataFormations, loadDataFormations] = useLoadData();
    const [categorieFormations, setCategorieFormations] = useState("Toutes");

    const isMounted = useRef(false); // Props accessible à n'importe quel moment grace à current.

    useEffect(() => {
        loadDataFormations('https://dev.h2prog.com/API_TEST/formations');
    },[]);

    useEffect(() => {
        if(isMounted.current) { // Si le composant est monter faire l'appel à l'API
            if(categorieFormations !== "Toutes") {
                loadDataFormations('https://dev.h2prog.com/API_TEST/formations/' + categorieFormations);
            } else {
                loadDataFormations('https://dev.h2prog.com/API_TEST/formations/');
            }
        }
    },[categorieFormations]);

    useEffect(() => {
        isMounted.current = true;
    },[]);

    return(
        <>
            <TitreH1>Les formations <span className="text-info">H2PROG</span></TitreH1>
            <Container>
                <Button variant="outline-info"
                    onClick={() => setCategorieFormations('Toutes')}
                >Toutes</Button>{' '}

                <Button variant="outline-info"
                    onClick={() => setCategorieFormations('PHP')}
                >PHP</Button>{' '}

                <Button variant="outline-info"
                    onClick={() => setCategorieFormations('Javascript')}
                >Javascript</Button>{' '}

                <Button variant="outline-info"
                    onClick={() => setCategorieFormations('Algorithmique')}
                >Algorithmique</Button>{' '}

                <TableFormations dataFormations = {dataFormations}/>
            </Container>
        </>
    )
};

export default Main;