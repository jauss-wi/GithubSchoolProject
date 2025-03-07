import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setCount(data.length));
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
