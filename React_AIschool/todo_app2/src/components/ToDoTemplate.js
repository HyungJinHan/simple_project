import './ToDoTemplate.scss'

const ToDoTemplate = ({ children }) => {
    return (
        <div className='ToDoTemplate'>
            <div className='app-title'>회원 관리</div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default ToDoTemplate;