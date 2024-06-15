# <Radio>

The Radio component allows creating a group of radio buttons with defined options.

## Props

- **options** (`RadioElement[]`, required): An array of objects representing the radio button options. Each object should have the following properties:
  - `value` (`string`): The value of the radio button.
  - `label` (`string`): The label to display next to the radio button.
  - `name` (`string`): The name of the radio button group that this option belongs to.


```javascript
import React from 'react';
import Radio from './Radio';

const options = [
    { value: 'option1', label: 'Option 1', name: 'radioGroup' },
    { value: 'option2', label: 'Option 2', name: 'radioGroup' },
    { value: 'option3', label: 'Option 3', name: 'radioGroup' },
];

const App = () => {
    return (
        <div>
            <Radio options={options} />
        </div>
    );
}

export default App;

```

```inline```