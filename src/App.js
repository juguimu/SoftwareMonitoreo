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
  
  const [shownavOptions,setshownavOptions]=React.useState(
    {
      "navGroup":"inactive",
      "navMonitors":"inactive",
      "boxMenu":"inactive"
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
      "clientId":"1053779590",
      "measures":[{"timestamp":0,"values":[0,0,0,0,0,0]}]
    }
  );



  
  const [navbarValues,setnavbarValues]=React.useState(
    {
      "userName":"",
      "groupName":"",
      "monitorName":""
    }
  );

  const [startDate, setStartDate] = React.useState(
    new Date(dataMonitor.measures[0].timestamp*1000)
    );
  const [endDate, setEndDate] = React.useState(
    new Date(dataMonitor.measures[dataMonitor.measures.length-1].timestamp*1000)
    );

    const [dataFilterMonitor,setdataFilterMonitor] = React.useState(
      dataMonitor.measures.filter((value) => value.timestamp <= endDate.getTime()/1000 && value.timestamp >= startDate.getTime()/1000 )
    );


  return (
    <>
      <UserNav
        showWindow={showWindow}
        setshowWindow={setshowWindow}
        setuserData={setuserData}
        setgroupData={setgroupData}
        setdataMonitor={setdataMonitor}
        shownavOptions={shownavOptions}
        setshownavOptions={setshownavOptions}
        navbarValues ={navbarValues}

      />

      


      <UserLogging
        userData={userData}
        setuserData={setuserData}
        showWindow={showWindow}
        setshowWindow={setshowWindow}
        navbarValues={navbarValues}
        setnavbarValues={setnavbarValues}
      />
    
      <UserInfo
        userData={userData}
        showWindow={showWindow}
        setshowWindow={setshowWindow}
        setgroupData={setgroupData}
        setshownavOptions={setshownavOptions}
        navbarValues={navbarValues}
        setnavbarValues={setnavbarValues}
      />

      <GroupInfo 
        showWindow={showWindow}
        setshowWindow={setshowWindow}
        groupData={groupData}
        setdataMonitor={setdataMonitor}
        setshownavOptions={setshownavOptions}
        navbarValues={navbarValues}
        setnavbarValues={setnavbarValues}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        setdataFilterMonitor={setdataFilterMonitor}
      />

      <MonitorInfo
        showWindow={showWindow}
        dataMonitor={dataMonitor}
        setdataMonitor={setdataMonitor}
        navbarValues={navbarValues}
        startDate = {startDate}
        setStartDate = {setStartDate}
        endDate = {endDate}
        setEndDate = {setEndDate}
        dataFilterMonitor={dataFilterMonitor}
        setdataFilterMonitor={setdataFilterMonitor}
      />
     
    </>
  );
}

export default App;
