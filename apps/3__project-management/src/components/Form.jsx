import { forwardRef } from "react";

const Form = forwardRef(function ({ onSubmit, onClose }, ref) {
    const inputClasses = (additionalClass = "") => "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-b-2 focus:border-black " + additionalClass;
    return <form ref={ref} onSubmit={onSubmit}>
        <div className="flex justify-end gap-3">
            <button type="button" className="font-semibold" onClick={onClose}>Cancel</button>
            <button className="bg-stone-900 text-white rounded-lg px-5 py-2 font-semibold">Save</button>
        </div>
        <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase text-stone-500">Title</label>
                <input className={inputClasses()} type="text" name="title" required/>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase text-stone-500">Description</label>
                <textarea className={inputClasses('resize-none')} name="description" required></textarea>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase text-stone-500" >Due date</label>
                <input className={inputClasses()} type="date" name="due-date" required/>
            </div>
        </div>
    </form>
})

export default Form;