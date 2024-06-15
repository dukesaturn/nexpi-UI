# <Header>
The Header component is a customizable header section that includes separators and typography. It can accept child elements and apply custom styles.

### Props

- **children** (optional): `React.ReactNode`
  - React nodes to be rendered within the header.

- **className** (optional): `string`
  - A string to apply custom CSS classes to the header.

- **style** (optional): `React.CSSProperties`
  - An object to apply custom styles to the header.


```javascript
<Header>
    Welcome to My Website
</Header>
```

```inline```

```javascript
<div style={{margin : '3rem'}}> 
<Header style={{backgroundColor:'var(--nxp-cian)'}}>
Customized Header
</Header></div>
```

```inline```




