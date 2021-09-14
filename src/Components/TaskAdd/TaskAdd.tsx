import React, { Dispatch, SetStateAction, useState } from 'react'
import { ButtonContainer, SmallButton } from '../Modal/ModalElements'
import { TaskInputContainer, TaskInputField } from './TaskAddElements'
import { Checkbox } from '@material-ui/core'

interface CoolProps {
    tasks: any[]
    setTasks: Dispatch<SetStateAction<any[]>>
}
const TaskAdd = ({ tasks, setTasks }: CoolProps) => {
    const [newTaskName, setNewTaskName] = useState<string>('')

    const handleSubmitTask = () => {
        setTasks([...tasks, { name: newTaskName, isDone: false }])
        console.log(tasks)
        setNewTaskName('')
    }

    return (
        <div>
            <TaskInputContainer>
                <Checkbox checked={false} readOnly />
                <TaskInputField
                    placeholder="Task"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                />
            </TaskInputContainer>
            <ButtonContainer>
                <SmallButton color="#FF3D00" onClick={() => setNewTaskName('')}>
                    CANCEL
                </SmallButton>
                <SmallButton color="#FF9900" onClick={() => handleSubmitTask()}>
                    ADD
                </SmallButton>
            </ButtonContainer>
        </div>
    )
}

export default TaskAdd
