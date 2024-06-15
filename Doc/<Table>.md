# <Table>

Here is a Table component that displays data in a tabular format.

## Props

- **data**: `Array<object>`
  - An array of objects where each object represents a row in the table. 
  - The keys of the objects represent the column headers.

  
To use the Table component, you can include it in your JSX as shown below:

```javascript
const data = [
    { name: 'John Doe', age: 28, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 34, occupation: 'Designer' },
    { name: 'Sam Johnson', age: 45, occupation: 'Manager' },
];

<Table data={data} />
```

```inline```
