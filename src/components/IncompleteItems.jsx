export const IncompleteItems = (props) => {
    const { items, onClickComplete, onClickDelete } = props;
    return (
        <div className='incomplete-area'>
            <p className='title'>試したいこと</p>
            <ul>
                {items.map((item, i) => (
                        <li key={item}>
                            <div className='list-row'>
                                <p className='try-item'>{item}</p>
                                <button onClick={() => onClickComplete(i)}>完了</button>
                                <button onClick={() => onClickDelete(i)}>削除</button>
                            </div>
                        </li>
                ))}
            </ul>
        </div>
    )
}