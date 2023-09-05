import { Filter } from 'components/Filter/Filter';
import { Component } from 'react';
import {Contacts } from 'components/Contacts/Contacts';
import {Phonebook } from 'components/Phonebook/Phonebook';
import { nanoid } from 'nanoid';

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

  onDelete = evt => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => el.name !== evt.target.value),
      };
    });
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

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  render() {
    const { contacts, filter } = this.state;
    const contactsEl = this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <Phonebook onSubmit={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onfilterChange={this.filterChange} />
        <Contacts
          constacts={contactsEl}
          onDelete={this.onDelete}
          filteredName={filter}
        />
      </div>
    );
  }
}
