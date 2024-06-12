# <Header>
The Header component is a customizable header section that includes separators and typography. It can accept child elements and apply custom styles.

The Header component accepts the following props:

    * children (optional): React nodes to be rendered within the header.
    * className (optional): A string to apply custom CSS classes to the header.
    * style (optional): An object to apply custom styles to the header.

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




