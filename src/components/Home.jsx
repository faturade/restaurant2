import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      {loading ? <Loading /> : <p>Data loaded successfully!</p>}
    </div>
  );
};

export default Home;
