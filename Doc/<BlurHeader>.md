# <BlurHeader>
The `BlurHeader` component renders a header with a blurred background.

## Props

- **children** (`React.ReactNode`, optional): Content to be displayed inside the header.
- **className** (`string`, optional): Additional CSS class names for customization.
- **style** (`React.CSSProperties`, optional): Additional CSS styles to be applied to the header.

```javascript
    <div style={{ maxHeight: '180px', overflowY: 'scroll' }}>
      <BlurHeader >Header</BlurHeader>
      <p>
        Arma virumque cano, Troiae qui primus ab oris<br />
        Italiam, fato profugus, Laviniaque venit<br />
        litora, multum ille et terris iactatus et alto<br />
        vi superum saevae memorem Iunonis ob iram;<br />
        multa quoque et bello passus, dum conderet urbem,<br />
        inferretque deos Latio, genus unde Latinum,<br />
        Albanique patres, atque altae moenia Romae.<br />
        Musa, mihi causas memora, quo numine laeso,<br />
        quidve dolens, regina deum tot volvere casus<br />
        insignem pietate virum, tot adire labores<br />
        impulerit. Tantaene animis caelestibus irae?<br />
      </p>
    </div>
  </>
```
```inline```

 You can change the style.

```javascript
<BlurHeader style={{backgroundColor:'var(--nxp-yellow)'}}>
Header 
</BlurHeader>
```

```inline```


