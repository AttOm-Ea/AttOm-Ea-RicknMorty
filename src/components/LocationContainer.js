import {useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ResidentContainer from './ResidentContainer';
import axios from 'axios';
import './LocationContainer.css';
import LocationInfo from './LocationInfo';

function LocationContainer() {
    const randomUbi = Math.round(Math.random()*126);
    const [callApiRan, setcallApiRan] = useState(`https://rickandmortyapi.com/api/location/${randomUbi}`);
    const [callApiNam, setcallApiNam] = useState();
    const [newCall, setnewCall] = useState(false);

    const [nameLoc, setnameLoc] = useState("unknown");
    const [typeLoc, settypeLoc] = useState("unknown");
    const [dimensionLoc, setdimensionLoc] = useState("unknown");
    const [residentsLoc, setresidentsLoc] = useState("unknown");
    const [residentsPrint, setresidentsPrint] = useState({});

    function ubiLocation(ubi) {
        setcallApiNam(`https://rickandmortyapi.com/api/location/?name=${ubi}`)
        setnewCall(true);
    } 

    useEffect(() => {
        if (!newCall) {
            axios.get(callApiRan)
            .then((res) => {
                let data = res.data;
                setnameLoc(data.name);
                settypeLoc(data.type);
                setdimensionLoc(data.dimension);   
                setresidentsLoc(data.residents.length);
                setresidentsPrint(data.residents);
                }
            )
            .catch((error) =>{ 
                console.log(error); 
            } );      
        }else{
            axios.get(callApiNam)
            .then((res) => {
                let data = res.data.results[0];
                setnameLoc(data.name);
                settypeLoc(data.type);
                setdimensionLoc(data.dimension);   
                setresidentsLoc(data.residents.length);
                setresidentsPrint(data.residents);
                }
            )
            .catch((error) =>{ 
                console.log(error); 
            } );
        }
        
    },[callApiNam]);

    return(
        <div className='containerLocation'>
            <div className='navApp'>
                <SearchBox location={ubiLocation}/>
                <div className='logoRicknMorty'> </div>
                <div className='logoBox'>
                    <div className='logo'> </div>
                </div>
            </div>
            <LocationInfo nameLoc={nameLoc} typeLoc={typeLoc} dimensionLoc={dimensionLoc} residentsLoc={residentsLoc}/>
            <ResidentContainer residentsPrint={residentsPrint}/>
        </div>
    )
}

export default LocationContainer;