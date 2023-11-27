import React, { Component } from 'react';
import irctcService from '../services/irctcService';

class IrctcTickets extends Component {
    constructor(props)
    {
    super(props)
    this.state={
                Tickets:[]
    }}
    componentDidMount(){
        irctcService.getTickets().then((res)=>{
         this.setState({Tickets:res.data});
        });
    }
    render() {
        return (
            <div>
               <h2 className="text-center">IrctcTickets</h2> 
              <div className='row'>
                              <table className='table table-striped table-bordered'>
                                  <thead>
                                    <tr>
                                        <th>ticketno</th>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Age</th>
                                        <th>gender</th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                     {
                                        this.state.Tickets.map(
                                            Ticket=>
                                            <tr key ={Ticket.no} >
                                                <td>{Ticket.firstname}</td>
                                                <td>{Ticket.lastname}</td>
                                                <td>{Ticket.age}</td>
                                                <td>{Ticket.gender}</td>

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

export default IrctcTickets