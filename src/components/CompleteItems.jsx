export const CompleteItems = (props) => {
    const { items, onClickBack } = props;
    return (
        <div className='complete-area'>
            <p className='title'>試したこと（新しい体験・学んだこと）</p>
            <ul>
                {items.map((item, i) => (
                    <li key={item}>
                        <div className='list-row'>
                            <p className='try-item'>{item}</p>
                            <button onClick={() => onClickBack(i)}>戻す</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}