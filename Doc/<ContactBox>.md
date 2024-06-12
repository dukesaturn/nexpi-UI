# <ContactBox>

Here is a Contactbox component that displays a list of contact information including social media links, phone number, and email address.

The Contactbox component accepts the following props:

    * contacts: An array of objects, where each object contains platform and link properties.
    * phone (optional): A string representing the phone number.
    * email (optional): A string representing the email address.
  
To use the Contactbox component, you can include it in your JSX as shown below:

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