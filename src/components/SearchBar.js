import React, { Component } from 'react'

class SearchBar extends Component {

    render() {

        const { reasonSelector, actionSelector, setReasonSelectorState, setActionSelectorState } = this.props

        return (
            <div>
                <p className='search-title'>Filter your search</p>
                <div className="filter">
                    <div className='selector1'>
                        <label>Reason </label>
                        <select
                            //Filter selection is passed to setState function in App.js
                            className="selector"
                            onChange={(e) => setReasonSelectorState(e.target.value)}
                            value={reasonSelector}
                        >
                            <option defaultValue="all">All</option>
                            <option value="Cyclist">Cyclist</option>
                            <option value="ParkedVehicle">Parked vehicle</option>
                            <option value="Pedestrian">Pedestrian</option>
                            <option value="Roadworks">Roadworks</option>
                            <option value="Signal">Signal</option>
                            <option value="Vehicle">Vehicle</option>
                            <option value="OtherDynamic">Other dynamic</option>
                            <option value="OtherStatic">Other static</option>
                        </select>
                    </div>
                    <div className='selector2'>
                        <label>Action </label>
                        <select
                            //Filter selection is passed to setState function in App.js
                            className="selector2"
                            onChange={(e) => setActionSelectorState(e.target.value)}
                            value={actionSelector}
                        >
                            <option defaultValue="all">All</option>
                            <option value="EmergencyManeuver">Emergency Maneuver</option>
                            <option value="Follow">Follow</option>
                            <option value="GiveWay">Give way</option>
                            <option value="Join">Join</option>
                            <option value="Negotiation">Negotiation</option>
                            <option value="Overtake">Overtake</option>
                            <option value="Park">Park</option>
                            <option value="Stop">Stop</option>
                            <option value="Undertake">Undertake</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar