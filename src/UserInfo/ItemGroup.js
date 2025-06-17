import React from 'react';
import './UserInfo.css';


function ItemGroup(
    props
){   
    return (
        
                <li>
                    <a className="item-group" 
                    onClick={()=>
                    {
                        
                        const stringgroupData={"isActive":true,"monitors":[{"name":"Monitor prueba","entryDate":"2023-08-06","monitorId":"796b2cc2-b848-4e16-bf17-ff506b5d0602"},{"name":"Monitor prueba 2","entryDate":"2023-08-06","monitorId":"796b2cc2-b848-4e16-bf17-ff506b5d0602"}],"clientGroupMonitorId":"74f9ae48-36ce-4b4e-bdd3-3899fa886b02","clientId":"123456"};    
                        props.setgroupData(stringgroupData);
                        
                        props.setshowWindow(
                            {
                                "loggingWindow":"inactive",
                                "navBar":"",
                                "userInfoWindow":"inactive",
                                "groupInfoWindow":"",
                                "monitorInfoWindow":"inactive"
                            }                           
                        );
                        props.setshownavOptions(
                            {
                                "navGroup":"",
                                "navMonitors":"inactive"
                            }
                        );

                        // props.setnavbarValues({...props.navbarValues,
                        //         "groupName":props.name
                        // });

                        // const url = 'https://vu5h0yvf80.execute-api.us-west-2.amazonaws.com/client/'+props.clientId+'/'+props.groupId;
                        //     fetch(url).then(response => response.json()).then(data =>{
                        //         console.log(data);
                        //         props.setgroupData(data);
                        //         props.setshowWindow(
                        //             {
                        //                 "loggingWindow":"inactive",
                        //                 "navBar":"",
                        //                 "userInfoWindow":"inactive",
                        //                 "groupInfoWindow":"",
                        //                 "monitorInfoWindow":"inactive"
                        //             }                           
                        //         );
                        //         props.setshownavOptions(
                        //             {
                        //                 "navGroup":"",
                        //                 "navMonitors":"inactive",
                        //                 "boxMenu":"inactive"
                        //             }
                        //         );
                        //         props.setnavbarValues({...props.navbarValues,
                        //             "groupName":props.name
                        //         });
                                
                                // console.log(data);                                            
                            //}
                           // );
                    }
                    }>{props.name}</a>
                </li>  
    );
}

export {ItemGroup};