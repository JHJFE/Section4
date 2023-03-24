function Textarea({ label, body, handler }) {
    return (
        <>
            <label>{label}</label>
            <textarea
                required
                value={body}
                onChange={handler}
                placeholder="내용을 입력해주세요."
            ></textarea>
        </>
    )
}

export default Textarea