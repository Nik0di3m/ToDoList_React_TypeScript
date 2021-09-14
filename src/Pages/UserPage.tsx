import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import ToDoGroup from '../Components/ToDoGroup/ToDoGroup'
import ToDoList from '../Components/ToDoList/ToDoList'
import Wrapper from '../Components/Wrapper/Wrapper'
import axios from '../axios'
import { useSelector } from 'react-redux'
import { selectUser } from '../Redux/features/userSlice'
import Modal from '../Components/Modal/Modal'

interface ItemData {
    id: number
    name: string
    created_at: string
    task: any[]
}

const UserPage = () => {
    const [taskGroup, setTaskGroup] = useState<ItemData[]>([])
    const [searchField, setSearchField] = useState<string>('')
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const [groupId, setGroupId] = useState<number | null>()
    const [upDateList, setUpDateList] = useState<boolean>(false)
    const [sortActive, setSortActive] = useState<boolean>(true)
    const { jwt } = useSelector(selectUser)

    const filterTask = taskGroup.filter((el) => {
        return el.name.includes(searchField)
    })

    const fetchTask = async () => {
        await axios
            .get('/to-do-lists', {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            .then((res) => {
                setTaskGroup([...res.data])
            })
    }

    const handleClickGroup = (item: number) => {
        setGroupId(item)
        setActiveModal(true)
    }

    useEffect(() => {
        fetchTask()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [groupId, upDateList])

    return (
        <Wrapper>
            <>
                <Header />
                <ToDoList
                    setSearch={setSearchField}
                    searchField={searchField}
                    setActiveModal={setActiveModal}
                    sortActive={sortActive}
                    setSortActive={setSortActive}
                >
                    {sortActive ? (
                        <>
                            {filterTask
                                .sort((a: any, b: any) => b - a)
                                .map((item: ItemData) => (
                                    <ToDoGroup
                                        id={item.id}
                                        name={item.name}
                                        date={item.created_at}
                                        tasks={item.task}
                                        taskGroup={taskGroup}
                                        setTaskGroup={setTaskGroup}
                                        key={item.id}
                                        onClick={() =>
                                            handleClickGroup(item.id)
                                        }
                                    />
                                ))}
                        </>
                    ) : (
                        <>
                            {filterTask.map((item: ItemData) => (
                                <ToDoGroup
                                    id={item.id}
                                    name={item.name}
                                    date={item.created_at}
                                    tasks={item.task}
                                    taskGroup={taskGroup}
                                    setTaskGroup={setTaskGroup}
                                    key={item.id}
                                    onClick={() => handleClickGroup(item.id)}
                                />
                            ))}
                        </>
                    )}
                </ToDoList>
                {activeModal && (
                    <Modal
                        groupId={groupId || null}
                        setActiveModal={setActiveModal}
                        setGroupId={setGroupId}
                        setUpDateList={setUpDateList}
                        upDateList={upDateList}
                    />
                )}
            </>
        </Wrapper>
    )
}

export default UserPage
