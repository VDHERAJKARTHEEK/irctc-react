import React, { Component } from 'react';
import TicketService from '../services/TicketService';

class Listticketscomponent extends Component {
    constructor(props){

    super(props)
    this.state ={
             tickets:[]

    }
    this.Booktickets = this.Booktickets.bind(this);
    this.update =this.update.bind(this);
    this.delete =this.delete.bind(this);
    }
    delete(ticketno){
        TicketService.delete(ticketno).then( res =>{
            this.setState({tickets:this.state.tickets.filter(ticket => ticket.ticketno !== ticketno)});
        });
    }
    view(ticketno){
        this.props.history.push(`/view/${ticketno}`);
    }
    update(ticketno){
this.props.history.push(`/update/${ticketno}`);

    }
    componentDidMount(){
        TicketService.getTickets().then((res) =>{
               this.setState({tickets:res.data})
        });
    }
    Booktickets(){
        this.props.history.push('/Booktickets');
    }
    render() {
        return (
        <div>
              <h2 className="text-center">IRCTC Tickets</h2>
              <div className ="row">
                <button className="btn btn-primary" onClick={this.Booktickets}>Booktickets</button>
              </div>
              <div className ="row">
                 <table className='table table-striped table-borded'>
                  <thead>
                     <tr>
                        <th>Age</th>
                        <th>Firstname</th>
                        <th>Gender</th>
                        <th>Lastname</th>
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
                                <td>
                                    <button onClick = { () => this.update(ticket.ticketno)} className="btn btn-info">Update</button>
                                    <button style={{marginLeft: "10px"}} onClick = { () => this.delete(ticket.ticketno)} className="btn btn-danger">delete</button>
                                    <button style={{marginLeft: "10px"}} onClick = { () => this.view(ticket.ticketno)} className="btn btn-info">view</button>
                                </td>
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

export default Listticketscomponent;