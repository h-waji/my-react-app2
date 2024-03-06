import './styles.css'

export const App = () => {
    return (
        <>
            <div className='input-area'>
                <input placeholder='試したいことを入力'></input>
                <button>追加</button>
            </div>
            <div className='incomplete-area'>
                <p className='title'>試したいこと</p>
                <ul>
                    <li>
                        <div className='list-row'>
                            <p className='try-item'>モダンな技術の習得</p>
                            <button>完了</button>
                            <button>削除</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='complete-area'>
                <p className='title'>試したこと（新しい体験・学んだこと）</p>
                <ul>
                    <li>
                        <div className='list-row'>
                            <p className='try-item'>ソフトウェアテスト工学</p>
                            <button>戻す</button>
                        </div>
                    </li>
                    <li>
                        <div className='list-row'>
                            <p className='try-item'>QAエンジニアの役割</p>
                            <button>戻す</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}