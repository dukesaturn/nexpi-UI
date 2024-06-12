# <CheckBox>

Here is a simple Checkbox component that allows users to select or deselect an option.

The Checkbox component accepts the following props:

    * label: A string that defines the text label next to the checkbox.
    * checked: A boolean value that determines whether the checkbox is checked or not.
    * onChange: A function that is called when the state of the checkbox changes.
    * style (optional): An object to apply custom styles to the checkbox input element.
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