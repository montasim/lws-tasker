import ButtonComponent from "../ButtonComponent.jsx";

export default function TaskActions({ handleAddClick, handleDeleteAllClick }) {
    return (
        <div className="mb-4 sm:mb-14 flex flex-col sm:flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold mb-4 sm:max-sm:mb-0">Your Tasks</h2>

            <div className="flex items-center space-x-3 sm:space-x-5">
                <ButtonComponent
                    type="button"
                    customClass="rounded-md bg-blue-500 px-2.5 py-2 text-sm font-semibold"
                    onClick={handleAddClick}
                >
                    Add Task
                </ButtonComponent>

                <ButtonComponent
                    type="button"
                    customClass="rounded-md bg-red-500 px-2.5 py-2 text-sm font-semibold"
                    onClick={handleDeleteAllClick}
                >
                    Delete All
                </ButtonComponent>
            </div>
        </div>
    );
}
