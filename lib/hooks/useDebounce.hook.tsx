import { useState, useEffect } from 'react';

/**
 * Hook to debounce a value: it will return the value after a delay.
 *
 * @param value The value to be debounced.
 * @param delay The delay in milliseconds.
 *
 * @example
 * const debouncedValue = useDebounce(inputCA, 1000);
 *
 * useEffect(() => {
 *  if (debouncedValue) {
 *   getData(debouncedValue);
 * }, [debouncedValue]);
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
