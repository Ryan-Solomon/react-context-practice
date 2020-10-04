import React from 'react';
import LanguageContext from '../context/languageContext';

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === 'english' ? 'Name: ' : 'Dutch Name';
    return (
      <div className='ui field'>
        <label htmlFor='Name'>{text}</label>
        <input type='text' />
      </div>
    );
  }
}

export default Field;
