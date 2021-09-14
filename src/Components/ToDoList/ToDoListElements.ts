import styled from 'styled-components'
export const ToDoListWrapper = styled.div`
    width: 1175px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 45px;
    position: relative;
`
export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SortButton = styled.button`
    width: 265px;
    height: 50px;
    background: #ffffff;
    border-radius: 8px;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    margin-top: 36px;
    display: flex;
    align-items: center;
    position: relative;
    transition: all 100ms ease-in;
    :hover {
        scale: 1.05;
    }
    :active {
        scale: 0.95;
    }
`
type SortButtonType = {
    sort?: boolean
}

export const SortButtonIcon = styled.div<SortButtonType>`
    position: absolute;
    transition: all 100ms ease-in;
    transform: ${(props: any) =>
        props.sort ? 'rotate(0deg)' : 'rotate(180deg)'};
`

export const AddToDoGroup = styled.div`
    position: absolute;
    bottom: -40px;
    right: 30px;
    width: 104px;
    height: 104px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 100ms ease-in;
    :hover {
        scale: 1.05;
    }
    :active {
        scale: 0.95;
    }
`
export const Pluscontainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PlusLine1 = styled.div`
    width: 78px;
    height: 0px;
    border: 5px solid #ff9900;
    transform: rotate(-180deg);
`
export const PlusLine2 = styled.div`
    position: absolute;
    width: 78px;
    height: 0px;
    border: 5px solid #ff9900;
    transform: rotate(90deg);
`
