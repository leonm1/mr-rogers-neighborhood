import React, { useReducer } from 'react';
import OptionPicker from './OptionPicker';
import './OptionSection.scss';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { item: '', distance: '', rating: '' }];
    case 'remove':
      if (state.length === 1) return [{ item: '', distance: '', rating: '' }];
      return state.filter((el, index) => index !== action.index);
    case 'modify':
      return state.map((el, index) =>
        index === action.index ? { ...el, [action.key]: action.value } : el
      );
    default:
      throw new Error();
  }
}

function OptionSection() {
  const [arr, reduce] = useReducer(reducer, [
    { item: '', distance: '', rating: '' },
  ]);

  return (
    <div id='option-section' className='option-section'>
      {arr.map((el, index) => (
        <OptionPicker model={el} reduce={reduce} index={index} />
      ))}
      <button className='submit'>Next</button>
    </div>
  );
}

export default OptionSection;
