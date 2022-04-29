import './LocationInfo.css';


function LocationInfo({nameLoc, typeLoc, dimensionLoc, residentsLoc}) {
    
    return(
        <div className="locationBox">
            <div>
                <span> Location : </span> {nameLoc}
            </div>
            <div className='contentItemsLocation'>
                <div>
                    <span> Type : </span> {typeLoc}
                </div>
                <div>
                    <span> Dimension : </span> {dimensionLoc}
                </div>
                <div>
                    <span> Population : </span> {residentsLoc}
                </div>
            </div>
        </div>
    )
}

export default LocationInfo;