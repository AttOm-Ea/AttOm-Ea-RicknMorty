import {useEffect, useState } from 'react';
import axios from 'axios';
import './SearchBox.css';

function SearchBox({location}) {
    const [counterPage, serCounterPage] = useState(2);
    const [allLocation, setAllLocation] = useState(`https://rickandmortyapi.com/api/location?page=1`);
    const [optionSelect, setOptionSelect] = useState([]);

    useEffect(() => {
        if (counterPage < 9) {
            axios.get(allLocation)
            .then((res) => {
                let page = res.data.results.map(x => <option key={x.id} > { x.name } </option>)
                setOptionSelect([...optionSelect, page]);
                serCounterPage( counterPage + 1);
                setAllLocation(`https://rickandmortyapi.com/api/location?page=${counterPage}`)
            }
            )
            .catch((error) => { console.log(error); });    
        }
    }, [allLocation]);

    return(
        <div className='contentInput'>
            <input tipe="text" className='inputText' list="listImput" placeholder='Type and select a location . . .' onChange={(e)=>location(e.target.value)}/>
            <datalist id="listImput">
                {optionSelect}
            </datalist>
        </div>
    )
}

export default SearchBox;