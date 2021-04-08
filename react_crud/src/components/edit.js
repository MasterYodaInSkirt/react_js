import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeCompanyName.bind(this);
    this.onChangeIdNumber = this.onChangeIdNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      company_name: '',
      company_id_number:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                person_name: response.data.person_name, 
                company_name: response.data.company_name,
                company_id_number: response.data.company_id_number });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeCompanyName(e) {
    this.setState({
      business_name: e.target.value
    })  
  }
  onChangeIdNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      company_name: this.state.company_name,
      company_id_number: this.state.company_id_number
    };
    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
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
                    <input type="submit" 
                      value="Update Company" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}