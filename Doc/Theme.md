# Theme 

The `Theme` component enables dynamic theming for your Next.js application using the `next-themes` library.

### Props

- **children** (`ReactNode`, required): The child components to which the theme is applied.

```javascript

const simpleLayout = ({ ...props }: LayoutProps) => {

  
  return (
    <html lang="en" >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{margin : '0px', padding : '0px'}} >
        <Theme>
          {props.children}
        </Theme>
      </body>

    </html>
  );
}

```


```inline```

## Change Theme
`useTheme Hook`

You can change the theme using the `useTheme` hook provided by `next-themes`.

```javascript

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <>
      <Switch factory="primary"
        callBackSwitch={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      />
    </>
  );
}
```
