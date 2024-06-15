# <Progress>


The `Progress` component is a customizable progress bar implemented using React and HTML5 canvas. It allows for dynamic rendering of progress with optional color customization based on a predefined factory color scheme.

### Props

- **percent** (`number`, required): Represents the percentage of completion for the progress bar. It determines the width of the progress bar within the specified container.

- **factory** (`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'notice'`, optional): Defines the color scheme for the progress bar. If not provided, defaults to `'secondary'`. Possible values:
  - `'primary'`: Uses `--nxp-primary-color`.
  - `'secondary'`: Uses `--nxp-secondary-color`.
  - `'success'`: Uses `--nxp-light-green`.
  - `'warning'`: Uses `--nxp-yellow`.
  - `'danger'`: Uses `--nxp-light-red`.
  - `'info'`: Uses `--nxp-light-violet`.
  - `'notice'`: Uses `--nxp-cian`.


```javascript
    <div>
        <Progress percent={50} factory="primary" />
        <Progress percent={75} factory="success" />
        <Progress percent={30} factory="warning" />
        <Progress percent={60} factory="danger" />
        <Progress percent={90} factory="info" />
        <Progress percent={20} factory="notice" />
        <Progress percent={40} /> {/* Defaults to 'secondary' factory */}
    </div>
        ```

```inline```