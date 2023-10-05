import React from 'react';
import './GroupInfo.css';


function ItemMonitor(
    props
){   
    return (
        
        <li className="items">
            <span className="item-monitor" onClick={()=>
            {
                
                    
                
                const stringmonitorData={"variables":["V_A","I_A","PA_A","EA_A_I","F","FP_A"],"isActive":true,"clientGroupMonitorId":"74f9ae48-36ce-4b4e-bdd3-3899fa886b02.796b2cc2-b848-4e16-bf17-ff506b5d0602","measures":[{"timestamp":1695008874,"values":[130.3,0,0.5,0.006,59.9,1]},{"timestamp":1695012471,"values":[131.3,0,0.5,0.062,59.9,1]},{"timestamp":1695016056,"values":[131.3,1.45,118.9,0.115,59.9,0.62]}],"clientId":"1053779590"};    
                props.setdataMonitor(stringmonitorData);
                
                        // console.log(data);
                props.setshowWindow(
                    {
                        "loggingWindow":"inactive",
                        "navBar":"",
                        "userInfoWindow":"inactive",
                        "groupInfoWindow":"inactive",
                        "monitorInfoWindow":""
                    }
                );
                props.setshownavOptions(
                    {
                        "navGroup":"",
                        "navMonitors":""
                    }                          
                ); 

                props.setnavbarValues({...props.navbarValues,
                    "monitorName": props.name
                });


                // const url = 'https://vu5h0yvf80.execute-api.us-west-2.amazonaws.com/client/'+props.groupData.clientId+'/'+props.groupData.clientGroupMonitorId+'.'+props.monitorId;
                //     fetch(url).then(response => response.json()).then(data =>{
                //         props.setdataMonitor(data);
                //         // console.log(data);
                //         props.setshowWindow(
                //             {
                //                 "loggingWindow":"inactive",
                //                 "navBar":"",
                //                 "userInfoWindow":"inactive",
                //                 "groupInfoWindow":"inactive",
                //                 "monitorInfoWindow":""
                //             }
                //         );
                //         props.setshownavOptions(
                //             {
                //                 "navGroup":"",
                //                 "navMonitors":""
                //             }                          
                //         );                                            
                //     }
                //     );
            }
            }
            
            >{props.name}</span>
        </li> 
    );
}

export {ItemMonitor};