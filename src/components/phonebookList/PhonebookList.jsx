import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/slicePhoneBook';
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
  const contacts = useSelector(state => state.persistedReducer.phoneBook);
  const filter = useSelector(state => state.persistedReducer.filter);
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
        {contacts
          .filter(contact =>
            contact.name
              .toLocaleLowerCase()
              .includes(filter.toLocaleLowerCase())
          )
          .map(el => {
            return (
              <PhonebookListItem key={el.id}>
                {el.name}:{el.number}
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
          })}
      </PhonebookListStyled>
    </PhonebookListWrap>
  ) : (
    <Title>You don't have any contacts </Title>
  );
};

export default PhonebookList;
