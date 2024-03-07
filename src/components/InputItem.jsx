const style = {
    backgroundColor: "aquamarine",
    width: "500px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
}

export const InputItem = (props) => {
    const { itemText, onChange, onClick, disabled } = props;
    return (
        <div style={style}>
            <input disabled={disabled} placeholder='試したいことを入力' value={itemText} onChange={onChange}></input>
            <button disabled={disabled} onClick={onClick}>追加</button>
        </div>
    )
}