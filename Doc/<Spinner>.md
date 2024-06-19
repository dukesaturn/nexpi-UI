# <Spinner>

The Spinner component displays a loading spinner animation.
Props

- **style** (optional): 
  - CSS properties to customize the style of the spinner.
- **factory** (optional, `'notice' | 'info' | 'success' | 'warning' | 'error' | 'primary' | 'secondary`):
  - The type of spinner box, default is 'secondary'

```javascript
    <Spinner/>
    <Spinner factory='primary'/>
```

```inline```

Other colors:
```javascript
    <Spinner factory='info' />
    <Spinner factory='notice' />
    <Spinner factory='warning' />
    <Spinner factory='error' />
    <Spinner factory='success' />
```

```inline```