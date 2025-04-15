import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contact/operation";
import { selectVisibleContacts } from "../../redux/filter/selector";
import Contact from "../Contact/Contact";

const formatPhoneNumber = (phone) => {
  return phone.replace(/\sx\d+$/, "");
};

export default function ContactList() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);
  console.log(visibleContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            contact={{ ...contact, number: formatPhoneNumber(contact.number) }}
            onDelete={handleDelete}
          />
        </li>
      ))}
    </ul>
  );
}
