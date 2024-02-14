import React from 'react';
import './MonitorInfo.css';
import { ItemData } from './ItemData';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



import {Bar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


function MonitorInfo(
    {showWindow,
    dataMonitor,
    navbarValues,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    dataFilterMonitor,
    setdataFilterMonitor}
   ){   

    // const [startDate, setStartDate] = React.useState(new Date(dataMonitor.measures[dataMonitor.measures.length-1].timestamp*1000));
    // const [endDate, setEndDate] = React.useState(new Date(dataMonitor.measures[dataMonitor.measures.length-1].timestamp*1000));
    // const [dataFilterMonitor,setdataFilterMonitor] = React.useState(
    //     dataMonitor.measures.filter((value) => value.timestamp <= endDate.getTime()/1000 && value.timestamp >= startDate.getTime()/1000 )
    // );

let timestamp = dataFilterMonitor.map((value) => new Date(value.timestamp*1000).toLocaleString());


// let timestamp = dataMonitor.measures.map((value) => value.timestamp);

   let paData = {
    labels: timestamp,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Potencia [W]',
            data: dataFilterMonitor.map((value) => value.values[2]),
            borderColor: 'rgb(33, 56, 222)',
            backgroundColor: 'rgba(33, 56, 222, 0.5)',

        }
    ]
   };

   let eaData = {
    labels: timestamp,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Energía Consumida [kW/h]',
            data: dataFilterMonitor.map((value) => value.values[3]),
            borderColor: 'rgb(2, 104, 11)',
            backgroundColor: 'rgba(2, 104, 11, 0.5)',
        }
    ]
   };

   let fpData = {
    labels: timestamp,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Factor de potencia',
            data: dataFilterMonitor.map((value) => value.values[5]),
            borderColor: 'rgb(24, 155, 250)',
            backgroundColor: 'rgba(24, 155, 250, 0.5)',
        }
    ]
   };

   let mioptions= {
        scales:{
            x: {
                
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 3
                }
                
               
            } 
            
        }    
    
    };

    // promedios
    
    let Va = dataFilterMonitor.map((value) => parseFloat(value.values[0]));
    console.log(Va)

    let Vaprom = Va.reduce((acum,x)=>acum+x)/Va.length;
    console.log(Va.length)

    let Ia = dataFilterMonitor.map((value) => parseFloat(value.values[1]));

    let Iaprom = Ia.reduce((acum,x)=>acum+x,0)/Ia.length;

    let f = dataFilterMonitor.map((value) => parseFloat(value.values[4]));

    let fprom = f.reduce((acum,x)=>acum+x,0)/f.length;

    let Cs = dataFilterMonitor.map((value) => parseFloat(value.values[3]));

    let CsR = Cs[Cs.length-1]-Cs[0];

    





    return (
        <div className={`data-visualization ${showWindow.monitorInfoWindow}`}>
            <div> 
                {/* <div className="table-header">
                        <p>
                            Fecha
                        </p>
                        <p>
                            V_A
                        </p>
                        <p>
                            I_A
                        </p>
                        <p>
                            PA_T 
                        </p>
                        <p>
                            EA_T_I 
                        </p>
                        <p>
                            F
                        </p>
                        <p>
                            FP_T
                        </p>


                </div>

                {dataMonitor.measures.map(value =>
                        <ItemData
                            key={value.timestamp}
                            timestamp={value.timestamp}
                            values={value.values}
                        />
                )} */}

                

                

                {/* {dataMonitor.measures.map(value =>
                        <ItemData
                            key={value.timestamp}
                            timestamp={value.timestamp}
                            values={value.values}
                        />
                )} */}


            </div>
            <div className='figures-data'>
                    <div className='item-figure'>
                        <div className='Filter-box'>
                            <h1 className='dashboard-title'>{navbarValues.monitorName}</h1>

                            <p className='text-items'>Fecha Inicial</p>

                            <div className='date-input'>    
                                <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                />
                            </div>

                            <p className='text-items'>Fecha Final</p>

                            <div className='date-input'>  
                                <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                />
                            </div>

                            <button className='update-button' onClick={()=>{
                                let dateStart = startDate;
                                dateStart.setHours(0);
                                dateStart.setMinutes(0);
                                dateStart.setSeconds(0);

                                let dateEnd = endDate;
                                dateEnd.setHours(23);
                                dateEnd.setMinutes(59);
                                dateEnd.setSeconds(59);

                                console.log(dateStart);
                                console.log(dateEnd);

                                setdataFilterMonitor(
                                    dataMonitor.measures.filter((value) => value.timestamp <= (dateEnd.getTime()/1000) && value.timestamp >= dateStart.getTime()/1000)
                                );

                                // console.log(dataFilterMonitor);// dos decimales

                            }}>Actualizar</button>

                        </div>
                    </div>


                    <div className='item-figure'>
                        <Line  
                            data = {paData}
                            options = {mioptions} 
                        />
                    </div>
                    <div className='item-figure'>
                        <Line 
                            data = {eaData}
                            options = {mioptions} 
                        />
                    </div>
                    <div className='item-figure'>
                        <Bar  
                            data = {fpData}
                            options = {mioptions} 
                        />
                    </div>                         
            </div>

            <div className='valuesboxes-data'>
                <div className='data-box'>
                    <p>Voltaje Efectivo RMS</p>
                    <div>
                        <p>{`${Vaprom.toFixed(2)}V`}</p>
                    </div>
                </div>

                <div className='data-box'>
                    <p>Corriente RMS</p>
                    <div>
                        <p>{`${Iaprom.toFixed(2)}A`}</p>
                    </div>
                </div>

                <div className='data-box'>
                    <p>Frecuencia</p>
                    <div>
                        <p>{`${fprom.toFixed(2)}Hz`}</p>
                    </div>
                </div>

                <div className='data-box'>
                    <p>Consumo</p>
                    <div>
                        <p>{`${CsR.toFixed(2)}kW/h`}</p>
                    </div>
                </div>

            </div>


        </div>
    );
}

export {MonitorInfo};