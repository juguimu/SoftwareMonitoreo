import React from 'react';
import './UserInfo.css';
import { ItemGroup } from './ItemGroup';



function UserInfo(
    {userData,
    showWindow,
    setshowWindow,
    setgroupData,
    setshownavOptions,
    navbarValues,
    setnavbarValues    
    }
){

    let userState="Inactiva";
    if(userData.isActive){
        userState="activa";
    }

  

    
    return (
        <div className={`data-info ${showWindow.userInfoWindow}`}>
        <h1 className="title">Hola {`${userData.name} ${userData.lastName}!`}</h1>
        <div className="user-data">
            <p className="user-item">Actualmente su cuenta se encuentra {`${userState}`}. A continuaci&oacute;n se listan los grupos registrados:</p>
        </div>
        <div className="user-groups">
            <ul>
                {userData.groups.map(value =>
                <ItemGroup
                    key={value.name}
                    name={value.name}
                    groupId={value.groupId}
                    setshowWindow={setshowWindow}
                    clientId={userData.clientId}
                    setgroupData={setgroupData}
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

export {UserInfo};