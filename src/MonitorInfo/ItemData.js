import React from 'react';
import './MonitorInfo.css';


function ItemData(
    props
){   
    return (
        <div className="table-content">
                    <p>
                        {(props.timestamp instanceof Date) ? props.timestamp.toLocaleDateString() : new Date(props.timestamp*1000).toLocaleDateString()}
                    </p>
                    <p>
                        {props.values[0]}
                    </p>
                    <p>
                        {props.values[1]}
                    </p>
                    <p>
                        {props.values[2]}
                    </p>
                    <p>
                        {props.values[3]}
                    </p>
                    <p>
                        {props.values[4]}
                    </p>
                    <p>
                        {props.values[5]}
                    </p>
        </div>
        
    );
}

export {ItemData};