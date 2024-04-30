import React, { Fragment } from 'react';
import ChartBarComponent from './ChartBarComponent';

import '../componentStyling/Chart.css';

const ChartComponent = ({ dataItems }) => {
    
    const dataValues = dataItems.map(dataItem => dataItem.value);
    const max = Math.max(...dataValues);

    const getMaxMonth = () => {
        const filteredDataItems = dataItems.filter(data => data.value === max);
        const maxMonth = filteredDataItems.map(data => data.label).join(', ');
        return maxMonth;
    }

    return (
        <Fragment>
            <div className='chart'>
                {
                    dataItems
                        .map(dataItem => (
                            <ChartBarComponent
                                key={dataItem.label}
                                value={dataItem.value}
                                maxValue={max}
                                label={dataItem.label} />))
                }
            </div>
            {
                max !== 0 &&
                    <div className='max-expense'>
                        {
                            'Max expenses in month - ' + getMaxMonth()
                        }
                    </div>
            }
        </Fragment>
    )
}

export default ChartComponent;
