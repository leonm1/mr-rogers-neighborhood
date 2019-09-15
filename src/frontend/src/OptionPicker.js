import React from 'react';
import Dropdown from 'react-dropdown';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-dropdown/style.css';
import './OptionPicker.scss';

const distanceOptions = [
  '500m',
  '1km',
  '1.5km',
  '2km',
  '2.5km',
  '3km',
  '3.5km',
  '4km',
  '4.5km',
  '5km',
];

const ratingOptions = ['1 star', '2 stars', '3 stars', '4 stars', '4.5 stars'];
let typeaheadOptions = [];

import('./mtl_cats.json').then(file => {
  for (const k in file) typeaheadOptions.push(file[k]);
});

function OptionPicker(props) {
  const {
    reduce,
    index,
    model: { item, distance, rating },
  } = props;
  return (
    <div className='option-picker'>
      <Typeahead
        type='text'
        value={item}
        options={typeaheadOptions}
        onChange={selected =>
          reduce({ index, type: 'modify', value: selected, key: 'item' })
        }
      />
      <Dropdown
        className='dropdown'
        options={distanceOptions}
        onChange={e => {
          reduce({
            index,
            type: 'modify',
            key: 'distance',
            value: e.value,
          });
        }}
        value={distance}
        placeholder='Maximum distance'
      />
      <Dropdown
        className='dropdown'
        options={ratingOptions}
        onChange={e => {
          console.log(e);
          reduce({
            index,
            type: 'modify',
            key: 'rating',
            value: e.value,
          });
        }}
        value={rating}
        placeholder='Minimum rating'
      />
      <button onClick={() => reduce({ index, type: 'add' })}>Add</button>
      <button onClick={() => reduce({ index, type: 'remove' })}>Remove</button>
    </div>
  );
}

export default OptionPicker;
