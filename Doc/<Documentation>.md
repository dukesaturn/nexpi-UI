# <Documentation>

The 'Documentation' component allows displaying documentation, including both Markdown text and code.

The component accepts the following props:

### Props

- **path**: `string`
  - Represents the path of the documentation file.

- **id** (optional): `string`
  - Represents the ID of the component.

- **children** (optional): `React.ReactNode[]`
  - An array of React elements used to insert JSX components directly into the documentation.

The Documentation component allows displaying documentation, including both Markdown text and code. 

The component fetches documentation from a given path, processes the text to extract Markdown and code blocks, and then renders them accordingly. It supports both Markdown rendering and syntax-highlighted code blocks. 

```javascript 
<Documentation path='http://localhost:3000/markdown/<Example>.md'>
</Documentation>
```

```inline```

In contrast to Next.js 14, where JSX is directly inserted into .mdx files, the approach with this component involves passing an 'inline' directive to specify that the children declared within the React component itself will be rendered there.This is a good practice for separating documentation from the code itself.


```inline```

In the parent component:

```javascript
import Button from "@/app/components/Button"
import Documentation from "@/app/components/Documentation"

const inline1 = <Button>Click me </ Button>
const Chuncks = [inline1];

const DocPage = () => {
    return (
            <Documentation path='http://localhost:3000//markdown/<NewExample>.md' >
                {Chuncks}
            </Documentation>
    )
}

export default DocPage;
```

```inline```





This component provides a versatile approach to rendering documentation, enabling seamless integration of both Markdown and JSX components.