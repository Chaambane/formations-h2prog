import { useState } from 'react';
import axios from 'axios';

// Fonction dédié (Hooks Perso)
function useLoadData() {
    const [lesData, setLesData] = useState(null);

    const loadData = (route) => {
        axios.get(route)
        .then(response => {
            // console.log(response);
            setLesData(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return [lesData, loadData] // je retourne les datas et la fonction qui permet de les charger.
}

export default useLoadData;