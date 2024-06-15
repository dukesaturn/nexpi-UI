# <SectionMenu>

The SectionMenu component provides a menu for navigating sections within a page.
## Props

- **NavItems** (`Array<{ name: string, path: string }> | null | undefined`):
  - An array of navigation items, where each item contains a `name` and a `path`. If `null` or `undefined`, no navigation items will be displayed.

- **style** (optional, `React.CSSProperties`):
  - Additional CSS styles to apply to the menu.

- **title** (optional, `string`):
  - The title of the menu. If not provided, defaults to 'On this page'.

```javascript

const navItems = [
    { name: 'Section 1', path: '#section1' },
    { name: 'Section 2', path: '#section2' },
];

<SectionMenu NavItems={navItems} title="Contents" />

```

```inline```

Additionally, the SectionMenu component exports a utility function called getChildSection, which can be used to automatically generate navigation items based on child components within a parent component. This utility function extracts section information from child components and generates navigation items for them.


```javascript
const sections = getChildSection(children, 'Section');
```

This function takes two parameters:

   **children**: The children of a parent component.
  **typeName**: The type of child component to search for (e.g., 'Section').

It returns an array of navigation items, each containing a name and a path based on the child components found within the parent component's children.

