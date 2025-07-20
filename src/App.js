import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import Header from './components/Header';
import PostPage from './pages/PostPage';

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/post' element={<PostPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
