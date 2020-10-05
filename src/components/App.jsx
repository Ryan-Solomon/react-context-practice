import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  state = { language: 'English' };

  setLanguage(lng) {
    this.setState({ language: lng });
  }

  render() {
    return (
      <div className='ui container'>
        <LanguageSelector setLanguage={this.setLanguage} />
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
