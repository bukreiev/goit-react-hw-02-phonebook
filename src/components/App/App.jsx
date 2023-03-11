import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper } from './App.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  filterChangeHandler = event => {
    this.setState({ filter: event.target.value });
  };

  formSubmitHandler = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is alreary in contacts`);
    } else {
      const newContact = { ...data };
      newContact.id = nanoid();
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, newContact] };
      });
    }
  };

  deleteContactHandler = event => {
    const id = event.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const lowerCaseFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );
    return (
      <Wrapper>
        <h1 className="main-title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className="title">Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterChangeHandler} />
        <ContactList
          contacts={filteredContacts}
          onClick={this.deleteContactHandler}
        />
      </Wrapper>
    );
  }
}
