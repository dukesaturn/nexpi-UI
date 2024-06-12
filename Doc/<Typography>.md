# <Typography>

The Typography component is a flexible component for rendering text with different styles and sizes.
Props

    * children (React.ReactNode): The text content to be rendered.
    * type (optional, "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "light"): The type of typography element to render.
    * style (optional, React.CSSProperties): Additional CSS styles to be applied to the typography element.

Usage

To use the Typography component, you can include it in your JSX as shown below:

```javascript
        <div>
            <Typography type="h1">Heading 1</Typography>
            <Typography type="h2">Heading 2</Typography>
            <Typography type="h3">Heading 3</Typography>
            <Typography type="h4">Heading 4</Typography>
            <Typography type="h5">Heading 5</Typography>
            <Typography type="h6">Heading 6</Typography>
            <Typography type="light">Light Text</Typography>
        </div>
```

```inline```