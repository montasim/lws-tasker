import { useState } from "react";
import InputComponent from "../InputComponent.jsx"
import TextareaComponent from "../TextareaComponent.jsx";
import SelectComponent from "../SelectComponent.jsx";
import ButtonComponent from "../ButtonComponent.jsx";

export default function AddTaskModal({ onSave, taskToUpdate, onCloseClick }) {
    const [task, setTask] = useState(taskToUpdate || {
        id: crypto.randomUUID(),
        title: "",
        description: "",
        tags: [],
        priority: "",
        isFavorite: false,
    });

    const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));
    const priorityOptions = ["", "Low", "Medium", "High"];

    const handleChange = (evt) => {
        const name = evt.target.name;
        let value = evt.target.value;

        if (name === 'tags') {
            value = value.split(",");
        }

        setTask({
            ...task,
            [name]: value
        });
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-black bg-opacity-70 absolute inset-0"></div>
                <form className="relative mx-auto w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-4 md:p-9 lg:p-11 mt-4 md:mt-10 lg:mt-16 z-10">
                    <h2 className="mb-4 md:mb-9 text-center text-lg md:text-2xl lg:text-3xl font-bold text-white">
                        {isAdd ? "Add New Task" : "Edit Task"}
                    </h2>

                    <div className="space-y-4 md:space-y-9 text-white">
                        <div className="space-y-2">
                            <label htmlFor="title">Title</label>

                            <InputComponent
                                customClass="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                inputType="text"
                                inputPlaceholder=""
                                inputName="title"
                                inputId="title"
                                inputValue={task.title}
                                handleInputChange={handleChange}
                                isInputRequired={true}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description">Description</label>

                            <TextareaComponent
                                customClass="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                inputName="description"
                                inputId="description"
                                inputValue={task.description}
                                handleInputChange={handleChange}
                                isInputRequired={true}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 xl:gap-20">
                            <div className="space-y-2">
                                <label htmlFor="tags">Tags</label>

                                <InputComponent
                                    customClass="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                    inputType="text"
                                    inputPlaceholder=""
                                    inputName="tags"
                                    inputId="tags"
                                    inputValue={task.tags}
                                    handleInputChange={handleChange}
                                    isInputRequired={true}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="priority">Priority</label>

                                <SelectComponent
                                    customClass="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                                    inputName="priority"
                                    inputId="priority"
                                    inputValue={task.priority}
                                    options={priorityOptions}
                                    onChange={handleChange}
                                    isRequired={true}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-16 flex justify-between">
                        <ButtonComponent
                            type="button"
                            customClass="rounded bg-red-600 px-3 md:px-4 py-2 text-white transition-all hover:opacity-80 text-sm md:text-base"
                            onClick={onCloseClick}
                        >
                            Close
                        </ButtonComponent>

                        <ButtonComponent
                            type="submit"
                            customClass="rounded bg-blue-600 px-3 md:px-4 py-2 text-white transition-all hover:opacity-80 text-sm md:text-base"
                            onClick={() => onSave(task, isAdd)}
                        >
                            Save
                        </ButtonComponent>
                    </div>
                </form>
            </div>
        </>
    );
}
