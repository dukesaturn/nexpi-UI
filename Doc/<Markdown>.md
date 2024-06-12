# <Markdown>

The Markdown component is a versatile component for rendering Markdown content with support for mathematical notation using KaTeX. It leverages react-markdown along with remark-math and rehype-katex for parsing and rendering mathematical expressions.

The Markdown component accepts all the props that react-markdown supports, along with some additional configurations for styling and rendering

```javascript

const Markdown1 = <Markdown>
{`
## Mathematical Analysis Equations

### Limit of a Function

The limit of a function $f(x)$ as $x$ approaches $a$ is given by:

$$
\\lim_{{x \\to a}} f(x) = L
$$

### Derivative

The derivative of a function $f(x)$ with respect to $x$ is:

$$
f'(x) = \\lim_{{h \\to 0}} \\frac{f(x+h) - f(x)}{h}
$$

### Integral

The indefinite integral of a function $f(x)$ with respect to $x$ is:

$$
\\int f(x) \\, dx = F(x) + C
$$

where $F(x)$ is the antiderivative of $f(x)$ and $C$ is the constant of integration.
`}
</Markdown>

```

```inline```