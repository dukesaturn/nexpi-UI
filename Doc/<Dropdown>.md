# <Dropdown>

The Dropdown component is a versatile and customizable dropdown menu component built using React. It allows for the inclusion of menu items with icons and callbacks, or custom React elements.

* menuItems: An array of menu items. Each item can either be an object with name, icon, and an optional callback, or an object with a comp property which is a React element.
* style (optional): An object to apply custom styles to the dropdown trigger element.
* clickIconColor: This property refers to the color of an icon displayed in the dropdown menu that represents an action, typically when it's clicked. For instance, it could be the color of an icon indicating an action like opening a submenu or closing the dropdown.
* iconsColor: This property represents the color of icons displayed within the dropdown menu. These icons could be decorative or functional, providing visual cues or representing actions. Setting this property allows customization of the color of all icons within the dropdown menu to maintain consistency or match the overall design scheme.

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
    style={{ margin: '10px', backgroundColor: 'var(--nxp-light-green)' }}
    clickIconColor="var(--nxp-violet)"
    iconsColor="purple"
/>
```

```inline```
