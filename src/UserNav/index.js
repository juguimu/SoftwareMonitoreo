import React from 'react';
import './UserNav.css';
import { MobileIcon } from './MobileIcon';


function UserNav(
    {showWindow,
    setshowWindow,
    setuserData,
    setgroupData,
    setdataMonitor,
    shownavOptions,
    setshownavOptions,
    navbarValues
    }
){ 
    return (
    <nav className={`user-nav ${showWindow.navBar}`}>
        <div className="left-nav">
            <p>SIMoT</p>            
        </div>

        

        <div className={`mobile-box ${shownavOptions.boxMenu}`}>
            <ul>
                <li>
                    <a className="nav-user"
                    onClick={()=>{
                        setshowWindow(
                            {
                            "loggingWindow":"inactive",
                            "navBar":"",
                            "userInfoWindow":"",
                            "groupInfoWindow":"inactive",
                            "monitorInfoWindow":"inactive"
                            }
                        );

                        setshownavOptions(
                            {
                                ...shownavOptions,
                                "boxMenu":"inactive"
                            } 
                        );

                    }}
                    >{navbarValues.userName}</a>
                </li>


                <li>
                    <a className={`nav-group ${shownavOptions.navGroup}`}
                    onClick={()=>{
                        setshowWindow(
                            {
                            "loggingWindow":"inactive",
                            "navBar":"",
                            "userInfoWindow":"inactive",
                            "groupInfoWindow":"",
                            "monitorInfoWindow":"inactive"
                            }
                        );

                        setshownavOptions(
                            {
                                ...shownavOptions,
                                "boxMenu":"inactive"
                            } 
                        );

                    }}
                    >{navbarValues.groupName}</a>
                </li>
                <li>
                    <a className={`nav-monitors ${shownavOptions.navMonitors}`}
                    onClick={()=>{
                        setshowWindow(
                            {
                            "loggingWindow":"inactive",
                            "navBar":"",
                            "userInfoWindow":"inactive",
                            "groupInfoWindow":"inactive",
                            "monitorInfoWindow":""
                            }
                        );

                        setshownavOptions(
                            {
                                ...shownavOptions,
                                "boxMenu":"inactive"
                            } 
                        );

                    }}
                    >{navbarValues.monitorName}</a>
                </li>
                <li>
                    <a className="nav-salir"
                    onClick={()=>{
                        setuserData(
                            {"groups":[{
                            "name":"","entryDate":"","groupId":""}],
                            "isActive":0,
                            "clientGroupMonitorId":"",
                            "lastName":"",
                            "email":"",
                            "phone":"",
                            "name":"",
                            "clientId":""}
                        );
                        setgroupData(
                            {"isActive":true,
                            "monitors":[{"name":"","entryDate":"","monitorId":""}],
                            "clientGroupMonitorId":"",
                            "clientId":""}
                        );
                        setdataMonitor(
                            {"variables":["V_A","I_A","PA_A","EA_A_I","F","FP_A"],
                            "isActive":0,
                            "clientGroupMonitorId":"74f9ae48-36ce-4b4e-bdd3-3899fa886b02.796b2cc2-b848-4e16-bf17-ff506b5d0602",
                            "measures":[{"timestamp":0,"values":[0,0,0,0,0,0]}],
                            "clientId":"1053779590"}
                        );
                        setshowWindow(
                            {
                            "loggingWindow":"",
                            "navBar":"inactive",
                            "userInfoWindow":"inactive",
                            "groupInfoWindow":"inactive",
                            "monitorInfoWindow":"inactive"
                            }
                        );
                        setshownavOptions(
                            {
                                "navGroup":"inactive",
                                "navMonitors":"inactive",
                                "boxMenu":"inactive"
                            }                          
                        );
                    }}
                    >Salir</a>
                </li>
            </ul>
        </div>

        <div className='right-icon'
            onClick={()=>{
                if(shownavOptions.boxMenu==""){
                    setshownavOptions(
                        {
                            ...shownavOptions,
                            "boxMenu":"inactive"
                        } 
                    );
                }
                else{
                    setshownavOptions(
                        {
                            ...shownavOptions,
                            "boxMenu":""
                        } 
                    );

                }
            }}
            ><MobileIcon/>
        </div>

        <div className="right-nav">
            <ul>
                <li>
                    <a className="nav-user"
                    onClick={()=>{
                        setshowWindow(
                            {
                            "loggingWindow":"inactive",
                            "navBar":"",
                            "userInfoWindow":"",
                            "groupInfoWindow":"inactive",
                            "monitorInfoWindow":"inactive"
                            }
                        );

                    }}
                    >{navbarValues.userName}</a>
                </li>


                <li>
                    <a className={`nav-group ${shownavOptions.navGroup}`}
                    onClick={()=>{
                        setshowWindow(
                            {
                            "loggingWindow":"inactive",
                            "navBar":"",
                            "userInfoWindow":"inactive",
                            "groupInfoWindow":"",
                            "monitorInfoWindow":"inactive"
                            }
                        );

                        

                    }}
                    >{navbarValues.groupName}</a>
                </li>
                <li>
                    <a className={`nav-monitors ${shownavOptions.navMonitors}`}
                    onClick={()=>{
                        setshowWindow(
                            {
                            "loggingWindow":"inactive",
                            "navBar":"",
                            "userInfoWindow":"inactive",
                            "groupInfoWindow":"inactive",
                            "monitorInfoWindow":""
                            }
                        );

                        

                    }}
                    >{navbarValues.monitorName}</a>
                </li>
                <li>
                    <a className="nav-salir"
                    onClick={()=>{
                        setuserData(
                            {"groups":[{
                            "name":"","entryDate":"","groupId":""}],
                            "isActive":0,
                            "clientGroupMonitorId":"",
                            "lastName":"",
                            "email":"",
                            "phone":"",
                            "name":"",
                            "clientId":""}
                        );
                        setgroupData(
                            {"isActive":true,
                            "monitors":[{"name":"","entryDate":"","monitorId":""}],
                            "clientGroupMonitorId":"",
                            "clientId":""}
                        );
                        setdataMonitor(
                            {"variables":["V_A","I_A","PA_A","EA_A_I","F","FP_A"],
                            "isActive":0,
                            "clientGroupMonitorId":"74f9ae48-36ce-4b4e-bdd3-3899fa886b02.796b2cc2-b848-4e16-bf17-ff506b5d0602",
                            "measures":[{"timestamp":0,"values":[0,0,0,0,0,0]}],
                            "clientId":"1053779590"}
                        );
                        setshowWindow(
                            {
                            "loggingWindow":"",
                            "navBar":"inactive",
                            "userInfoWindow":"inactive",
                            "groupInfoWindow":"inactive",
                            "monitorInfoWindow":"inactive"
                            }
                        );
                        setshownavOptions(
                            {
                                "navGroup":"inactive",
                                "navMonitors":"inactive",
                                "boxMenu":"inactive"
                            }                          
                        );
                    }}
                    >Salir</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export {UserNav};