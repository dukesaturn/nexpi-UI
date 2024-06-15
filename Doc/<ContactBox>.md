# <ContactBox>

The `ContactBox` component displays contact information including social media links, phone number, and email address.

### Props

- **contacts**: `Array<{ platform: string, link: string }>`
  - An array of objects where each object contains `platform` (string) and `link` (string) properties representing social media links.

- **phone** (optional): `string`
  - Represents the phone number.

- **email** (optional): `string`
  - Represents the email address.


```javascript
const contacts = [
    { platform: 'Facebook', link: 'https://facebook.com/yourprofile' },
    { platform: 'Instagram', link: 'https://instagram.com/yourprofile' },
    { platform: 'Twitter', link: 'https://twitter.com/yourprofile' },
    { platform: 'Github', link: 'https://github.com/yourprofile' },
    { platform: 'Linkedin', link: 'https://linkedin.com/in/yourprofile' },
];

<Contactbox 
    contacts={contacts} 
    phone="+1234567890" 
    email="youremail@example.com" 
/>
```

```inline```