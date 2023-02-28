import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operations';
import {
  PhonebookContainer,
  Title,
  Form,
  Label,
  Input,
  Button,
} from './Phonebook.styled.jsx';

const Phonebook = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = () => {
    dispatch(addContact({ name, phone, id: nanoid() }));
    reset();
  };
  return (
    <PhonebookContainer>
      <Title>Phonebook</Title>
      <Form
        onSubmit={e => {
          e.preventDefault();

          contacts.find(
            el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
          )
            ? alert(`${name} is already in contacts`)
            : handleSubmit();
        }}
      >
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Telephone
          <Input
            type="tel"
            name="number"
            value={phone}
            onChange={e => setNumber(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></Input>
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </PhonebookContainer>
  );
};

export default Phonebook;
