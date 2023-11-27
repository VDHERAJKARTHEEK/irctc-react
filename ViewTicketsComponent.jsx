import React, { Component } from 'react';
import TicketService from '../services/TicketService';
class ViewTicketsComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            ticketno: this.props.match.params.ticketno,
            ticket: {} 
        }
    }

    componentDidMount(){
        TicketService.getTicketbyticketno(this.state.ticketno).then( res => {
            this.setState({ticket: res.data});
        })


    }


    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                   <h3 className = "text-center">View Ticket Details</h3>
                     <div className = "card-body">
                        <div className = "row">
                            <label>Age:</label>
                            <div> {this.state.ticket.age}</div>
                        </div>
                        <div className = "row">
                            <label>Firstname:</label>
                            <div> {this.state.ticket.firstname}</div>
                        </div>
                        <div className = "row">
                            <label>Gender:</label>
                            <div> {this.state.ticket.gender}</div>
                        </div>
                        <div className = "row">
                            <label>Lastname:</label>
                            <div> {this.state.ticket.lastname}</div>
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}

export default ViewTicketsComponent