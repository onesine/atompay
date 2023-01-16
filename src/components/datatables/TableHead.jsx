import styled from "styled-components";
import React from "react";

const TableHead = ({head = [], checkAll = true, checkValue = false, onChangeCheckValue, sort = null, onSort, viewButton, editButton, deleteButton, paginateData = null}) => {
    return (
        <Container>
            <tr>
                {checkAll && (
                    <CheckboxContainer>
                        <input
                            className="w-4 h-4 bg-gray-300 border-none rounded cursor-pointer form-checkbox focus:ring-0"
                            type="checkbox"
                            checked={checkValue}
                            onChange={e => onChangeCheckValue(e.target.checked)}
                        />
                    </CheckboxContainer>
                )}

                {head.map((item, index) => (
                    <HeadItem onClick={() => onSort(index)} key={index}>
                        <HeadItemContainer>
                            <span>{item}</span>

                            {(sort !== null && paginateData === null) && (
                                <ChevronContainer>
                                    <ChevronIcon opacityIcon={sort[index] !== null && sort[index] === 'asc'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></ChevronIcon>
                                    <ChevronIcon opacityIcon={sort[index] !== null && sort[index] === 'desc'} position={"bottom"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></ChevronIcon>
                                </ChevronContainer>
                            )}
                        </HeadItemContainer>
                    </HeadItem>
                ))}

                {((viewButton !== null) || (editButton !== null) || (deleteButton !== null)) && (
                    <HeadItem position={"center"}>Actions</HeadItem>
                )}
            </tr>
        </Container>
    );
};

export default TableHead;

const Container = styled.thead.attrs(props => ({
    className: ''
}))`
`;

const CheckboxContainer = styled.th.attrs(props => ({
    className: 'w-10 px-4 py-2 font-normal text-left text-gray-600'
}))``;

const HeadItem = styled.th.attrs(props => ({
    className: `px-4 py-2 font-semibold tracking-wider cursor-pointer text-${(['left', 'center', 'right'].includes(props.position)) ? props.position : 'left'} text-gray-600`
}))``;

const HeadItemContainer = styled.div.attrs(props => ({
    className: 'flex items-center justify-between w-full'
}))``;

const ChevronContainer = styled.div.attrs(props => ({
    className: 'flex flex-col'
}))``;

const ChevronIcon = styled.svg.attrs(props => ({
    className: `w-3 h-3 text-gray-500 ${props.opacityIcon ? 'text-opacity-30' : ''} ${props.position === "bottom" ? 'transform rotate-180' : ''}`,
}))``;
