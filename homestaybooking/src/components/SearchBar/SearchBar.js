import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar() {
  const [location, setLocation] = useState('');
  const [pax, setPax] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ${pax} people, at ${location} from ${startDate} to ${endDate}`);
  };

  return React.createElement(
    'div',
    { className: 'container mt-5' },
    React.createElement(
      'div',
      { className: 'card p-4 shadow' },
      React.createElement('h3', { className: 'mb-4' }, 'Book Your Stay'),
      React.createElement(
        'div',
        { className: 'row g-3' },
        React.createElement(
          'div',
          { className: 'col-md-4' },
          React.createElement(
            'label',
            { htmlFor: 'location', className: 'form-label' },
            'Location'
          ),
          React.createElement('input', {
            type: 'text',
            className: 'form-control',
            id: 'location',
            value: location,
            onChange: (e) => setLocation(e.target.value),
            placeholder: 'Enter a location',
          })
        ),
        React.createElement(
          'div',
          { className: 'col-md-2' },
          React.createElement(
            'label',
            { htmlFor: 'pax', className: 'form-label' },
            'Pax'
          ),
          React.createElement('input', {
            type: 'number',
            className: 'form-control',
            id: 'pax',
            value: pax,
            onChange: (e) => setPax(e.target.value),
            min: '1',
            placeholder: 'Number of people',
          })
        ),
        React.createElement(
          'div',
          { className: 'col-md-3' },
          React.createElement(
            'label',
            { htmlFor: 'startDate', className: 'form-label' },
            'Start Date'
          ),
          React.createElement('input', {
            type: 'date',
            className: 'form-control',
            id: 'startDate',
            value: startDate,
            onChange: (e) => setStartDate(e.target.value),
          })
        ),
        React.createElement(
          'div',
          { className: 'col-md-3' },
          React.createElement(
            'label',
            { htmlFor: 'endDate', className: 'form-label' },
            'End Date'
          ),
          React.createElement('input', {
            type: 'date',
            className: 'form-control',
            id: 'endDate',
            value: endDate,
            onChange: (e) => setEndDate(e.target.value),
          })
        )
      ),
      React.createElement(
        'div',
        { className: 'text-center mt-4' },
        React.createElement(
          'button',
          {
            className: 'btn btn-primary',
            onClick: {handleSearch},
          },
          'Search'
        )
      )
    )
  );
}

export default SearchBar;
