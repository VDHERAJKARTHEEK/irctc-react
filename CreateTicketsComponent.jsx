import React, { Component } from 'react';
import TicketService from '../services/TicketService';

class CreateTicketsComponent extends Component {
    constructor(props){
    super(props)

    this.state = {
        age:'',
        firstname:'',
        gender:'',
        lastname:'',
       
        
    }
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.save = this.save.bind(this);
    }
    save = (e) => {
        e.preventDefault();
        let ticket = {age: this.state.age,firstname: this.state.firstname,gender: this.state.gender,lastname: this.state.lastname}
        console.log('ticket =>'+ JSON.stringify(ticket));
        
        TicketService.createTicket(ticket).then(res =>{
this.props.history.push('/tickets');
        });
    }
    

    changeFirstNameHandler=(event) =>{
        this.setState({firstname: event.target.value});
    }
    changeLastNameHandler=(event) =>{
        this.setState({lastname: event.target.value});
    }
    changeGenderHandler=(event) =>{
        this.setState({gender: event.target.value});
    }
    changeAgeHandler=(event) =>{
        this.setState({age: event.target.value});
    }
    cancel(){
        this.props.history.push('/tickets');
    }
    render() {
        return (
            <div>
                <div className ="container">
                    <div className ="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                             <h3 className ="text-center">book details</h3>
                             <div className = "card-body">
                                <form>
                                <div className = "form-group">
                                        <label>Age: </label>
                                        <input placeholder='Age' name="age" className="form-control"
                                        value={this.state.age} onChange={this.changeAgeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>First Name: </label>
                                        <input placeholder='First Name' name="firstname" className="form-control"
                                        value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Gender: </label>
                                        <input placeholder='Gender' name="gender" className="form-control"
                                        value={this.state.gender} onChange={this.changeGenderHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Last Name: </label>
                                        <input placeholder='Last Name' name="lastname" className="form-control"
                                        value={this.state.lastname} onChange={this.changeLastNameHandler}/>
                                    </div>
                                  <button className="btn btn-success" onClick={this.save}>Save</button>
                                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>cancel</button>

                                </form>
                             </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateTicketsComponent;