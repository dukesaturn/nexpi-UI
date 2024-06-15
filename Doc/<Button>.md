# <Button>

IThe `Button` component provides a customizable button interface for React applications. It supports optional onClick behavior, type specification, custom styles, and child elements.

### Props

- **onClick** (`() => void`, optional): Callback function invoked when the button is clicked.
- **type** (`'button' | 'submit' | 'reset'`, optional): Specifies the type of button.
- **style** (`React.CSSProperties`, optional): Custom styles to apply to the button.
- **children** (`React.ReactNode`, optional): Child elements rendered within the button.
- **factory** (`'primary' | 'secondary' | 'void'`, optional): Defines the color scheme for the button. If not provided, defaults to `'secondary'`. Possible values:
  - `'primary'`: Uses `--nxp-primary-color`.
  - `'secondary'`: Uses `--nxp-secondary-color`.
  - `'void'`: Uses `--nxp-backgruond-color`.

```javascript

<Button>Click me </ Button>

```

```inline```

By default, it has three main types: `primary`, `secondary`, `void`

```javascript

<Button factory='primary'>Click me </ Button>
<Button factory='secondary'>Click me </ Button>
<Button factory='void'>Click me </ Button>

```

```inline```

Of course, it's possible to customize the button with all the props that can be assigned to `<button>`.

```javascript

<Button style={{ backgroundColor: 'var(--nxp-blue)' }}>Click me </ Button>
```

```inline```

You can select the type: button, submit, reset.

```javascript

<Button type='button'>Click me </ Button>
<Button type='submit'>Click me </ Button>
<Button type='reset'>Click me </ Button>

```


You can define a callback for the onClick event

```javascript

const handleClick = {
    console.log('Clicked!')
}

<Button onClick={handleClick}>Click me </ Button>

```
