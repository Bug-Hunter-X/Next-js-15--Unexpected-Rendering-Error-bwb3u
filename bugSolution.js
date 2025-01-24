```javascript
// pages/index.js
import {useEffect, useState} from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/hello');
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);
  
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph. {data.message}</p>
    </div>
  );
}
```