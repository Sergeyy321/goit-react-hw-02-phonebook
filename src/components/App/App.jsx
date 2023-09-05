import { Filter } from 'components/Filter/Filter';
import { Component } from 'react';
import { Contacts } from 'components/Contacts/Contacts';
import {Phonebook } from 'components/Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import { ContactStyled} from './App.styled';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onDelete = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onfilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onAddContact = ({ name, number }) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prev => ({
        contacts: [
          ...prev.contacts,
          { id: nanoid(), name: name, number: number },
        ],
      }));
    }
  };

  render() {
    const { contacts, filter } = this.state;
   

    const lowercaseName = filter.toLowerCase();
    const contactsEl =
      this.state.filter !== ''
        ? contacts.filter(contacts =>
            contacts.name.toLowerCase().includes(lowercaseName)
          )
        : [];
    return (
      <ContactStyled>
        <Phonebook onSubmit={this.onAddContact} />
        <div>
            <h2>Contacts</h2>
          <Filter filter={filter} onfilterChange={this.onfilterChange} />
          <Contacts
            contacts={contactsEl}
            onDelete={this.onDelete}
            filteredName={filter}
          />
        </div>
      </ContactStyled>
    );
  }
}
