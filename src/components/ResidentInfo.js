import axios from 'axios';
import { useEffect, useState } from 'react';
import './ResidentInfo.css';

function ResidentInfo({url}) {

    const [namePerson, setnamePerson] = useState("");
    const [imgPerson, setimgPerson] = useState("");
    const [statusPerson, setstatusPerson] = useState("");
    const [originPerson, setoriginPerson] = useState("");
    const [episodesPerson, setepisodesPerson] = useState("");

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                let person = res.data;
                setnamePerson(person.name);
                setimgPerson(person.image);
                setstatusPerson(person.status);
                setoriginPerson(person.origin.name);
                setepisodesPerson(person.episode.length);
            }
            )
            .catch((error) => { console.log(error); });    
    }, [url])

    return(
        <div className="bord">
            <div className='titleCard'>
                <img src={imgPerson} alt={namePerson}/>
            </div>
            <div className='bodyCard'> 
                <div className='contentOrigin'> Origin: <span> {originPerson} </span> </div>
                <div className='contentName'> {namePerson}  </div>
                <div className='contentItems'>
                    <div> Status: <span> {statusPerson} </span> </div>
                    <div> Episodes: <span> {episodesPerson} </span> </div>
                </div>
            </div>
        </div>
    )
}

export default ResidentInfo;