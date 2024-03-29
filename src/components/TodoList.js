import TodoListItem from './TodoListItem';
import styles from './TodoList.module.css';

const TodoList = (props) => 
{
    const list = [];
    for (let i = 0; i < props.todos.length; i++)
    {
        list.push(
            <TodoListItem todo={props.todos[i]} key={props.todos[i].id} onRemove={props.onRemove} onToggle={props.onToggle} />
        );
    }
    
    return (
        <div className={styles.TodoList}>
            {list}
        </div>
    );
};


export default TodoList;