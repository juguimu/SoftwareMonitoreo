import React from 'react';
import './UserInfo.css';


function UserInfo(
    {userData,
    showWindow,
    setshowWindow}
){

    let userState="Inactivo";
    if(userData.isActive){
        userState="Activo";
    }
    
    return (
        <div className={`data-info ${showWindow.userInfoWindow}`}>
        <h1 className="title">Datos del Usuario</h1>
        <div className="user-data">
            <p className="user-item">Nombre:</p>
            <p className="user-name value">{userData.name +" " + userData.lastName}</p>
            <p className="user-item">Identificacion:</p>
            <p className="user-id value">{userData.clientId}</p>
            <p className="user-item">Estatus:</p>
            <p className="user-status value">{userState}</p>
            <p className="user-item">email:</p>
            <p className="user-email value">{userData.email}</p>
            <p className="user-item">Telefono:</p>
            <p className="user-phone value">{userData.phone}</p>
        </div>
        <div className="user-groups">
            <p>Grupos</p>
            <ul>
                <li>
                    <a href="/" className="item-group">Casa</a>
                </li>
            </ul>
        </div>

    </div>
   
    );
}

export {UserInfo};