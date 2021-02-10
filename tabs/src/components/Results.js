import React from 'react';

const Results = (props) => {
    const { allTabs, currentTabIndex } = props;

    return(
        <div className="results">
            { allTabs[currentTabIndex].context }
        </div>
    )
}
export default Results;