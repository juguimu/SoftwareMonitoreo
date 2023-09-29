import React from 'react';
import './App.css';
import { UserLogging } from './UserLogging/';
import { UserInfo } from './UserInfo/';
import { UserNav } from './UserNav/';
import { GroupInfo } from './GroupInfo';
import { MonitorInfo } from './MonitorInfo';

 

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

  const [dataMonitor,setdataMonitor]=React.useState(
    {
      "variables":["V_A","I_A","PA_A","EA_A_I","F","FP_A"],
      "isActive":0,
      "clientGroupMonitorId":"74f9ae48-36ce-4b4e-bdd3-3899fa886b02.796b2cc2-b848-4e16-bf17-ff506b5d0602",
      "measures":[{"timestamp":0,"values":[0,0,0,0,0,0]}],
      "clientId":"1053779590"
    }
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
        setdataMonitor={setdataMonitor}
      />

      <MonitorInfo
        showWindow={showWindow}
        dataMonitor={dataMonitor}
      />
     
    </>
  );
}

export default App;
