import styled from "styled-components";
import React from "react";
import {NavLink} from "react-router-dom";
import {Loader} from "../utils";

const DatatableHead = ({data, searchValue = "", onChangeSearchValue, numberPerPage = 7, onChangeNumberPerPage, onClick, addButton, checkAll, loading = false, paginateData = null}) => {
    return (
        <Container>
            <LeftContainer>
                <SelectLabel>Results: </SelectLabel>
                <Select value={numberPerPage} onChange={e => onChangeNumberPerPage(e.target.value)}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={50}>100</option>
                </Select>

                {addButton && (
                    addButton.type === 'link' ? (
                        <NavLink
                            to={addButton.url}
                            className={`px-6 py-2 text-xs font-light text-white transition duration-300 bg-indigo-600 rounded shadow-xl hover:shadow-none`}
                        >
                            {addButton.text}
                        </NavLink>
                    ) : (
                        <>
                            <Button onClick={addButton.click} color={"indigo"} varient={"600"}>{addButton.text}</Button>

                            {addButton.form}
                        </>
                    )
                )}
            </LeftContainer>

            <RightContainer>
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={e => onChangeSearchValue(e.target.value)}
                    />
                    {(searchValue.length > 0 && paginateData !== null && loading) ? (
                        <Loader color={"indigo"} size={"md"} className="absolute right-0 top-2 mr-2.5 z-50"/>
                    ) : (
                        <InputIcon fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></InputIcon>
                    )}
                </div>

                {(checkAll && data.filter(item => item.checked).length > 0) && (
                    <Button onClick={onClick} color={"red"} varient={"500"}>Delete</Button>
                )}
            </RightContainer>
        </Container>
    );
};

export default DatatableHead;

const Container = styled.div.attrs(props => ({
    className: 'flex items-center justify-between p-5'
}))``;

const LeftContainer = styled.div.attrs(props => ({
    className: 'flex items-center space-x-3'
}))``;

const RightContainer = styled.div.attrs(props => ({
    className: 'flex items-center space-x-3'
}))``;

const Select = styled.select.attrs(props => ({
    className: 'py-1.5 rounded-md text-xs focus:ring-0 border-gray-300 text-gray-700 focus:border-gray-500'
}))``;

const SelectLabel = styled.span.attrs(props => ({
    className: 'text-sm text-gray-500'
}))``;

const Button = styled.button.attrs(props => ({
    className: `px-6 py-2 text-xs font-light text-white transition duration-300 bg-${props.color}-${props.varient} rounded shadow-xl hover:shadow-none`
}))``;

const Input = styled.input.attrs(props => ({
    className: 'text-xs text-gray-700 placeholder-gray-300 transition duration-300 border-gray-200 rounded-md pr-9 focus:ring-0 focus:border-gray-500'
}))``;

const InputIcon = styled.svg.attrs(props => ({
    className: 'w-6 h-6 absolute right-0 top-1.5 mr-2 text-gray-300'
}))``;
