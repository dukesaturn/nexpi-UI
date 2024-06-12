# <Logo>

The Logo component is a simple and flexible image component that can be used to display a logo with customizable properties.

The Logo component accepts the following props:

    * src: A string that specifies the URL of the image. This prop is required.
    * alt (optional): A string that provides alternative text for the image.
    * style (optional): An object to apply custom styles to the image.

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
