import { propTypes } from "react-bootstrap/esm/Image"

function Bouton(props) {
    return(
        <button className="btn btn-outline-info p-2 me-2 fw-bold" onClick={props.clic}>
            {props.children}
        </button>
    )
};

export default Bouton