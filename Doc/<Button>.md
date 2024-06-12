# <Button>

It's a simple component that displays a `button` on the screen.
To use it

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
