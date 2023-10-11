import './App.css';

function App() {

  document.body.classList.add('body');

  return (
    <div className='container'>
      <div className='title'>
        REGISTER
      </div>
      <form>
        <div className='container-form'>   
          <input placeholder='First Name' type='text' className='input-nama'></input>  
          <input placeholder='Last Name' type='text' className='input-nama'></input>
          <input placeholder='Email' type='text' className='input-nama'></input>
          <input placeholder='Password' type='text' className='input-nama'></input>
          <label>
            Gender :
            <select>
              <option>Male</option>
              <option>Female</option>
              <option>Would rather not choose</option>
            </select>
          </label>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  );
}

export default App;
