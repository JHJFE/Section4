import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../util/useFetch";
const BlogDetails = () => {
  // const [blog, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  window.scrollTo(0,0)
  const [isLike, setIsLike] = useState(true);
  const { id } = useParams();
  const [data, isPending, error,count] = useFetch(`http://localhost:3001/blogs/${id}`)
  
  const navigate = useNavigate();

  console.log(id)
  /* 현재는 개별 블로그 내용으로 진입해도 내용이 보이지 않습니다. */
  /* useParams와 id를 이용하여 개별 블로그의 내용이 보일 수 있게 해봅시다. */
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch(`http://localhost:3001/blogs/${id}`)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw Error('could not fetch the data for that resource');
  //       } 
  //       return res.json();
  //     })
  //     .then(data => {
  //       setIsPending(false);
  //       setBlogs(data);
  //       setError(null);
  //     })
  //     .catch(err => {
  //       setIsPending(false);
  //       setError(err.message);
  //     })
  //   }, 1000);
  // }, [])

  const handleDeleteClick = () => {
    /* delete 버튼을 누르면 다시 home으로 리다이렉트 되어야 합니다. */
    /* useNavigate()를 이용하여 handleDeleteClick 로직을 작성해주세요. */
    fetch(`http://localhost:3001/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'//json 형식의 데이터 줄때
      },
    })
    .then(()=>{window.location.reload()})
    navigate('/')
    window.scrollTo(0,0)

    console.log('delete!');
  }

  const handleLikeClick = () => { //
    let likesnum = data.likes
    
    /* 하트를 누르면 home에서 새로고침을 했을 때 숫자가 올라가야 합니다. */
    /* isLike와 blog.likes를 이용하여 handleLikeClick의 로직을 작성해주세요. */
    if (isLike) {
      likesnum++
    }
    
    //setLikes(likesnum)
    setIsLike(!isLike)
    // console.log(data)
    const newData = {
      ...data, likes: likesnum
    }


    fetch(`http://localhost:3001/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'//json 형식의 데이터 줄때
      },
      body: JSON.stringify(newData)
    })

    console.log('like!');
  }


  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>

          <button onClick={handleLikeClick}>
            {/* isLike에 의해 조건부 렌더링으로 빨간 하트(❤️)와 하얀 하트(🤍)가 번갈아 보여야 합니다. */}
            {isLike ? `🤍 ${count}` : `❤️${count+1}`}
          </button>
          <button onClick={handleDeleteClick}>delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails; 