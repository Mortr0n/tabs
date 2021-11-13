import React from "react";
import '../App.css';
import Tab from './Tab';

const Tabs = (props) => {
    const {allTabs, thisTab, setThisTab} = props;

    const showTab = (index) => {
        return (index === thisTab ? "selected" : "");
    }

    return(
        <ul>
            {allTabs.map((tab, index) => {
                return (
                    <Tab selectedClass={`${showTab(index)}`}
                    setThisTab={setThisTab}
                    tab={tab}
                    key={index}
                    thisTab={thisTab} />
                );
            })}
        </ul>
        

    );


}

export default Tabs;