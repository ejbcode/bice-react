import axios from 'axios';
import React, { useState } from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Loader from './components/Loader';

function App() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [id, setId] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setData();
    const URL = `https://dn8mlk7hdujby.cloudfront.net/interview/insurance/${id}`;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios(`${URL}`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  };

  if (error) {
    return <p>Error:{error.message}</p>;
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit} setId={setId} />
      {loading && <Loader />}
      {data && <Card data={data} />}
    </div>
  );
}

export default App;
