import { useState, useEffect } from 'react';

const useFetch = (url) => {
  /* useState를 이용하여 data, isPending, error를 정의하세요. */

  /* useFetch 안의 중심 로직을 작성해주세요. */
  const [data, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  let [count, setCount] = useState(0)

  useEffect(() => {
    //console.log(data)
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data => {
          console.log(data.likes)

          if(data){setCount(data.likes)}

          console.log('asd',count)
          setIsPending(false);
          setBlogs(data);
          setError(null);

        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
    }, 1000);
  }, [])
  return [data, isPending, error, count]/* return 문을 작성해주세요. */
}


export default useFetch;