import React, { Component } from 'react'

//importing shortid tool *
import shortid from 'shortid';

import SearchBar from '../components/SearchBar'
import DataItemCard from '../components/DataItemCard'

class Data extends Component {

    render() {

        const { data, reasonSelector, setReasonSelectorState, actionSelector, setActionSelectorState, filterData } = this.props

        return (

            <div className='data-main'>
                <SearchBar setReasonSelectorState={setReasonSelectorState} reasonSelector={reasonSelector}
                    actionSelector={actionSelector} setActionSelectorState={setActionSelectorState} filterData={filterData} />
                <div className='data-container'>
                    {
                        //Individual data components are rendered through a loop
                        data.map(dataItem =>
                            <DataItemCard key={shortid.generate()} dataItem={dataItem} />
                        )
                        // * shortid is a tool used to create unique keys for elements with no id
                        //npm install shortid --save
                        //Import into class file used - import shortid from 'shortid';
                    }
                </div>
            </div>
        )
    }
}

export default Data