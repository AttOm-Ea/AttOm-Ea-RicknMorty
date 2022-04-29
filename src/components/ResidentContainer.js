import { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
import './ResidentContainer.css';


function ResidentContainer({residentsPrint}) {

    let totalResident = residentsPrint.length;

    const [residentPrint, setresidentPrint] = useState([])
    const [allPag, setallPag] = useState(1);
    const [positionPag, setpositionPag] = useState(1);
    const [startPag, setstartPag] = useState(0);
    const [endPag, setendPag] = useState(9);

    function previusClick(){
        if (startPag > 0) {
            setpositionPag(positionPag - 1);
            setstartPag(startPag - 9);
            setendPag(endPag - 9);    
        }
    }

    function nextClick(){
        if (positionPag < allPag && totalResident > 9) {
            setpositionPag(positionPag + 1);
            setstartPag(startPag + 9);
            setendPag(endPag + 9);   
        }
    }

    useEffect(() => {
        setpositionPag(1);
        if(totalResident <= 9){
            setallPag(1);
        }else{
            let resulPag = totalResident / 9;
            setallPag(Math.ceil(resulPag));
        }
    }, [residentsPrint])
    
    useEffect(() => {
        if(totalResident > 0){
            let newResidents = residentsPrint.map(url => <ResidentInfo url={url} key={url}/>);
            let testcall = newResidents.slice(startPag, endPag);
            setresidentPrint(testcall);
            console.log(testcall);
        }else{
            console.log("No residents");
        }  
    }, [residentsPrint, startPag])
    
    return(
        <div className='contentCards'>
            <div className='contentCard'>
                {residentPrint}
            </div>
            <div className='pagination'>
                <button onClick={() => previusClick()}> 
                    <div className='logoGun lg1'> 
                </div> </button>
                <div className='colorPagination'> [ {startPag} - {endPag} ] </div> 
                <button onClick={() => nextClick()}> 
                    <div className='logoGun'> </div>
                </button>
            </div>
        </div>
        
    )
}

export default ResidentContainer;