import css from './ContactsForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { useState } from 'react';

export default function ContactsForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const normalizedName = name.toLowerCase();
        
        const isDuplicate = contacts.some(
            contact => contact.name.toLowerCase() === normalizedName
        );
        
        if (isDuplicate) {
            alert(`${name} is already in contacts.`);
            return;
        }
        
        dispatch(addContact(name, number));
        setName('');
        setNumber('');
    };
    
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                type="text"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <input
                type="tel"
                name="number"
            placeholder="Phone number"
            required
            value={number}
            onChange={e => setNumber(e.target.value)}
            />
            <button type="submit">Add Contact</button>
        </form>
    );
}
