# <Badge>

The Badge component is a reusable UI component that displays a badge with customizable styles and colors based on the type of notification.

The Badge component accepts the following props:

    * children (string): The content to be displayed inside the badge.
    * * (optional, React.CSSProperties): Additional CSS styles to be applied to the badge.
    * backgroundColor (optional, string): A custom background color for the badge.
    * type (optional, 'notice' | 'info' | 'success' | 'warning' | 'error'): The type of the badge, 
     which determines its color.
  
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


