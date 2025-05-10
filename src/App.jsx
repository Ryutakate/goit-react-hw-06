import ContactsForm from './components/ContactsForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

export default function App() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Phonebook</h1>
            <ContactsForm />
            <h2>Contacts</h2>
            <SearchBox />
            <ContactList />
        </div>
    );
}
