import React, { ReactChild } from 'react'
import TextInput from '../TextInput/TextInput'
import {
    AddToDoGroup,
    Pluscontainer,
    PlusLine1,
    PlusLine2,
    SearchBar,
    SortButton,
    SortButtonIcon,
    ToDoListWrapper,
} from './ToDoListElements'

interface CoolProps {
    children: ReactChild
    setSearch: any
    searchField: string
    setActiveModal?: any
    sortActive: boolean
    setSortActive: any
}

const ToDoList = ({
    children,
    setSearch,
    searchField,
    setActiveModal,
    sortActive,
    setSortActive,
}: CoolProps) => {
    return (
        <ToDoListWrapper>
            <SearchBar>
                <TextInput
                    placeholder="Search"
                    value={searchField}
                    width="482px"
                    type="text"
                    onChange={setSearch}
                />
                <SortButton onClick={() => setSortActive(!sortActive)}>
                    <SortButtonIcon sort={sortActive}>
                        <svg
                            width="26"
                            height="21"
                            viewBox="0 0 26 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13 0L25.1244 21H0.875645L13 0Z"
                                fill="#C4C4C4"
                            />
                        </svg>
                    </SortButtonIcon>
                    <span style={{ width: '100%', textAlign: 'center' }}>
                        Sort by
                    </span>
                </SortButton>
            </SearchBar>
            {children}
            <AddToDoGroup onClick={() => setActiveModal(true)}>
                <Pluscontainer>
                    <PlusLine1 />
                    <PlusLine2 />
                </Pluscontainer>
            </AddToDoGroup>
        </ToDoListWrapper>
    )
}

export default ToDoList
