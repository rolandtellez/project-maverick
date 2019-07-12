import React, { Component } from 'react';
import "./search.css";


class Search extends Component {

    render() {
        return (
            <div className="container">

                <div id="user-input">
                    
                    <form>
                        <h4>Search for a flight</h4>
                        <div className="form-group">
                            <label htmlFor="selectAirline">Select Airline</label>
                            <select className="form-control" id="select-airline">
                                <option>American Airlines - AA</option>
                                <option>British Airways - BA</option>
                                <option>Cathay Pacific - CX</option>
                                <option>Etihad Airways - EY</option>
                                <option>Hawaiian Airlines - HA</option>
                                <option>Qantas - QF</option>
                                <option>Qatar Airways - QR</option>
                                <option>United Airlines - UA</option>
                                <option>Virgin Atlantic Airways - VS</option>
                                <option>Virgin Australia - VA</option>
                            </select>
                        </div>

                         <div className="form-group">
                            <label htmlFor="flightNumber">Flight Number</label>
                            <input type="text" className="form-control" id="flight-number" placeholder="----------------"/>
                        </div>

                        <button type="submit" className="btn btn-secondary">Submit</button>

                    </form>

                </div>

            </div>
          );

    }
  
}

export default Search;