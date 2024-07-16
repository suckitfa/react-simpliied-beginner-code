import { useContext, useState } from "react"
import { TodoContext } from "."

export default function TodoFilterForm({
    name, setName
}) {
    return (
        <div className="filter-form">
            <div className="filter-form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <label>
                <input type="checkbox" />
                Hide Completed
            </label>
        </div>
    )
}