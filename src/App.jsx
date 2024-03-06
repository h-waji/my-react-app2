import { useState } from 'react';
import './styles.css'

export const App = () => {
    const [incompleteItems, setIncompleteItems] = useState(["モダンな技術の学習", "ソフトウェアテスト工学"]);
    const [completeItems, setCompleteItems] = useState(["QAエンジニアの役割", "体重測定"]);
    return (
        <>
            <div className='input-area'>
                <input placeholder='試したいことを入力'></input>
                <button>追加</button>
            </div>
            <div className='incomplete-area'>
                <p className='title'>試したいこと</p>
                <ul>
                    {incompleteItems.map((item) => (
                            <li key={item}>
                                <div className='list-row'>
                                    <p className='try-item'>{item}</p>
                                    <button>完了</button>
                                    <button>削除</button>
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