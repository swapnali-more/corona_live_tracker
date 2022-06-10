import React, {useEffect, useState} from 'react'
import { statewise } from '../route/route';

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData);
            setData(actualData.statewise[0])
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <section className="text-center covid-live">
                <h1>LIVE</h1>
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>

                <div className="d-flex align-items-center justify-content-center mt-5">
                    <a href={statewise} className="links mx-4">India State Data</a>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-state">
                                <p>our <span>Country</span></p>
                                <h3>INDIA</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-recoverd">
                                <p>Total <span>Recovered</span></p>
                                <h3>{data.recovered}</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-confirmed">
                                <p>Total <span>Confirmed</span></p>
                                <h3>{data.confirmed}</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-death">
                                <p>Total <span>Death</span></p>
                                <h3>{data.deaths}</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-active">
                                <p>Total <span>Active</span></p>
                                <h3>{data.active}</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-updated">
                                <p>last <span>Updated</span></p>
                                <h3>{data.lastupdatedtime}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Covid
