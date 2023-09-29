import React from 'react';
import './UserLogging.css';


function UserLogging(
    {userData,
    setuserData,
    showWindow,
    setshowWindow
    }
){
    let [clientId,setclientId]=React.useState('');
    let [errorLog,seterrorLog]=React.useState("inactive");
    return (
    <div className={`index-page ${showWindow.loggingWindow}`}>
        <h1 className="title">SIMoT</h1>
        <div className="client-input">
            <p>Id del cliente:</p>
            <input type="text"
            id="client-id"
            placeholder="1053779590"
            className="id-input"
            onChange={(event)=>
                {
                    setclientId(event.target.value);
                }}
            />
            <button 
            className="set-button"
            onClick={()=>{
                    const url = 'https://vu5h0yvf80.execute-api.us-west-2.amazonaws.com/client/'+clientId+'/client';
                        fetch(url).then(response => response.json()).then(data =>{
                            console.log(data);
                            setuserData(data);
                            seterrorLog("inactive");
                            setshowWindow(
                                {
                                    "loggingWindow":"inactive",
                                    "navBar":"",
                                    "userInfoWindow":"",
                                    "groupInfoWindow":"inactive",
                                    "monitorInfoWindow":"inactive"
                                }
                            );
                        }
                        )
                        .catch(() => seterrorLog("")
                        );
                        // const stringData='{"groups":[{"name":"Casa","entryDate":"2023-08-06","groupId":"74f9ae48-36ce-4b4e-bdd3-3899fa886b02"},{"name":"Casa2","entryDate":"2023-09-06","groupId":"74f9ae48-36ce-4b4e-bdd3-3899fa886b03"}],"isActive":true,"clientGroupMonitorId":"client","lastName":"Gallo","email":"memogallo@gmail.com","phone":"3104076157","name":"Guillermo","clientId":"1053779590"}';
                        // setuserData(JSON.parse(stringData));
                        // setshowWindow(
                        //     {
                        //         "loggingWindow":"inactive",
                        //         "navBar":"",
                        //         "userInfoWindow":"",
                        //         "groupInfoWindow":"inactive",
                        //         "monitorInfoWindow":"inactive"
                        //     }
                        // );
                }   
            }
            >Enviar</button>
            <p className={`id-error ${errorLog}`}>Id no encontrado!</p>
        </div>
    </div>
    );
}

export {UserLogging};