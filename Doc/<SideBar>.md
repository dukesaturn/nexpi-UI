# <SideBar>

The SideBar component provides a sidebar navigation menu.
Props

    * NavItems (required): An array of navigation items, each containing a name, an icon, a path, and optionally subItems.
    * style (optional): Additional CSS styles to apply to the sidebar.
    * children (optional): Additional content to be displayed above the navigation menu.

When you want to add submenus to a navigation item in the SideBar, you need to set the path property of the parent item to "child". This indicates that the navigation item is not clickable and serves only as a parent element for the submenus.

```javascript
const ExampleComponent = () => {
const navItems = [
    { name: 'Home', icon: 'FaHome', path: '/projects/nexpi#<SideBar>' },
    { name: 'About', icon: 'FaDatabase', path: 'child', subItems: [
        { name: 'Team', icon: 'FaUsers', path: '/projects/nexpi#<SideBar>' },
        // Add more sub-items as needed
    ]},
    { name: 'Contacts', icon: 'FaMailBulk', path: '/projects/nexpi#<SideBar>' },
    // Add more navigation items as needed
];


    return (
        <div>
            <SideBar NavItems={navItems}>
            </SideBar>
        </div>
    );
};

```

```inline```

This is the NavItems type: 
```javascript
interface NavItem {
    name: string;
    icon: string;
    path: string;
    subItems?: NavItem[];
}
```