import React, { Component } from 'react'

class HomePage extends Component {

    render() {

        return (
            //Not rendering at the moment
            <div className='homepage'>
                <div className='homepage-image'>
                    <img alt='car' src={require('../Images/wayve-car.jpg')} />
                </div>
            </div>
        )
    }
}

export default HomePage 