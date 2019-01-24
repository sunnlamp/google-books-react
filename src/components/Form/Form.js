import React from 'react';

const Form = ({ bookQuery, inputChange, formSubmit }) => (
  <form>
    <label>Book Search</label>
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
      Submit
    </button>
  </form>
);

export default Form;
