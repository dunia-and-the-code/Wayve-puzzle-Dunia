import React, { Component } from 'react'

class DataItemCard extends Component {

    render() {

        const { dataItem } = this.props

        return (

            <div className='dataItem-card'>
                <div className='details-container'>
                    <p className='details'>
                        Action : {dataItem.action}
                    </p>
                    <p className='details'>
                        Reason : {dataItem.reason}
                    </p>
                </div >
                <div className='location'>
                    <p>Adress : </p>
                    <p>Longitude : {dataItem.long}</p>
                    <p>Latitude : {dataItem.lat}</p>
                </div>
            </div>
        )
    }
}

export default DataItemCard