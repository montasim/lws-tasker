import { useState } from "react";

import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import NoTasksFound from "./NoTasksFound";

export default function TaskBoard() {
    const defaultTask = {
        id: crypto.randomUUID(),
        title: "Learn React Native",
        description:
            "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
        tags: ["web", "react", "js"],
        priority: "High",
        isFavorite: true,
    };

    const [tasks, setTasks] = useState([defaultTask]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    const handleAddEditTask = (newTask, isAdd) => {
        if (isAdd) {
            setTasks([...tasks, newTask]);
        } else {
            setTasks(
                tasks.map((task) => {
                    if (task.id === newTask.id) {
                        return newTask;
                    }
                    return task;
                })
            );
        }

       handleCloseClick();
    }

    const handleEditTask = (task) => {
        setTaskToUpdate(task);
        setShowAddModal(true);
    }

    const handleDeleteTask = (taskId) => {
        const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
        setTasks(tasksAfterDelete);
    }

    const handleDeleteAllClick = () => {
        tasks.length = 0;
        setTasks([...tasks]);
    }

    const handleFavorite = (taskId) => {
        // This portion of the commented code is not fully perfect. Here
        // we are not doing the deep cloning of the tasks array. The tasks array has
        // objects inside, while using the spread operator, it will only make the shallow copy.
        // But we need to do the deep copy.

        // We are not removing this commented code as it was part of the recording.
        // But the same code is now made better and written below.
        /*
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        const newTasks = [...tasks];
        newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
        setTasks(newTasks);
        */

        // The better way of managing updates in the object within an array as a
        // state in react.
        setTasks(tasks.map((task) => {
            if (task.id === taskId) {
                return {...task, isFavorite: !task.isFavorite};
            } else {
                return task;
            }
        }))
    }

    const handleSearch = (searchTerm) => {
        console.log(searchTerm);

        const filtered = tasks.filter((task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setTasks([...filtered]);
    }

    const handleCloseClick = () => {
        setShowAddModal(false);
        setTaskToUpdate(null);
    }

    return (
        <section className="mb-4 md:mb-8 lg:mb-10" id="tasks">
            {showAddModal && (
                <AddTaskModal
                    onSave={handleAddEditTask}
                    onCloseClick={handleCloseClick}
                    taskToUpdate={taskToUpdate}
                />
            )}

            <div className="container">
                <div className="p-2 md:flex justify-end">
                    <SearchTask onSearch={handleSearch}/>
                </div>

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] p-4 md:p-6 lg:p-9">
                    <TaskActions
                        handleAddClick={() => setShowAddModal(true)}
                        handleDeleteAllClick={handleDeleteAllClick}
                    />

                    {tasks.length > 0 ? (
                        <TaskList
                            tasks={tasks}
                            onEdit={handleEditTask}
                            onDelete={handleDeleteTask}
                            onFav={handleFavorite}
                        />
                    ) : (
                        <NoTasksFound/>
                    )}
                </div>
            </div>
        </section>
    );
}
