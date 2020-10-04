import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../context/ColorContext';

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
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value='red'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
