import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeIdNumber = this.onChangeIdNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            person_name: '',
            company_name: '',
            company_id_number:''
        }
    }
    onChangePersonName(e) {
      this.setState({
        person_name: e.target.value
      });
    }
    onChangeCompanyName(e) {
      this.setState({
        company_name: e.target.value
      })  
    }
    onChangeIdNumber(e) {
      this.setState({
        company_id_number: e.target.value
      })
    }
  
    onSubmit(e) {
      e.preventDefault();
      const obj = {
        person_name: this.state.person_name,
        business_name: this.state.business_name,
        business_gst_number: this.state.business_gst_number
      };
      axios.post('http://localhost:4000/business/add', obj)
      .then(res => console.log(res.data));
      this.setState({
        person_name: '',
        company_name: '',
        company_id_number: ''
      })
    }
   
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person Name:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.person_name}
                          onChange={this.onChangePersonName}
                          />
                    </div>
                    <div className="form-group">
                        <label>Company Name: </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.company_name}
                          onChange={this.onChangeCompanyName}
                          />
                    </div>
                    <div className="form-group">
                        <label>Id Number: </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.company_id_number}
                          onChange={this.onChangeIdNumber}
                          />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Company" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
  }