import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';

const Statelist = () => {

    const [stateShow, setStateShow] = useState([]);

    useEffect(() => {
        axios({
            url: "https://data.covid19india.org/data.json",
        }).then(
            (results) => {
                const Data = results?.data?.statewise;
                setStateShow(Data);
            }
        )
    }, []);

    return (
        <>
            <section className="text-center covid-live">
                <h1>LIVE</h1>
                <h2>COVID-19 CORONAVIRUS TRACKER - STATEWISE</h2>

                <div className="container mt-5">
                    <div className="row">
                        <div className="table-responsive">
                            <Table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>State</th>
                                        <th>Confirmed</th>
                                        <th>Recovered</th>
                                        <th>Active</th>
                                        <th>Deaths</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stateShow.map((each, index) => (
                                        <tr key={index}>
                                            <td>{each.state}</td>
                                            <td>{each.confirmed}</td>
                                            <td>{each.recovered}</td>
                                            <td>{each.active}</td>
                                            <td>{each.deaths}</td>
                                        </tr>
                                    )
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Statelist
