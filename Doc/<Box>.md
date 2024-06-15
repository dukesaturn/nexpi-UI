# <Box>

The `Box` component is a basic div container with customizable styles.

## Props

### BoxProps

In addition to the standard HTML attributes for `div`, `BoxProps` accepts the following props:

- **children** (`React.ReactNode`, optional): Content to be displayed inside the box.

```javascript
    <Box><h3>Hello world!</h3></Box>
```

```inline```

You can pass any props of a `<div>`

```javascript
<Box style={{ backgroundColor: 'var(--nxp-light-green)' }}>
<h3>Hello world!</h3>
</Box>;
```

```inline```