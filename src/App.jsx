import { useState } from 'react';
import './styles.css'

export const App = () => {
    const [itemText, setItemText] = useState("");
    const [incompleteItems, setIncompleteItems] = useState(["モダンな技術の学習", "ソフトウェアテスト工学"]);
    const [completeItems, setCompleteItems] = useState(["QAエンジニアの役割", "体重測定"]);

    const onChangeItemText = (event) => setItemText(event.target.value);

    const onClickAdd = () => {
        if (itemText === "") return;
        const newItems = [...incompleteItems, itemText];
        console.log(newItems);
        setIncompleteItems(newItems);
    };

    const onClickDelete = (i) => {
        const newItems = [...incompleteItems];
        newItems.splice(i, 1);
        setIncompleteItems(newItems);
    };

    const onClickComplete = (i) => {
        const newIncompleteItems = [...incompleteItems];
        newIncompleteItems.splice(i, 1);
        const newCompleteItems = [...completeItems, incompleteItems[i]];
        setIncompleteItems(newIncompleteItems);
        setCompleteItems(newCompleteItems);
    };

    return (
        <>
            <div className='input-area'>
                <input placeholder='試したいことを入力' value={itemText} onChange={onChangeItemText}></input>
                <button onClick={onClickAdd}>追加</button>
            </div>
            <div className='incomplete-area'>
                <p className='title'>試したいこと</p>
                <ul>
                    {incompleteItems.map((item, i) => (
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
            <div className='complete-area'>
                <p className='title'>試したこと（新しい体験・学んだこと）</p>
                <ul>
                    {completeItems.map((item) => (
                        <li key={item}>
                            <div className='list-row'>
                                <p className='try-item'>{item}</p>
                                <button>戻す</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}