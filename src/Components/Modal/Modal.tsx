import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
    ApplyContainer,
    CloseButton,
    HorizontalLine,
    Input,
    ModalContainer,
    ModalWrapper,
} from './ModalElements'
import axios from '../../axios'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Redux/features/userSlice'
import TaskInput from '../TaskInput/TaskInput'
import Button from '../Button/Button'
import TaskAdd from '../TaskAdd/TaskAdd'
import shortid from 'shortid'
interface CoolProps {
    groupId: number | null
    setActiveModal: any
    upDateList: boolean
    setGroupId: Dispatch<SetStateAction<number | null | undefined>>
    setUpDateList: Dispatch<SetStateAction<boolean>>
}

interface CoolTaks {
    name: string
    id: number
    isDone: boolean
}
const Modal = ({
    groupId,
    setActiveModal,
    upDateList,
    setGroupId,
    setUpDateList,
}: CoolProps) => {
    const [listName, setListName] = useState<string>('')
    const { jwt } = useSelector(selectUser)
    const [tasks, setTasks] = useState<CoolTaks[]>([])
    const [upDated, setUpdated] = useState<boolean>(false)
    const fetchTask = async () => {
        if (groupId) {
            await axios
                .get(`/to-do-lists/${groupId}`, {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                })
                .then((res) => {
                    setTasks([...res.data.task])
                    setListName(res.data.name)
                })
        }
    }

    const handleSaveTask = async () => {
        if (groupId) {
            await axios
                .put(
                    `/to-do-lists/${groupId}`,
                    {
                        name: listName,
                        task: tasks,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                        },
                    }
                )
                .then((res) => {
                    return
                })
                .catch((err) => {
                    console.log(err)
                })
            setGroupId(null)
            setActiveModal(false)
        } else {
            await axios
                .post(
                    '/to-do-lists',
                    {
                        name: listName,
                        task: tasks,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                        },
                    }
                )
                .then((res) => {
                    setUpdated(!upDated)
                })
                .catch((err) => console.log(err))
            setGroupId(null)
            setUpDateList(!upDateList)
            setActiveModal(false)
        }
    }

    const handleClose = () => {
        setUpDateList(!upDateList)
        setGroupId(null)
        setActiveModal(false)
    }

    useEffect(() => {
        fetchTask()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [groupId])
    return (
        <ModalWrapper>
            <ModalContainer>
                <div>
                    <Input
                        type="text"
                        placeholder="List name"
                        value={listName}
                        onChange={(e) => setListName(e.target.value)}
                        width="100%"
                    />
                    <HorizontalLine />
                    {tasks?.map((item) => (
                        <TaskInput
                            value={item.name}
                            id={item.id}
                            isDone={item.isDone}
                            key={item.id || shortid.generate()}
                            tasks={tasks}
                            setTasks={setTasks}
                        />
                    ))}
                    <TaskAdd tasks={tasks} setTasks={setTasks} />
                </div>
                <ApplyContainer>
                    <CloseButton onClick={() => handleClose()}>
                        CANCEL
                    </CloseButton>
                    <Button
                        text="SAVE"
                        color="#FF9900"
                        onClick={() => handleSaveTask()}
                    />
                </ApplyContainer>
            </ModalContainer>
        </ModalWrapper>
    )
}

export default Modal
