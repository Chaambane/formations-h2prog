import { Container, Table } from 'react-bootstrap';

function TableFormations(props) {
    return(
        <Container className="text-center mt-4">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Numéro</th>
                        <th>Libellé</th>
                        <th>Description</th>
                        <th>Catégorie</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.dataApi &&
                    props.dataApi.map(formation => {
                        return(
                            <tr key="formation.id">
                                <td>{formation.id}</td>
                                <td>{formation.libelle}</td>
                                <td>{formation.description}</td>
                                <td>{formation.categorie}</td>
                                <td>
                                    <img src={formation.image} alt={formation.libelle} width="100px" />
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </Container>
    )
};

export default TableFormations;