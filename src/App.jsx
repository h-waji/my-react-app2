import { useState } from 'react';
import './styles.css'
import { InputItem } from './components/InputItem';
import { IncompleteItems } from './components/IncompleteItems';
import { CompleteItems } from './components/CompleteItems';

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

    const onClickBack = (i) => {
        const newCompleteItems = [...completeItems];
        newCompleteItems.splice(i, 1);
        const newIncompleteItems = [...incompleteItems, completeItems[i]];
        setCompleteItems(newCompleteItems);
        setIncompleteItems(newIncompleteItems);
    };

    return (
        <>
            <InputItem itemText={itemText} onChange={onChangeItemText} onClick={onClickAdd} />
            <IncompleteItems items={incompleteItems} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
            <CompleteItems items={completeItems} onClickBack={onClickBack} />
        </>
    );
}