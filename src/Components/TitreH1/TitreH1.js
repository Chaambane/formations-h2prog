import React from 'react';

function TitreH1(props) {
    return(
        <div className="mt-1 container-fluid">
            <h1 fluid className="p-2 bg-dark fw-bold text-center rounded text-white">
                {props.children}
            </h1>
        </div>
    )
}

export default TitreH1;