import React from 'react';
import './App.css';
import { UserLogging } from './UserLogging/';
import { UserInfo } from './UserInfo/';
import { UserNav } from './UserNav/';



function App() {
  const [showWindow,setshowWindow]=React.useState(
    {
      "loggingWindow":"",
      "navBar":"inactive",
      "userInfoWindow":"inactive"
    }
  );
  const [userData,setuserData]=React.useState(
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
  return (
    <>
      <UserNav
        showWindow={showWindow}
        setshowWindow={setshowWindow}
      />
      <UserLogging
        userData={userData}
        setuserData={setuserData}
        showWindow={showWindow}
        setshowWindow={setshowWindow}
      />
    
      <UserInfo
        userData={userData}
        showWindow={showWindow}
        setshowWindow={setshowWindow}
      />
     
    </>
  );
}

export default App;
