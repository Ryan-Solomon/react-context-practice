import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
  render() {
    return (
      <ColorContext>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => (value === 'english' ? 'Submit' : 'Dutch Submit')}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext>
    );
  }
}

export default Button;
