import { useState } from "react";
import useForm from "../hooks/useForm";

export default function TaskManager() {
    const [tasks, setTasks] = useState([]);

    const { values, handleChange, resetForm } = useForm({
        title: "",
        priority: "Low",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            title: values.title,
            priority: values.priority,
        };

        setTasks([...tasks, newTask]);
        resetForm();
    };

    return (
        <div className=" p-6">
            <h1 className="text-2xl font-bold mb-4">EcoTrack Task Manager</h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    value={values.title}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />

                <select
                    name="priority"
                    value={values.priority}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>

                <button
                    type="submit"
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Add Task
                </button>

            </form>

            <div className="mt-6">
                <h2>Tasks</h2>

                {tasks.length === 0 ? (
                    <p className="text-gray-500">No tasks added.</p>    
                ) : (
                    <ul className="space-y-2">
                        {tasks.map((task, index) => (
                            <li
                                key={index}
                                className="flex justify-between border p-2 rounded"
                            >
                                <span>{task.title}</span>
                                <span className="font-medium">{task.priority}</span>
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </div>
    );
}