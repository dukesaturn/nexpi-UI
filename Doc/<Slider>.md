# <Slider>

### Props

#### `percent`

- **Type:** `number`
- **Description:** Represents the percentage value for the slider.

#### `factory`

- **Type:** `'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'notice'`
- **Default:** `'secondary'`
- **Description:** Specifies the color scheme for the slider. Options include:
  - `'primary'`: Primary color scheme.
  - `'secondary'`: Secondary color scheme.
  - `'success'`: Light green color scheme.
  - `'warning'`: Yellow color scheme.
  - `'danger'`: Light red color scheme.
  - `'info'`: Light violet color scheme.
  - `'notice'`: Cyan color scheme.

#### `onChange`

- **Type:** `(newValue: number) => void`
- **Description:** Callback function invoked when the slider value changes. It receives the new percentage value as an argument.

```javascript
 const [value, setValue] = useState(0);

    const handleSliderChange = (newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Slider
                percent={value}
                onChange={handleSliderChange}
                factory='primary'
            />
            <Slider
                percent={value}
                onChange={handleSliderChange}
                factory='secondary'
            />
            <Slider
                percent={value}
                onChange={handleSliderChange}
                factory='success' />
            <Slider
                percent={value}
                onChange={handleSliderChange}
                factory='warning' />
            <Slider
                percent={value}
                onChange={handleSliderChange}
                factory='danger' />
            <Slider
                percent={value}
                onChange={handleSliderChange}
                factory='info' />
            <Slider
                percent={value}
                onChange={handleSliderChange}
                factory='notice' />

        </>
    );
```

```inline```