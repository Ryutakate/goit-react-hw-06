import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

export default function ContactList() {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name.toLowerCase());

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );

    return (
        <ul className={css.list}>
            {filteredContacts.map(contact => (
                <li key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    );
}
