import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import 'modern-normalize/modern-normalize.css';

function App() {
  // const [contacts, setContacts] = useState(
  //   () =>
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //       {
  //         id: 'id-1',
  //         name: 'Rosie Simpson',
  //         number: '459-12-56',
  //       },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ],
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
