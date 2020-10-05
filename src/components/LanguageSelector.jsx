import React from 'react';

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select A Language:
        <i
          onClick={() => this.props.setLanguage('English')}
          className='flag us'
        ></i>
        <i
          onClick={() => this.props.setLanguage('Dutch')}
          className='flag nl'
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
