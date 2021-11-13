import React from 'react';
import '../App.css';

const Tab = (props) => {
    const {thisTab, setThisTab, tab, index, selectedClass } = props;



    return(
        <div>
            <div className={`tab-style ${selectedClass}`} 
            onClick={(e) => setThisTab(index)}>
                
            {tab.label}

            </div>
            {index == thisTab && (
                <textarea cols="50" rows="20"
                style={{display: "block"}}
                value={tab.content}
                />
            )}

            
        </div>


    )

}

export default Tab;