import React from 'react';
import './App.css';
import { UserLogging } from './UserLogging/';
import { UserInfo } from './UserInfo/';
import { UserNav } from './UserNav/';
import { GroupInfo } from './GroupInfo';



function App() {
  const [showWindow,setshowWindow]=React.useState(
    {
      "loggingWindow":"",
      "navBar":"inactive",
      "userInfoWindow":"inactive",
      "groupInfoWindow":"inactive",
      "monitorInfoWindow":"inactive"
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
  const [groupData,setgroupData]=React.useState(
    {"isActive":true,
    "monitors":[{"name":"","entryDate":"","monitorId":""}],
    "clientGroupMonitorId":"",
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
        setgroupData={setgroupData}
      />

      <GroupInfo 
        showWindow={showWindow}
        setshowWindow={setshowWindow}
        groupData={groupData}
      />
     
    </>
  );
}

export default App;
