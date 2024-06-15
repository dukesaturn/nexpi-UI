# <Modal>

The Modal component provides a simple way to create modal dialogs in React applications. It allows you to control the visibility of the modal and includes a mechanism to handle closing events.

### Props

- **isOpen** (`boolean`, required):
  - Determines whether the modal is open or closed.

- **onClose** (`function`, required):
  - Callback function invoked when the modal is closed.

- **children** (`ReactNode`, required):
  - The content to be rendered within the modal.

- **style** (optional):
  - An object to apply custom styles to the modal.

```javascript
"use client";
import Modal from '@/app/components/Modal';
import { useState } from 'react';
import Button from '@/app/components/Button';

const Component = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
        <Button style={{ marginLeft: '3rem' }} factory='primary' onClick={() => setIsOpen(true)}>Modal</Button>
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '1rem' }}>
          <Typography type='h2' style={{ color: 'var(--primary-color)' }}>Terms</Typography>
          <Typography>By using this application, you agree to our Terms of Use.
            Please read them carefully. These terms govern your use of the app and provide information about the app,
            outlined in our Privacy Policy. If you do not agree to these terms, please do not use the app.
            Your continued use of the app signifies your acceptance of these terms</Typography>
          <Button factory='primary' onClick={() => setIsOpen(false)}>Accept</Button>
        </Box>
      </Modal>
      </>
    )
}


```

```inline```