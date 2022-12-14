const Button = ({ hide, editTask, addTask, value, isAdd }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        if (!value) {
          alert("Пустая строка");
          return;
        }
        hide();
        if (!isAdd) {
          editTask(value);
          return;
        }
        addTask({ id: Date.now(), title: value.title, desc: value.desc, completed: false });
      }}
    >
      {!isAdd ? "Обновить" : "Добавить"}
    </button>
  );
};

export default Button;
