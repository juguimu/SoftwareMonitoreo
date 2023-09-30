import React from 'react';
import './MonitorInfo.css';
import { ItemData } from './ItemData';


function MonitorInfo(
    {showWindow,
    dataMonitor}
   ){   
    return (
        <div className={`data-visualization ${showWindow.monitorInfoWindow}`}>
            <div> 
                <div className="table-header">
                        <p>
                            Fecha
                        </p>
                        <p>
                            V_A
                        </p>
                        <p>
                            I_A
                        </p>
                        <p>
                            PA_T 
                        </p>
                        <p>
                            EA_T_I 
                        </p>
                        <p>
                            F
                        </p>
                        <p>
                            FP_T
                        </p>


                </div>

                {dataMonitor.measures.map(value =>
                        <ItemData
                            key={value.timestamp}
                            timestamp={value.timestamp}
                            values={value.values}
                        />
                )}


            </div>
        </div>
    );
}

export {MonitorInfo};