import {Container, Button} from 'react-bootstrap';
import TitreH1 from '../../Components/TitreH1/TitreH1';
import TableFormations from '../../Components/TableFormations/TableFormations';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Main(){
    const [dataApi, setDataApi] = useState(null);

    useEffect(() => {
        axios.get('https://dev.h2prog.com/API_TEST/formations')
            .then(response => {
                // console.log(response);
                setDataApi(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    },[]);

    return(
        <>
            <TitreH1>Les formations <span className="text-info">H2PROG</span></TitreH1>
            <Container>
                <Button variant="outline-info">Toutes</Button>{' '}
                <Button variant="outline-info">PHP</Button>{' '}
                <Button variant="outline-info">Javascript</Button>{' '}
                <Button variant="outline-info">Algorithmique</Button>{' '}
                <TableFormations dataApi = {dataApi}/>
            </Container>
        </>
    )
};

export default Main;