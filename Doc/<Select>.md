# <Select>

The Select component renders a custom select dropdown with specified options and handles changes through a callback function.

### Props

- **`options`** (`Option[]`, required): An array of objects representing the options in the select dropdown. Each object should have `value` and `label` properties.
  
- **`value`** (`string`, required): The current selected value of the select dropdown.
  
- **`onChange`** (`(event: React.ChangeEvent<HTMLSelectElement>) => void`, required): A callback function to handle changes in the select dropdown. 
  It receives the event object of type `React.ChangeEvent<HTMLSelectElement>`.
- 

```javascript
"use client";
import React, { useState } from 'react';
import Select from './Select';

const Component = () => {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const [selectedOption, setSelectedOption] = useState('option1');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <Select options={options} value={selectedOption} onChange={handleSelectChange} />
        </div>
    );
};

export default Component;

```

```inline```