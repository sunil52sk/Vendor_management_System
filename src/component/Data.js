import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Display from './Display';
function Data(props) {
  const [content, setContent] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:8080/showvendors')
      .then(response => {
        setContent(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {/* Pass the fetched data as props to the Display component */}
      {console.log(content)}
      <Display notes={content}/>
    </div>
  );
}
export default Data;
