function Input({ label,title, handler }) {
    return (
        <>
            <label>{label}</label>
            <input
                type="text"
                required
                value={title}
                onChange={handler}
                placeholder="제목을 입력해주세요."
            />
        </>
    )
}

export default Input