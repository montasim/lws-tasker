import { FaStar } from "react-icons/fa";
import ButtonComponent from "../ButtonComponent.jsx";

export default function TaskList({ tasks, onEdit, onDelete, onFav }) {
    return (
        <div className="overflow-auto">
            <table className="table-fixed xl:w-full">
                <thead>
                <tr>
                    <th className="p-3 pb-6 md:p-4 md:pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                    <th className="p-3 pb-6 md:p-4 md:pb-8 text-sm font-semibold capitalize w-[240px] md:w-[300px]">
                        {" "}
                        Title{" "}
                    </th>
                    <th className="p-3 pb-6 md:p-4 md:pb-8 text-sm font-semibold capitalize w-full">
                        {" "}
                        Description{" "}
                    </th>
                    <th className="p-3 pb-6 md:p-4 md:pb-8 text-sm font-semibold capitalize md:w-[300px]">
                        {" "}
                        Tags{" "}
                    </th>
                    <th className="p-3 pb-6 md:p-4 md:pb-8 text-sm font-semibold capitalize md:w-[100px]">
                        {" "}
                        Priority{" "}
                    </th>
                    <th className="p-3 pb-6 md:p-4 md:pb-8 text-sm font-semibold capitalize md:w-[100px]">
                        {" "}
                        Options{" "}
                    </th>
                </tr>
                </thead>

                <tbody>
                {tasks.map((task) => (
                    <tr
                        key={task.id}
                        className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-3 pb-2 md:p-4 md:pb-8"
                    >
                        <td>
                            <button onClick={() => onFav(task.id)}>
                                {task.isFavorite ? (
                                    <FaStar color="yellow" />
                                ) : (
                                    <FaStar color="gray" />
                                )}
                            </button>
                        </td>
                        <td>{task.title}</td>
                        <td>
                            <div>{task.description}</div>
                        </td>
                        <td>
                            <ul className="flex justify-center gap-1.5 flex-wrap">
                                {task.tags.map((tag) => (
                                    <li key={tag}>
                                            <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                                                {tag}
                                            </span>
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td className="text-center">{task.priority}</td>
                        <td>
                            <div className="flex items-center justify-center space-x-2 md:space-x-3">
                                <ButtonComponent
                                    type="button"
                                    customClass="text-red-500"
                                    onClick={() => onDelete(task.id)}
                                >
                                    Delete
                                </ButtonComponent>

                                <ButtonComponent
                                    type="button"
                                    customClass="text-blue-500"
                                    onClick={() => onEdit(task)}
                                >
                                    Edit
                                </ButtonComponent>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
