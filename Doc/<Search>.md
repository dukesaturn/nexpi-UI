# <Search>

The Search component allows users to input search queries and trigger a search action.
Props

    * onSearch (function): A callback function invoked when the user performs a search. It receives the search query as a parameter.
    * onClick (optional, function): A callback function invoked when the search box is clicked.
    * factory (optional, 'primary' | 'void'): The style variant of the search box. Default is 'primary'.
    * placeholder (optional, string): The placeholder text displayed in the search box.

```javascript
const handleSearch = (searchText) => {
    console.log('Searching for:', searchText);
};

<Search onSearch={handleSearch} placeholder="Search..." />
```

```inline```