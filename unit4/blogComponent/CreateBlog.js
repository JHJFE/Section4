import { useNavigate } from "react-router-dom";
import useCreate from "../util/useCreate";
import Input from "../component/Input";
import Textarea from "../component/Textarea";
import Select from "../component/Select";
const CreateBlog = () => {
  window.scrollTo(0, 0)

  const [title, titleHandler, body, bodyHandler, author, authorHandler] = useCreate()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    /* 등록 버튼을 누르면 게시물이 등록이 되며 home으로 리다이렉트 되어야 합니다. */
    /* 작성한 내용과 useNavigate를 이용하여 handleSubmit의 로직을 작성해보세요. */
    const createdData = {
      //id가 명시되어있지 않으면, json-server에서 id를 만들어서 넣어줌 (post요청상 하위에 데이터를 추가하는 방식임으로 데이터 길이에 따른 id 추가 일 것으로 추측)
      // id따로 명시해 줄수 있지만, 중복일 경우 요청자체가 무시됨
      title,
      body,
      author,
      likes: 0
    }//json-server는 자동으로 
    fetch('http://localhost:3001/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'//json 형식의 데이터 줄때
      },
      body: JSON.stringify(createdData)
    })
      .then(() => window.location.reload())

    navigate('/')
    console.log(e.type);
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <Input label='제목' title={title} handler={titleHandler} ></Input>
        <Textarea label='내용' body={body} handler={bodyHandler} ></Textarea>
        <Select label='작성자' author={author} handler={authorHandler} ></Select>
        <button>등록</button>
      </form>
    </div>
  );
}

export default CreateBlog; 