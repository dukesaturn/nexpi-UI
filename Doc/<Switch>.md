# <Switch>

The Switch component is a toggle switch UI element designed to toggle between states, 
represented visually as a checkbox with a slider.

### Props

- **callBackSwitch**: `function`
  - A callback function that is invoked whenever the switch state changes.


```javascript
    const [isOpen, setIsOpen] = useState(false);

    return (
    <>
    <   Switch callBackSwitch={() => setIsOpen(!isOpen)} />
        {isOpen ? <h1>Open</h1> :  null}
    </>)
```

```inline```