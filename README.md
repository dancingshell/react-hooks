# @straw-hat/react-hooks

A collection of React hooks.

## Usage

### useIsomorphicLayoutEffect

React currently throws a warning when using `useLayoutEffect` on the server. To
get around it, we can conditionally `useEffect` on the server (no-op) and
`useLayoutEffect` in the browser.

```tsx
import { useIsomorphicLayoutEffect } from '@straw-hat/react-hooks';

function MyComponent() {
  useIsomorphicLayoutEffect(()=> {
    // ...
  }, deps)
}
```

### useControlled

Used to create controlled values, useful for building controlled Form inputs.

```tsx
import * as React from "react";
import CheckIcon from "@material-ui/icons/Check";
import { FormState } from "react-hook-form";

import { useControlled } from '@straw-hat/react-hooks';

interface CheckboxInputProps {
  label: string;
  name: string;
  checked?: boolean;
  defaultChecked?: boolean;
  formState?: FormState<any>;
  onChange?: React.ChangeEventHandler<any>;
}

export const CheckboxInput = React.forwardRef<
  HTMLInputElement,
  CheckboxInputProps
>((props, ref) => {
  const [checked, setCheckedState] = useControlled({
    controlled: props.checked,
    default: Boolean(props.defaultChecked),
  });

  function onChange(event) {
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    props.onChange?.(event);
  }

  return (
    <label className="flex items-center cursor-pointer">
      <input
        className="hidden leading-tight"
        type="checkbox"
        name={props.name}
        checked={props.checked}
        defaultChecked={props.defaultChecked}
        ref={ref}
        onChange={onChange}
      />
      <div className="w-4 h-4 p-3  bg-red-700 rounded-md flex items-center justify-center">
        {checked && (
          <CheckIcon
            className="text-white"
            color="inherit"
            fontSize="inherit"
          />
        )}
      </div>
      <span className="ml-3 text-sm md:text-base font-semibold text-gray-600">
        {props.label}
      </span>
    </label>
  );
});
```

### useScript

Used to inject `script` tags.

```tsx
import * as React from "react";
import { useScript } from '@straw-hat/react-hooks';

function MyApp() {
  const { status, isReady } = useScript({ src: 'https://bit.ly/3se7YYw' });

  React.useEffect(() => {
    if (isReady) {
      // Do stuff from the script if you need to
    }
  }, [status]);

  return (
    <>
      ...
    </>
  )
}
```
