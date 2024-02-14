import React from 'react';
import './GroupInfo.css';


function ItemMonitor(
    props
){   
    return (
        
        <li className="items">
            <span className="item-monitor" onClick={()=>
            {
                
                    
                
                const stringmonitorData={"variables":["V_A","I_A","PA_A","EA_A_I","F","FP_A"],"isActive":true,"clientGroupMonitorId":"74f9ae48-36ce-4b4e-bdd3-3899fa886b02.796b2cc2-b848-4e16-bf17-ff506b5d0602",
                "measures":[
                    {"timestamp":1695008874,"values":[130.3,0,0.5,0.006,59.9,1]},
                    {"timestamp":1695012471,"values":[131.3,0,0.5,0.062,59.9,1]},
                    {"timestamp":1695016056,"values":[131.3,1.45,118.9,0.115,59.9,0.62]},
                    {"timestamp":1695019646,"values":[132.1,0,0.6,0.157,59.9,1]},
                    {"timestamp":1695023232,"values":[131.6,1.436,115.9,0.209,60,0.61]},
                    {"timestamp":1695026813,"values":[131.8,0,0.6,0.286,59.9,1]},
                    {"timestamp":1695030410,"values":[131.1,0,0.6,0.371,60,1]},
                    {"timestamp":1695033992,"values":[129.9,0,0.5,0.411,59.9,1]},
                    {"timestamp":1695037583,"values":[127.1,1.388,115.7,0.462,60,0.6599999]},
                    {"timestamp":1695041170,"values":[126.4,0,0.5,0.516,60,1]},
                    {"timestamp":1695044752,"values":[126.5,1.562,145.7,0.575,60,0.74]},
                    {"timestamp":1695048340,"values":[125.9,0,0.6,0.632,59.9,1]}
                ],
                "clientId":"1053779590"}; 
                
                // let startDate = stringmonitorData.measures[0].timestamp;
                // let endDate = stringmonitorData.measures[
                //     stringmonitorData.measures.length-1].timestamp;
                
                // props.setStartDate(new Date(startDate*1000));
                // props.setEndDate(new Date(endDate*1000));

                // props.setdataFilterMonitor(
                //     stringmonitorData.measures.filter((value) => 
                //     value.timestamp <= endDate && 
                //         value.timestamp >= startDate)
                // );

                // props.setdataMonitor(stringmonitorData);
                
                //         // console.log(data);
                // props.setshowWindow(
                //     {
                //         "loggingWindow":"inactive",
                //         "navBar":"",
                //         "userInfoWindow":"inactive",
                //         "groupInfoWindow":"inactive",
                //         "monitorInfoWindow":""
                //     }
                // );
                // props.setshownavOptions(
                //     {
                //         "navGroup":"",
                //         "navMonitors":""
                //     }                          
                // ); 

                // props.setnavbarValues({...props.navbarValues,
                //     "monitorName": props.name
                // });
                console.log(props.groupData.clientId);
                console.log(props.groupData.clientGroupMonitorId);
                console.log(props.monitorId);
                console.log(stringmonitorData);

                let startDate = new Date();
                let endDate = new Date();
                startDate.setHours(-(24-endDate.getHours()));
                //startDate.setMonth(0);
                console.log(startDate);
                console.log(endDate.getDay());

                
                const url = 'https://vu5h0yvf80.execute-api.us-west-2.amazonaws.com/client/'+props.groupData.clientId+'/'+props.groupData.clientGroupMonitorId+'.'
                                                                                            +props.monitorId+
                                                                                            '?fd='+`${startDate.getFullYear()}-`
                                                                                            +`0${startDate.getMonth()+1}`.slice(-2)+'-'
                                                                                            +`0${startDate.getDate()}`.slice(-2)
                                                                                            // +'T'
                                                                                            // +`0${startDate.getHours()}:`.slice(-3)
                                                                                            // +`0${startDate.getMinutes()}:`.slice(-3)
                                                                                            // +`0${startDate.getSeconds()}`.slice(-2)
                                                                                            +'&ld='
                                                                                            +`${endDate.getFullYear()}-`
                                                                                            +`0${endDate.getMonth()+1}`.slice(-2)+'-'
                                                                                            +`0${endDate.getDate()}`.slice(-2);
                                                                                            // +'T'
                                                                                            // +`0${endDate.getHours()}:`.slice(-3)
                                                                                            // +`0${endDate.getMinutes()}:`.slice(-3)
                                                                                            // +`0${endDate.getSeconds()}`.slice(-2);

                console.log(url);                                                                            
                    fetch(url).then(response => response.json()).then(data =>{
                        console.log(data);
                        //let endDate = data.measures[0].timestamp;
                        //let startDate = data.measures[
                        //data.measures.length-1].timestamp;
                        console.log(endDate);
                        console.log(startDate);
                        props.setStartDate(startDate);
                        props.setEndDate(endDate);
                        console.log(data.measures.reverse());
                        props.setdataFilterMonitor(
                            data.measures
                            // .filter((value) => 
                            // value.timestamp <= endDate && 
                            // value.timestamp >= startDate)
                            );
                        
                        
                        
                        
                        
                        props.setdataMonitor(data);
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
                    }
                    );
            }
            }
            
            >{props.name}</span>
        </li> 
    );
}

export {ItemMonitor};