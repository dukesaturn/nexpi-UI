# <Stepper>

The Stepper component is used to guide users through a series of steps.
Props

  **steps**: An array of objects representing each step in the stepper. Each object should contain a data property that represents the content of the step.

```javascript

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

const step1 = { data: <Step1 />};
const step2 = { data: <Step2 />};
const step3 = { data: <Step3 />};

const steps = [step1, step2, step3];

...

<Stepper steps={steps} />;

```

```inline```