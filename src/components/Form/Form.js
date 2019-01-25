import React from 'react';

const Form = ({ bookQuery, inputChange, formSubmit }) => (
  <form>
    <input
      id={'searchInput'}
      placeholder='Enter title or author'
      name={'bookQuery'}
      value={bookQuery}
      onChange={inputChange}
    />
    <button
      onClick={formSubmit}
    >
      <span id="submitButton">Submit</span>
    </button>
  </form>
);

export default Form;
