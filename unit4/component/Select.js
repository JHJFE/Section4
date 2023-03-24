function Select({ label, author, handler }) {
    return (
        <>
            <label>{label}</label>
            <select
                value={author}
                onChange={handler}
            >
                <option value="kimcoding">김코딩</option>
                <option value="parkhacker">박해커</option>
            </select>
        </>
    )
}

export default Select

