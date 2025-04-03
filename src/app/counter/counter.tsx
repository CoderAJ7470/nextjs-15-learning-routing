'use client'; // since this component uses a React hook - useState

import { useState } from 'react';

// Exporting metadata does not work in components marked with the "use client" directive, so what
// we do in such a case where we want to specify some metadata for a client-side component, is
// 1. have the client-side code in a separate file, like this one (counter.tsx), and then
// 2. import this file in the route's page.tsx like you would normally do with any React component
// and render it there (see the page.tsx file in the counter folder)

// export const metadata = {
//   title: 'Counter',
// };

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
