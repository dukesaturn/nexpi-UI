# <Logo>

The Logo component is a simple and flexible image component that can be used to display a logo with customizable properties.

### Props

- **src**: `string` (required)
  - Specifies the URL of the image.

- **alt** (optional): `string`
  - Provides alternative text for the image.

- **style** (optional): `React.CSSProperties`
  - An object to apply custom styles to the image.

```javascript
<Logo src="/logo.png" alt="Company Logo" />
```

```inline```

In the Logo.module.css file, you can define custom styles for the Logo component:


```javascript
<Logo 
src="/logo.png" 
alt="Styled Logo" 
style={{ width: '40px', height: 'auto'}} 
/>
```

```inline```
