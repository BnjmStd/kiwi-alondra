import { useEffect, useState } from 'react';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useAsync = <T>(
  asyncFunction: () => Promise<T>,
  dependencies: any[] = []
): AsyncState<T> => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    
    asyncFunction()
      .then(data => setState({ data, loading: false, error: null }))
      .catch(error => setState({ 
        data: null, 
        loading: false, 
        error: error.message || 'An error occurred' 
      }));
  }, dependencies);

  return state;
};