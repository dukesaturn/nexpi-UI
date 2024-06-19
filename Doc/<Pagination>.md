# <Pagination>

The `Pagination` component facilitates navigation between items within a specified list. It dynamically determines and displays links to the previous and next items based on the current pathname.

### Props

- **NavItems** (`NavItem[]`, required): An array of objects representing navigation items. Each `NavItem` object contains:
  - **name** (`string`, required): The display name of the navigation item.
  - **icon** (`string`, optional): An icon associated with the navigation item.
  - **path** (`string`, required): The URL path associated with the navigation item.
  - **subItems** (`NavItem[]`, optional): An array of nested `NavItem` objects representing sub-navigation items.

### Usage

The `Pagination` component is utilized to display navigation links to the previous and next items in a list, based on the current path.

### Example

```javascript
import Pagination from './Pagination';

const navItems = [
  { name: 'Item 1', path: '/item1' },
  { name: 'Item 2', path: '/item2' },
  { name: 'Item 3', path: '/item3' },
];

function App() {
  return (
    <div>
      <Pagination NavItems={navItems} />
    </div>
  );
}

export default App;

```

```inline```