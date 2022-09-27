import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

interface TodosProps {
    id: string;
    title: string;
    isCompleted: Boolean;
    onChangeIsComplete: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export function Task({ id, title, isCompleted, onChangeIsComplete, onDeleteTask }: TodosProps) {

    function handleDeleteTask() {
        onDeleteTask(id);
    }

    function handleChangeIsComplete() {
        onChangeIsComplete(id);
    }

    return (
        <div>
            <ul>
                <li key={id} className={styles.todos}>
                    <div className={styles.tasks}>

                        <input
                            title='checkbox'
                            type="checkbox"
                            id={id}
                            onClick={handleChangeIsComplete}
                        />

                        <label>
                            <p>{title}</p>
                        </label>
                        <button
                            type='button'
                            title='delete'
                            onClick={handleDeleteTask}>
                            <Trash size={24} />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

