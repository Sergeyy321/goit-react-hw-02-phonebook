import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ContactStyle} from './Contacts.styled'

 export class Contacts extends Component  {
  render(){
    
    return (
      <ContactStyle>
      
        <ul>
          {this.props.contacts.map(el => {
            return (
              <li key={el.id}>
                {el.name} {el.number}{' '}
                <button onClick={() => this.props.onDelete(el.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </ContactStyle>
    );
 }
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
  filteredName: PropTypes.string.isRequired,
};