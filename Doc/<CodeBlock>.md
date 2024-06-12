# <CodeBlock>

Here is a CodeBlock component that allows you to display and copy syntax-highlighted code snippets.

The CodeBlock component accepts the following props:

    * language: A string that specifies the programming language of the code.
    * value: A string that contains the code to be displayed.

To use the CodeBlock component, you can include it in your JSX as shown below:

```javascript
<CodeBlock 
    language="javascript" 
    value={`const greeting = "Hello, World!";\nconsole.log(greeting);`} 
/>

```

```inline```