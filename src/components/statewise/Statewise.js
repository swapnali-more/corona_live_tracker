import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {statelist} from '../../route/route';

const Statewise = () => {

    const [stateOptions, setStateOptions] = useState([]);

    const [result, setResult] = useState('TT');

    const [stateShow, setStateShow] = useState([]);

    useEffect(() => {
        axios({
            url: "https://data.covid19india.org/data.json",
        }).then(
            (results) => {
                const Data = results?.data?.statewise;
                var optionItems = Data.map((each, index) => (
                    <option key={index} value={each.statecode}>
                        {each.state}
                    </option>
                ));

                setStateOptions(optionItems);
                setStateShow(Data);
            }
        )
    }, []);

    return (
        <>
            <section className="text-center covid-live">
                <h1>LIVE</h1>
                <h2>COVID-19 CORONAVIRUS TRACKER - STATEWISE</h2>
                <div className="d-flex align-items-center justify-content-center mt-5">
                    <select className="form-control" onChange={(e) => setResult(e.target.value)}>
                        {stateOptions}
                    </select>

                    <a href={statelist} className="links mx-4">State List Data</a>
                </div>

                <div className="container mt-5">

                    {stateShow.filter(state =>
                        state.statecode === result).map((filterCode, ind) => (
                            <div className="row" key={ind}>
                                <div className="col-md-4">
                                    <div className="card card-state">
                                        <p><span>State</span></p>
                                        <h3>{filterCode.state}</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-recoverd">
                                        <p>Total <span>Recovered</span></p>
                                        <h3>{filterCode.active}</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-confirmed">
                                        <p>Total <span>Confirmed</span></p>
                                        <h3>{filterCode.confirmed}</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-death">
                                        <p>Total <span>Death</span></p>
                                        <h3>{filterCode.deaths}</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-active">
                                        <p>Total <span>Active</span></p>
                                        <h3>{filterCode.active}</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-updated">
                                        <p>last <span>Updated</span></p>
                                        <h3>{filterCode.lastupdatedtime}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                </div>
            </section>
        </>
    )
}

export default Statewise
