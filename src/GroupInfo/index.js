import React from 'react';
import './GroupInfo.css';
import { ItemMonitor } from './ItemMonitor';


function GroupInfo(
    {showWindow,
    setshowWindow,
    groupData,
    setdataMonitor,
    setshownavOptions,
    navbarValues,
    setnavbarValues
}
){   
    return (
        
        <div className={`data-monitor ${showWindow.groupInfoWindow}`}>
            <h1 className="title">Monitores</h1>
            <div className="user-monitor">
                <ul>
                    {groupData.monitors.map(value =>
                        <ItemMonitor
                            key={value.name}
                            name={value.name}
                            monitorId={value.monitorId}
                            setshowWindow={setshowWindow}
                            groupData={groupData}
                            setdataMonitor={setdataMonitor}
                            setshownavOptions={setshownavOptions}
                            navbarValues={navbarValues}
                            setnavbarValues={setnavbarValues}
                        />
                    )}
                </ul>
                
            </div>
        </div>  
    );
}

export {GroupInfo};