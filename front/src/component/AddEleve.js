import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../action/postActions';


class AddNewEleve extends Component {
  constructor(props){
    super(props);    
    this.state = {
      nom: '',
      prenom: '',
      age:null,
      classe: null
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}

onSubmit(e) {
  e.preventDefault();
  const post = {
    nom: this.state.nom,
    prenom: this.state.prenom,
    age: this.state.age,
    classe: this.state.classe,
  };

  this.props.createPost(post);

  this.setState({
    nom:'',
    prenom:'',
    age:'',
    classe:''
  });

}

    render() {
      return (
          <div>
              <form onSubmit={this.onSubmit} >
                <table>
                  <tr>
                    <td><span>Nom:</span> </td><td><input type="text" id="" name="nom" value={this.state.nom} 
                  onChange={this.onChange} required="true"/></td>
                  </tr> 
                  <tr>
                    <td><span>Prenom:</span> </td><td><input type="text" id="" name="prenom" value={this.state.prenom} 
                  onChange={this.onChange} required="true"/></td>
                  </tr>  
                  <tr>
                    <td><span>Age:</span> </td><td><input type="text" id="" name="age" value={this.state.age} 
                  onChange={this.onChange} required="true"/></td>
                  </tr>  
                  <tr>
                    <td><span>Classe:</span> </td><td><input type="text" id="" name="classe" value={this.state.classe} 
                  onChange={this.onChange} required="true"/></td>
                  </tr>           
                  <tr>
                    <td></td><td><button className="btn btn-primary" type="submit">Ajouter</button></td>
                  </tr>
                          
                </table>
            </form>
          </div>
      );
    }
  }


AddNewEleve.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(AddNewEleve);