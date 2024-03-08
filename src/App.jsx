import { useState } from 'react';
import './styles.css'
import { InputItem } from './components/InputItem';
import { IncompleteItems } from './components/IncompleteItems';
import { CompleteItems } from './components/CompleteItems';

export const App = () => {
    const [itemText, setItemText] = useState("");
    const [incompleteItems, setIncompleteItems] = useState(["モダンな技術の学習", "ソフトウェアテスト工学"]);
    const [completeItems, setCompleteItems] = useState(["QAエンジニアの役割", "体重測定"]);
    const [histories, setHistories] = useState(["[追加]: 履歴１だよ", "[追加]: 履歴2だよ", "[戻す]: 履歴3だよ"]);

    const onChangeItemText = (event) => setItemText(event.target.value);

    const onClickAdd = () => {
        if (itemText === "") return;
        const newItems = [...incompleteItems, itemText];
        console.log(newItems);
        setIncompleteItems(newItems);
        // 履歴
        const newHistories = [...histories, `[追加]: ${itemText}`];
        setHistories(newHistories);
    };

    const onClickDelete = (i) => {
        const newItems = [...incompleteItems];
        newItems.splice(i, 1);
        setIncompleteItems(newItems);
        // 履歴
        const newHistories = [...histories, `[削除]: ${incompleteItems.pop()}`];
        setHistories(newHistories);
    };

    const onClickComplete = (i) => {
        const newIncompleteItems = [...incompleteItems];
        newIncompleteItems.splice(i, 1);
        const newCompleteItems = [...completeItems, incompleteItems[i]];
        setIncompleteItems(newIncompleteItems);
        setCompleteItems(newCompleteItems);
        // 履歴
        const newHistories = [...histories, `[完了]: ${incompleteItems[i]}`];
        setHistories(newHistories);
    };

    const onClickBack = (i) => {
        const newCompleteItems = [...completeItems];
        newCompleteItems.splice(i, 1);
        const newIncompleteItems = [...incompleteItems, completeItems[i]];
        setCompleteItems(newCompleteItems);
        setIncompleteItems(newIncompleteItems);
        // 履歴
        const newHistories = [...histories, `[戻す]: ${completeItems[i]}`];
        setHistories(newHistories);
    };

    const isMaxLimit = incompleteItems.length >= 6;

    return (
        <>
            <InputItem itemText={itemText} onChange={onChangeItemText} onClick={onClickAdd} disabled={isMaxLimit} />
            {isMaxLimit && (
                <p style={{ color: "red" }}>
                    Max 6
                </p>
            )}
            <IncompleteItems items={incompleteItems} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
            <CompleteItems items={completeItems} onClickBack={onClickBack} />
            <div className='complete-area'>
                <p className='title'>履歴</p>
                <ul>
                    {histories.map((history) => (
                        <li key={history}>
                            <div className='list-row'>
                                <p>{history}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}