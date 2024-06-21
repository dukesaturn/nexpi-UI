# <MenuBar>

The `MenuBar` component is used to render a navigational menu with optional icons and sub-items. It supports dynamic rendering of navigation links and includes a collapsible feature.

### Props

- **logoPath** (`string`, optional): Path to the logo image displayed at the top of the MenuBar.
- **style** (`React.CSSProperties`, optional): Custom styles applied to the MenuBar.
- **NavItems** (`NavItem[]`, required): An array of objects representing navigation items. Each `NavItem` object contains:
  - **name** (`string`, required): The display name of the navigation item.
  - **icon** (`string`, optional): The name of the icon associated with the navigation item.
  - **path** (`string`, required): The URL path associated with the navigation item.
  - **subItems** (`NavItem[]`, optional): An array of nested `NavItem` objects representing sub-navigation items.

### Example

```javascript
import MenuBar from './MenuBar';

const navItems = [
  { name: 'Home', icon: 'FaHome', path: '/' },
  { name: 'About', icon: 'FaInfoCircle', path: '/about' },
  {
    name: 'Services',
    icon: 'FaCogs',
    path: 'child',
    subItems: [
      { name: 'Service 1', path: '/services/service1' },
      { name: 'Service 2', path: '/services/service2' },
    ],
  },
];

function App() {
  return (
    <div>
      <MenuBar NavItems={navItems} logoPath="/path/to/logo.png" />
    </div>
  );
}

export default App;

```

```inline```
