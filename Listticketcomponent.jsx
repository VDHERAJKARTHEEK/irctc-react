import React, { Component } from 'react';

class Listticketcomponent extends Component {
    constructor(props){

    super(props)
    this.state ={
             tickets:[]

    }
    }
    render() {
        return (
        <div>
              <h2 className="text-center">tickets list</h2>
              <div className ="row">
                 <table className='table table-striped table-borded'>
                  <thead>
                     <tr>
                        <th>ticketno</th>
                        <th>age</th>
                        <th>firstname</th>
                        <th>gender</th>
                        <th>lastname</th>
                        <th>Actions</th>
                     </tr>

                  </thead>
                  <tbody>
                       {
                        this.state.tickets.map(
                            ticket =>
                            <tr key ={ticket.ticketno}>
                                <td>{ticket.age}</td>
                                <td>{ticket.firstname}</td>
                                <td>{ticket.gender}</td>
                                <td>{ticket.lastname}</td>
                            </tr>
                        )
                       }

                  </tbody>
                  </table>
                </div>
         </div>
        )
    }
}

export default Listticketcomponent;