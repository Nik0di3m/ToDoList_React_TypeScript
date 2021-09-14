import { Checkbox } from '@material-ui/core'
import Delete from '@material-ui/icons/Delete'
import React, { useState } from 'react'
import {
    DeleteIconContainer,
    TaskInputContainer,
    TaskInputField,
} from './TaskInputElements'
interface CoolProps {
    value: string
    id: number
    isDone?: boolean
    tasks: any[]
    setTasks: any
}
const TaskInput = ({ value, id, isDone, tasks, setTasks }: CoolProps) => {
    const [name, setName] = useState(value)

    const upDateItem = (id: number, val1: string, val2: boolean) => {
        let index = tasks.findIndex((task) => task.id === id)

        let g = tasks[index]
        g[val1] = val2
        if (index === -1) {
            console.log('nie ma taska')
        } else {
            setTasks([...tasks.slice(0, index), g, ...tasks.slice(index + 1)])
        }
    }

    const upDateNameTask = (id: number, val1: string, val2: string) => {
        let index = tasks.findIndex((task) => task.id === id)

        let g = tasks[index]
        g[val1] = val2
        if (index === -1) {
            console.log('nie ma taska')
        } else {
            setTasks([...tasks.slice(0, index), g, ...tasks.slice(index + 1)])
        }
    }

    const handleDelete = () => {
        setTasks(tasks.filter((el: any) => el.id !== id))
    }

    const handleChange = (e: string) => {
        setName(e)
        upDateNameTask(id, 'name', e)
    }

    return (
        <TaskInputContainer>
            <Checkbox
                checked={isDone}
                onChange={() => upDateItem(id, 'isDone', !isDone)}
            />
            <TaskInputField
                done={isDone}
                placeholder="Task"
                value={name}
                onChange={(e) => handleChange(e.target.value)}
            />
            <DeleteIconContainer onClick={() => handleDelete()}>
                <Delete />
            </DeleteIconContainer>
        </TaskInputContainer>
    )
}

export default TaskInput
