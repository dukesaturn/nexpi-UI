# <Dropdown>

The Dropdown component is a versatile and customizable dropdown menu component built using React. It allows for the inclusion of menu items with icons and callbacks, or custom React elements.

### Props

- **menuItems**: `Array<{ name: string, icon?: React.ReactNode, callback?: () => void } | { comp: React.ReactNode }>`
  - An array of menu items. Each item can either be an object with `name`, `icon` (optional), and an optional `callback`, or an object with a `comp` property which is a React element.

- **style** (optional): `object`
  - An object to apply custom styles to the dropdown trigger element.

- **clickIconColor**: `string`
  - Refers to the color of an icon displayed in the dropdown menu that represents an action when clicked. For example, this could be the color of an icon used for actions like opening a submenu or closing the dropdown.

- **iconsColor**: `string`
  - Represents the color of icons displayed within the dropdown menu. These icons may serve decorative or functional purposes, providing visual cues or representing actions. Setting this property allows customization of all icons' colors within the dropdown menu for consistency or to match the design scheme.

```javascript
const menuItems = [
    { name: 'Home', icon: 'FaHome', callback: () => console.log('Home clicked') },
    { name: 'Settings', icon: 'FaCog', callback: () => console.log('Settings clicked') },
    { comp: <Separator key="separator" /> },
    { name: 'Profile', icon: 'FaUser', callback: () => console.log('Profile clicked') },
];

<Dropdown 
    menuItems={menuItems} 
/>
```

```inline```

You can also customize the style of the dropdown trigger element using the style prop:

```javascript

<Dropdown
    menuItems={menuItems}
    style={{ margin: '10px'}}
    clickIconColor="var(--nxp-violet)"
    iconsColor="purple"
/>
```

```inline```
