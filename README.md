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
