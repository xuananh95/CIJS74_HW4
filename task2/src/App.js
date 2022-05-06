import './App.css';
import {useState} from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [pwd1, setPwd1] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [text, setText] = useState('');
  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handlePassword1 = (e) => {
    setPwd1(e.target.value);
  }

  const handlePassword2 = (e) => {
    setPwd2(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(username && pwd1 && pwd2)){
      alert('Please enter all information!');
      setText('');
    }
    else if (pwd1 !== pwd2){
      alert('Passwords do not match!');
      setPwd1('');
      setPwd2('');
      setText('');
    }
    else {
      setText('Welcome ' + username)
    }
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label for='username'>Enter username</label>
        <input type="text" name='username' placeholder="username" value={username} onChange={handleUsername} />
        <label for='pwd1'>Enter password</label>
        <input type="password" name='pwd1' value={pwd1} onChange={handlePassword1} />
        <label for='pwd2'>Confirm password</label>
        <input type="password" name='pwd2' value={pwd2} onChange={handlePassword2} />
        <button type="submit">Submit</button>
      </form>
      <h1>{text}</h1>
    </div>
  );
}

export default App;
