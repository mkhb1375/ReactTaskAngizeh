import React, { useState, useEffect } from 'react';
import './App.css';
import ListItem from './item';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    
    fetchData();
     
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.modernnegaresh.ir/v1/products/groups', {
        method: 'GET'
      });
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log(data)

  

  return (
    <div className="App">
      <div className='flex w-full lg:w-[90%] xl:w-[80%] 2xl:w-[70%] 3xl:w-[60%] mx-auto   justify-center lg:py-[10vh] flex-wrap'>
      {data && data.data.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
      </div>
      <p className='fixed bottom-0 left-[50vw] -translate-x-2/4 text-center bg-[white] w-min rounded hover:font-bold text-[0.8rem] lg:text-[1.1rem]  p-1'>Hosseini.Hadi@gmail.com</p>
    </div>
  );
}

export default App;

