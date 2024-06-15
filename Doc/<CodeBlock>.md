# <CodeBlock>

The `CodeBlock` component allows you to display syntax-highlighted code snippets that can be copied.

### Props

- **language**: `string`
  - Specifies the programming language of the code snippet.

- **value**: `string`
  - Contains the actual code to be displayed.


```javascript
<CodeBlock 
    language="javascript" 
    value={`const greeting = "Hello, World!";\nconsole.log(greeting);`} 
/>

```

```inline```