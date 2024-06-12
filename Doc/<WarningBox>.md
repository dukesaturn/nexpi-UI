# <WaningBox>

The WarningBox component is a versatile component for displaying various types of warnings or notifications with an associated icon.
Props

    * children (optional, React.ReactNode): The content to be displayed inside the warning box.
    * className (optional, string): Additional CSS class names to be applied to the warning box.
    * style (optional, React.CSSProperties): Additional CSS styles to be applied to the warning box.
    * factory (optional, 'notice' | 'info' | 'success' | 'warning' | 'error'): The type of warning box, which determines its color and icon.
  
```javascript
            <WarningBox factory="info">
                This is an informational message.
            </WarningBox>
            <WarningBox factory="warning">
                This is a warning message.
            </WarningBox>
            <WarningBox factory="error">
                This is an error message.
            </WarningBox>
            <WarningBox factory="success">
                This is a success message.
            </WarningBox>
            <WarningBox factory="notice">
                This is a notice message.
            </WarningBox>
```

```inline```