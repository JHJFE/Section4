import { useState } from "react";

function useCreate() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('김코딩');

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const bodyHandler = (e) => {
        setBody(e.target.value)
    }

    const authorHandler = (e) => {
        setAuthor(e.target.value)
    }

    return [title, titleHandler, body, bodyHandler, author, authorHandler]

}

export default useCreate 