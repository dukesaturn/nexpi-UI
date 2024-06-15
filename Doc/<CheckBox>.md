# <CheckBox>

The Checkbox component allows users to select or deselect an option.

### Props

- **label**: `string`
  - Defines the text label next to the checkbox.

- **checked**: `boolean`
  - Determines whether the checkbox is checked (`true`) or not (`false`).

- **onChange**: `function`
  - Callback function invoked when the state of the checkbox changes.

- **style** (optional): `object`
  - Custom styles to apply to the checkbox input element.
  - 
```inline```

```javascript

const [checked, setChecked] = useState(true);

...
<Checkbox 
    label="Accept Terms and Conditions" 
    checked={checked} 
    onChange={(event) => console.log(event.target.checked)} 
/>

```

You can also customize the style of the checkbox using the style prop:

```inline```

```javascript
<Checkbox 
    label="Styled Checkbox" 
    checked={false} 
    onChange={(event) => console.log(event.target.checked)} 
    style={{ margin: '10px', accentColor: 'blue' }} 
/>
```