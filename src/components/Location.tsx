import map from '../images/Medway-Map.png'
import './Location.css'

export default function Location() {
    return (
        <div>
            <h3>Location</h3>
            <p id="location-text">We provide local landscaping services within the Medway Towns and surrounding areas.</p>
            <div id='map'>
                <img src={map} alt="" />
            </div>
            <p id='location-list'>Coverage</p>
            <p id='location-list'>Medway Towns &#40;Strood, Rochester, Chatham, Gillingham, Rainham&#41; Cliffe,
                Allhallows, Halling, Maidstone, Newington, Sittingbourne, and adjacent areas.</p>
        </div>
    )
}