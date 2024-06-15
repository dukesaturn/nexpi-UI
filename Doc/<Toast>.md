# <Toast>

The Toast component is a customizable notification message that can include an optional action button. It appears for a specified duration and can be dismissed automatically or via user interaction.
## Props

- **title** (optional): `string`
  - The title of the toast notification.

- **text** (optional): `string`
  - The main text content of the toast notification.

- **action** (optional): `{ name: string, CallbackAction?: () => void }`
  - An optional action button with a `name` and an optional `CallbackAction` function.

- **start** (optional): `boolean`
  - Controls the initial visibility of the toast. Defaults to `true`.

- **time** (optional): `number`
  - The duration (in milliseconds) for which the toast is visible before it disappears automatically. Defaults to 5000 milliseconds (5 seconds).



```javascript
   const handleAction = () => {
        console.log('Action executed');
    };

    return (
        <div>
            <Toast
                title="Notification"
                text="This is a toast notification."
                action={{ name: 'Action', CallbackAction: handleAction }}
                start={true}
                time={3000} // 3 seconds
            />
        </div>
    );
```

```inline```