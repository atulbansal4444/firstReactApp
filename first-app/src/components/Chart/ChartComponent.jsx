import React from 'react';
import ChartBarComponent from './ChartBarComponent';

import '../componentStyling/Chart.css';

const ChartComponent = (props) => {
    const dataValues = props.dataItems.map(dataItem => dataItem.value);
    const max = Math.max(...dataValues);

    return (
        <div className='chart'>
            {
                props.dataItems
                    .map(dataItem => (
                        <ChartBarComponent
                            key={dataItem.label}
                            value={dataItem.value}
                            maxValue={max}
                            label={dataItem.label} />))
            }
        </div>
    )
}

export default ChartComponent;
