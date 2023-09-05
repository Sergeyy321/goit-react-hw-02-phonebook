import { PhonebookStyled, Input } from './Phonebook.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {Btn} from './Phonebook.styled'
const nameId = nanoid();
const numberId = nanoid();

export class Phonebook extends Component {
  
  state = {
    name: '',
    number: '',
  };
  
  onChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset()
  };

  render() {
    return (
      <PhonebookStyled>
        <form action="" onSubmit={this.onFormSubmit}>
          <label htmlFor={nameId}>
            <h2>Name</h2>
            <Input
              id={nameId}
              value={this.state.name}
              type="text"
              onChange={this.onChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor={numberId}>
            <h2>Number</h2>
            <Input
              id={numberId}
              type="tel"
              value={this.state.number}
              onChange={this.onChange}
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <Btn type="submit">Add contact</Btn>
        </form>
      </PhonebookStyled>
    );
  }
}
Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};