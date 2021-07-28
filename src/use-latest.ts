import * as React from 'react';

export function useLatest<T extends unknown>(value: T): React.RefObject<T> {
  const ref = React.useRef(value);
  ref.current = value;
  return ref;
}
