import React from 'react';
import './MonitorInfo.css';
import { ItemData } from './ItemData';

import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
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
    Title,
    Tooltip,
    Legend,
    Filler
);


function MonitorInfo(
    {showWindow,
    dataMonitor}
   ){   


    let timestamp = dataMonitor.measures.map((value) => new Date(value.timestamp*1000).toLocaleTimeString());

   let paData = {
    labels: timestamp,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Potencia [W]',
            data: dataMonitor.measures.map((value) => value.values[2])
        }
    ]
   };

   let eaData = {
    labels: timestamp,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Energía Consumida [kW/h]',
            data: dataMonitor.measures.map((value) => value.values[3])
        }
    ]
   };

   let fpData = {
    labels: timestamp,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Factor de potencia',
            data: dataMonitor.measures.map((value) => value.values[5])
        }
    ]
   };

   let mioptions = {
    
    };

    // promedios
    
    let Va = dataMonitor.measures.map((value) => value.values[0]);

    let Vaprom = Va.reduce((acum,x)=>acum+x,0)/Va.length;

    let Ia = dataMonitor.measures.map((value) => value.values[1]);

    let Iaprom = Ia.reduce((acum,x)=>acum+x,0)/Ia.length;

    let f = dataMonitor.measures.map((value) => value.values[4]);

    let fprom = f.reduce((acum,x)=>acum+x,0)/f.length;

    

    





    return (
        <div className={`data-visualization ${showWindow.monitorInfoWindow}`}>
            <div> 
                <div className="table-header">
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
                )}

                <button onClick={()=>{

                    let timestamp = dataMonitor.measures.map((value) => value.timestamp);



                    console.log(new Date(timestamp[0]).toLocaleDateString());// dos decimales

                }}>Pruebas</button>

                

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
                        <Bar  
                            data = {paData}
                            options = {mioptions} 
                        />
                    </div>
                    <div className='item-figure'>
                        <Bar 
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

            </div>


        </div>
    );
}

export {MonitorInfo};