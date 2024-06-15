# <Badge>

The Badge component is a reusable UI component that displays a badge with customizable styles and colors based on the type of notification.

### Props

- **children** (`string`): The content to be displayed inside the badge.

- **style** (`React.CSSProperties`, optional): Additional CSS styles to be applied to the badge.

- **backgroundColor** (`string`, optional): A custom background color for the badge.

- **type** (`'notice' | 'info' | 'success' | 'warning' | 'error'`, optional): The type of the badge, which determines its color.

  
```javascript
    <Badge type="success" style={{margin : '0.6rem' }}>
        This is a success badge!
    </Badge>
    <Badge type="info" style={{ margin : '0.6rem'}}>
        This is a info badge!
    </Badge>
    <Badge type="notice" style={{ margin : '0.6rem'}}>
        This is a notice badge!
    </Badge>
    <Badge type="warning" style={{ margin : '0.6rem'}}>
        This is a warning badge!
    </Badge>
    <Badge type="error" style={{ margin : '0.6rem'}}>
        This is a error badge!
    </Badge>
    <Badge style={{ margin : '0.6rem'}}>
        This is a default badge!
    </Badge>
```
```inline```


