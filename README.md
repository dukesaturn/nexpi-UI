# Get Started

First things first, let's grab the package from the repository:

```bash
git clone https://github.com/dukesaturn/nexpi-UI
```

Next, you'll want to insert the `components` folder into the `app` folder of you app. Additionally, make sure to copy the `npx_global.css` file, that is in `theme` folder, into the `app` folder.

Import, in layout.tsx

```javascript
import { Inter } from "next/font/google";
import "./npx_global.css";
```

And in the body:

```javascript 
      <body color='var(--nxp-background-color)' className={inter.className}>
```


Now, it's time to dive in and have some fun with it!
Buon divertimento! 

Dependencies:

    react-icons (^5.2.1): A comprehensive library of icons for React.
    react-syntax-highlighter (^15.5.0): Syntax highlighting component for React.
    rehype-katex (^7.0.0): A plugin for rehype to support LaTeX math syntax in HTML.
    remark-math (^6.0.0): A remark plugin to support LaTeX math syntax in Markdown.

You can read the documentation here: http://dksengine.it/projects/nexpi
