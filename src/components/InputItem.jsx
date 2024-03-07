export const InputItem = (props) => {
    const { itemText, onChange, onClick } = props;
    return (
        <div className='input-area'>
            <input placeholder='試したいことを入力' value={itemText} onChange={onChange}></input>
            <button onClick={onClick}>追加</button>
        </div>
    )
}