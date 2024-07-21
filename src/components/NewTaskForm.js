import React, {useState} from "react";

function NewTaskForm({ categoryList, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && category) {
      onTaskFormSubmit({ text, category });
      setText("");
      setCategory("");
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>Select category</option>
          {categoryList.map((category, id) => (
            <option key={id} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;