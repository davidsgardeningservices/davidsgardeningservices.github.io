import map from '../images/Medway-Map.png'
import './Location.css'

export default function Location() {
    return (
        <div>
            <h3>Location</h3>
            <div className='location'>
            </div>
            <div className='location-list-container'>
                <p id="location-list">We are a local landscaping business, providing services to the area surrounding the Medway Towns,
                    including:
                    <br />
                    Strood, Rochester, Chatham, Gillingham, Rainham, Cliffe,
                    Allhallows, Halling, Maidstone, Newington, Sittingbourne</p>
            </div>
            <div className='map-container'>
                <img className='map' src={map} alt="" />
            </div>
        </div>
    )
}