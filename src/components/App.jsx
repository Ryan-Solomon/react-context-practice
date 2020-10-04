import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
  state = { language: 'English' };

  setLanguage(lng) {
    this.setState({ language: lng });
  }

  render() {
    return (
      <div className='ui container'>
        <div>
          Select A Language:
          <i
            onClick={() => this.setLanguage('English')}
            className='flag us'
          ></i>
          <i onClick={() => this.setLanguage('Dutch')} className='flag nl'></i>
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
