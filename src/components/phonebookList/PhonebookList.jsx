import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';

import { change } from 'redux/sliceFilter';
import {
  PhonebookListStyled,
  PhonebookListItem,
  PhonebookListWrap,
  DeleteButton,
} from './PhonebookList.styled';

import { Title, Label, Input } from '../phonebook/Phonebook.styled';

const PhonebookList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return contacts.length > 0 ? (
    <PhonebookListWrap>
      <Title>Contacts</Title>
      <Label>
        Search contacts by name
        <Input
          value={filter}
          onChange={e => {
            e.preventDefault();
            dispatch(change(e.target.value));
          }}
        ></Input>
      </Label>
      <PhonebookListStyled>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(el => {
            return (
              <PhonebookListItem key={el.id}>
                {el.name}: {el.phone}
                <DeleteButton
                  type="button"
                  onClick={() => {
                    dispatch(deleteContact(el.id));
                  }}
                  id={el.id}
                >
                  Delete
                </DeleteButton>
              </PhonebookListItem>
            );
          })
        ) : (
          <Title>You don't have contact with this name</Title>
        )}
      </PhonebookListStyled>
    </PhonebookListWrap>
  ) : (
    <Title>You don't have any contacts </Title>
  );
};

export default PhonebookList;
