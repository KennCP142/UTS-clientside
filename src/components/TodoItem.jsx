import React, { useState } from 'react';
import { Trash2, Edit2, Check, X } from 'lucide-react';

const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2 p-2 bg-white rounded-lg shadow">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 p-2 border rounded"
          autoFocus
        />
        <button
          onClick={handleEdit}
          className="p-1 text-green-600 hover:text-green-800"
        >
          <Check size={20} />
        </button>
        <button
          onClick={() => {
            setIsEditing(false);
            setEditText(todo.text);
          }}
          className="p-1 text-red-600 hover:text-red-800"
        >
          <X size={20} />
        </button>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 p-2 rounded-lg shadow ${todo.completed ? 'bg-green-100' : 'bg-white'}`}>
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>
      <button
        onClick={() => setIsEditing(true)}
        className="p-1 text-blue-600 hover:text-blue-800"
      >
        <Edit2 size={20} />
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-1 text-red-600 hover:text-red-800"
      >
        <Trash2 size={20} />
      </button>
      <button
        onClick={() => onToggle(todo.id)}
        className={`px-3 py-1 rounded ${
          todo.completed 
            ? 'bg-green-500 text-white hover:bg-green-600' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Done
      </button>
    </div>
  );
};

export default TodoItem;