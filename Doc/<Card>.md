# <Card>
The `Card` component provides a styled container for organizing and displaying content in a React application.

### Props

- **children** (`React.ReactNode`, optional): Child elements to render inside the card.
- **className** (`string`, optional): Additional CSS class to apply to the card component.
- **style** (`React.CSSProperties`, optional): Custom CSS styles to apply to the card.

```javascript

<Card><p>Welcome to nexpi!</p></Card>
``` 

```inline```

We can change its style with the `Style` prop.

```javascript
 <Card style={{border : '1px solid var(--nxp-violet)', backgroundColor:'var(--nxp-light-violet)', color : 'var(--nxp-violet)' }}>
 <p>Style Card</p>
 </Card>
```

```inline```



