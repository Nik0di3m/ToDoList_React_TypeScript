import React, { useEffect, useState } from 'react'
import {
    DeleteIconContainer,
    GroupCompleted,
    GroupDate,
    GroupName,
    ToDoGroupWrapper,
} from './ToDoGroupElements'
import DeleteIcon from '@material-ui/icons/Delete'
import axios from '../../axios'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Redux/features/userSlice'
interface CoolProps {
    id: number
    name: string
    date: string
    tasks: any[]
    setTaskGroup: any
    taskGroup: any
    onClick: () => void
}

interface CoolTask {
    isDone: boolean
}

const ToDoGroup = ({
    id,
    name,
    date,
    tasks,
    setTaskGroup,
    taskGroup,
    onClick,
}: CoolProps) => {
    const [taskCompleted, setTaskCompleted] = useState<any[]>([])
    const [taskUncompleted, setTaskUncompleted] = useState<any[]>([])
    const { jwt } = useSelector(selectUser)
    const filterCompletedTask = () => {
        if (tasks) {
            setTaskCompleted(tasks.filter((el: CoolTask) => el.isDone === true))
            setTaskUncompleted(
                tasks.filter((el: CoolTask) => el.isDone === false)
            )
        }
    }

    const handleDeleteItems = async () => {
        await axios
            .delete(`/to-do-lists/${id}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            .then((res) => {
                console.log(res)
                // Nie można dodać taska do głównej grupy
                setTaskGroup(taskGroup.filter((el: any) => el.id !== id))
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        filterCompletedTask()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasks])

    return (
        <ToDoGroupWrapper>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '95%',
                }}
                onClick={() => onClick()}
            >
                <GroupName>{name}</GroupName>
                <GroupDate>
                    Created at: {new Date(date).toLocaleDateString()}
                </GroupDate>
                <GroupCompleted>
                    Completed: {taskCompleted.length} Uncomplted:{' '}
                    {taskUncompleted.length} All:{' '}
                    {taskUncompleted.length + taskCompleted.length}
                </GroupCompleted>
            </div>
            <DeleteIconContainer>
                <DeleteIcon onClick={() => handleDeleteItems()} />
            </DeleteIconContainer>
        </ToDoGroupWrapper>
    )
}

export default ToDoGroup
