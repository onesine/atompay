import React, {useState, useEffect, useMemo, useCallback} from "react";
import {Menu} from "@headlessui/react";
import {css, StyleSheet} from "aphrodite";
import styled from "styled-components";
import DatatableHead from "./DatatableHead";
import DatatableFooter from "./DatatableFooter";
import TableHead from "./TableHead";
import {NavLink} from "react-router-dom";
import {confirmAlert} from "../../helpers";
import {Loader} from "../utils";

const styles = StyleSheet.create({
    fadeInDown: {
        animationName: {
            "from": {
                "opacity": 0,
                "transform": "translate3d(0, -20px, 0)"
            },
            "to": {
                "opacity": 1,
                "transform": "none"
            }
        },
        animationDuration: "0.3s"
    },
});

const  Datatable = ({list = [], loadData = null, paginateData = null, head = [], dataProperty = [], checkAll = true, onDeleteItem, onDeleteItems = null, addButton = null, viewButton = null, editButton = null, deleteButton = null, generateButton = null, loading = false, confirmButtonText = "Yes, delete!", loadDataBySearch = null, statusData = null}) =>  {
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [numberPerPage, setNumberPerPage] = useState(10);
    const [data, setData] = useState(list);
    const [check, setCheck] = useState(false);
    const [sort, setSort] = useState(null);

    useEffect(() => {
        if (paginateData) {
            setCurrentPage(paginateData['current_page']);
            setNumberPerPage(paginateData['per_page']);
        }
    }, [paginateData]);

    useEffect(() => {
        setData(list.map(item => {
            return {
                ...item,
                checked: false
            }
        }));
        setSort(dataProperty.map(() => null));
    }, [list, dataProperty]);

    const resetCheck = useCallback(() => {
        if (check) {
            setCheck(false);
        }
        setData(d => d.map(item => {
            return {
                ...item,
                checked: false
            }
        }));
    }, [check]);

    const sortFilterResult = useCallback(filterResult => {
        if (sort === null) {
            return  filterResult
        }
        let sortValue = null;
        sort.forEach((item, index) => {
            if (item !== null) {
                sortValue = {
                    index: index,
                    value: item
                }
            }
        });

        if (sortValue === null) {
            return filterResult
        }

        return filterResult.sort((a, b) => {
            const firstText = a[dataProperty[sortValue.index]].text ? a[dataProperty[sortValue.index]].text+"" : "";
            const secondText = b[dataProperty[sortValue.index]].text ? b[dataProperty[sortValue.index]].text+"" : "";
            if (sortValue.value === 'asc') {
                if ( firstText.toLowerCase() < secondText.toLowerCase() ){
                    return -1;
                }
                if ( firstText.toLowerCase() > secondText.toLowerCase() ){
                    return 1;
                }
            } else if (sortValue.value === 'desc') {
                if ( firstText.toLowerCase() > secondText.toLowerCase() ){
                    return -1;
                }
                if ( firstText.toLowerCase() < secondText.toLowerCase() ){
                    return 1;
                }
            }
            return 0;
        });
    }, [dataProperty, sort]);

    let showData = useMemo(() => {
        const startIndex = (currentPage - 1)*numberPerPage;
        const endIndex = (currentPage - 1)*numberPerPage + numberPerPage;
        if (searchValue.length && paginateData === null) {
            const result = data.filter(item => {
                let found = false;
                dataProperty.forEach(property => {
                    const text = item[property].text ? item[property].text+"" : ""
                    found = found || (text.toLowerCase()).indexOf(searchValue.toLowerCase()) > -1;
                });
                return found;
            }).slice(startIndex, endIndex);
            return sortFilterResult(result);
        }
        return sortFilterResult(paginateData ? data : data.slice(startIndex, endIndex));
    }, [currentPage, numberPerPage, searchValue, data, dataProperty, sortFilterResult, paginateData]);


    const totalPage = useMemo(() => {
        return paginateData ? paginateData['last_page'] : Math.ceil(data.length / numberPerPage);
    }, [data, numberPerPage, paginateData]);

    const searchFirstElementPageNumber = useCallback((newPerPage) => {
        if (searchValue.length || data.length === 0)
            return 1;
        const totalPage = Math.ceil(data.length / newPerPage);
        const firstElement = showData[0];
        let i;
        let searchPage = 0;
        for (i = 0; i < totalPage; i++) {
            const startIndex = i*newPerPage;
            const endIndex = startIndex + newPerPage;
            const tab = [...data].slice(startIndex, endIndex);
            let i1;
            for (i1 = 0; i1 < tab.length; i1++) {
                if (tab[i1].id === firstElement.id) {
                    searchPage = i + 1;
                    break;
                }
            }
            if (searchPage)
                break;
        }
        return searchPage;
    }, [data, searchValue.length, showData])

    const handlePerPageChange = useCallback((value) => {
        if (value !== numberPerPage) {
            if (paginateData && loadData) {
                loadData(parseInt(value), 1, null, true, searchValue);
            } else {
                setCurrentPage(searchFirstElementPageNumber(parseInt(value)));
            }
            setNumberPerPage(parseInt(value))
            resetCheck();
        }
    }, [loadData, numberPerPage, paginateData, resetCheck, searchFirstElementPageNumber, searchValue]);

    const sortData = (indexSort) => {
        setSort(s => s.map((item, index) => {
            if (index === indexSort) {
                switch(item) {
                    case "asc":
                        return "desc";
                    case "desc":
                        return "asc";
                    default:
                        return "asc";
                }
            }
            return null;
        }));
        setCurrentPage(1);
        if (paginateData && loadData) {
            loadData(numberPerPage, 1, null, true, searchValue, statusData);
        }
    };

    const nextPage = useCallback(() => {
        if (currentPage !== totalPage) {
            if (paginateData && loadData) {
                loadData(numberPerPage, currentPage + 1, null, true, searchValue, statusData);
            }
            setCurrentPage(c => c + 1);
            resetCheck();
        }
    }, [currentPage, loadData, numberPerPage, paginateData, resetCheck, searchValue, statusData, totalPage]);

    const previousPage = useCallback(() => {
        if (currentPage !== 1) {
            if (paginateData && loadData) {
                loadData(numberPerPage, currentPage - 1, null, true, searchValue, statusData);
            }
            setCurrentPage(c => c - 1);
            resetCheck();
        }
    }, [currentPage, loadData, numberPerPage, paginateData, resetCheck, searchValue, statusData]);

    const gotoPage = useCallback(number => {
        if (number !== currentPage) {
            if (paginateData && loadData) {
                loadData(numberPerPage, number, null, true, searchValue, statusData);
            }
            setCurrentPage(number);
            resetCheck();
        }
    }, [currentPage, loadData, numberPerPage, paginateData, resetCheck, searchValue, statusData]);

    const changeCheckValue = useCallback(value => {
        const currentPageDataIds = showData.map(item => item.id);
        setData(d => d.map(item => {
            if (currentPageDataIds.includes(item.id)) {
                return {
                    ...item,
                    checked: value
                }
            }
            return item;
        }));
        setCheck(value);
    }, [showData]);

    const checkItem = useCallback((value, itemId) => {
        setData(d => d.map(item => {
            return {
                ...item,
                checked: item.id === itemId ? value : item.checked
            };
        }));
    }, []);

    const deleteItems = useCallback(() => {
        confirmAlert(() => {
            return new Promise(() => {
                setTimeout(() => {
                    if (onDeleteItems) {
                        onDeleteItems(data.filter(item => item.checked).map(item => item.id));
                    }
                }, 3000)
            });
        })
    }, [data, onDeleteItems]);

    const deleteItem = useCallback(itemId => {
        confirmAlert(() => {
            return new Promise(() => {
                setTimeout(() => {
                    if (onDeleteItem) {
                        onDeleteItem(itemId);
                    }
                }, 3000)
            });
        }, confirmButtonText)
    }, [confirmButtonText, onDeleteItem]);

    const showEditButton = (item) => {
        if (editButton !== null) {
            const button = (
                <Menu.Item>
                    {editButton.type === 'link' ? (
                        <NavLink to={editButton.url.replace(':id', item.id)} className="flex focus:outline-none items-center px-2 py-1 font-light text-blue-500 bg-green-100 space-x-2">
                            <svg className="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                            <span>{editButton.text}</span>
                        </NavLink>
                    ) : (
                        <button onClick={() => {editButton.click(item)}} className="w-full focus:outline-none flex items-center px-2 py-1 font-light text-blue-500 bg-green-100 space-x-2">
                            <svg className="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                            <span>{editButton.text}</span>
                        </button>
                    )}
                </Menu.Item>
            );
            if (editButton.show) {
                const show = editButton.show;
                if (item[show.key] === show.value) {
                    return button;
                }
            } else {
                return button;
            }
        }
        return null;
    };

    const showDeleteButton = (item) => {
        if (deleteButton !== null) {
            const button = (
                <Menu.Item onClick={() => deleteItem(item.id)}>
                    <div className="flex items-center px-2 py-1 font-light focus:outline-none text-red-500 bg-red-100 space-x-2">
                        <svg className="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        <span>{deleteButton.text}</span>
                    </div>
                </Menu.Item>
            );
            if (deleteButton.show) {
                const show = deleteButton.show;
                if (item[show.key] === show.value) {
                    return button;
                }
            } else {
                return button;
            }
        }
        return null;
    };

    const showViewButton = (item) => {
        if (viewButton !== null) {
            const button = (
                <Menu.Item>
                    {viewButton.type === 'link' ? (
                        <NavLink to={viewButton.url.replace(':id', item.id)} className="flex focus:outline-none items-center px-2 py-1 font-light text-indigo-500 bg-blue-100 space-x-2">
                            <svg className="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            <span>{viewButton.text}</span>
                        </NavLink>
                    ) : (
                        <button onClick={() => {viewButton.click(item)}} className="w-full flex focus:outline-none items-center px-2 py-1 font-light text-blue-500 bg-green-100 space-x-2">
                            <svg className="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            <span>{viewButton.text}</span>
                        </button>
                    )}
                </Menu.Item>
            );
            if (viewButton.show) {
                const show = viewButton.show;
                if (item[show.key] === show.value) {
                    return button;
                }
            } else {
                return button;
            }
        }
        return null;
    };

    const searchByValue = value => {
        if (paginateData && loadDataBySearch) {
            loadDataBySearch(value);
        }
        setSearchValue(value);
    };

    const showGenerateButton = (item) => {
        if (generateButton !== null) {
            const button = (
                <Menu.Item>
                    <NavLink to={generateButton.url.replace(':id', item.id)} className="flex focus:outline-none items-center px-2 py-1 font-light text-indigo-500 bg-blue-100 space-x-2">
                        <svg className="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" /></svg>
                        <span>{generateButton.text}</span>
                    </NavLink>
                </Menu.Item>
            );
            if (generateButton.show) {
                const show = generateButton.show;
                if (item[show.key] === show.value) {
                    return button;
                }
            } else {
                return button;
            }
        }
        return null;
    };

    return (
        <Container>
            <DatatableHead
                data={data}
                searchValue={searchValue}
                onChangeSearchValue={searchByValue}
                numberPerPage={numberPerPage}
                onChangeNumberPerPage={handlePerPageChange}
                onClick={deleteItems}
                checkAll={checkAll}
                addButton={addButton}
                paginateData={paginateData}
                loading={loading}
            />

            <div className="overflow-y-visible pb-16">
                <table className="w-full table-auto text-sm">
                    <TableHead
                        head={head}
                        checkAll={checkAll}
                        checkValue={check}
                        onChangeCheckValue={changeCheckValue}
                        sort={sort}
                        onSort={sortData}
                        viewButton={viewButton}
                        editButton={editButton}
                        deleteButton={deleteButton}
                        paginateData={paginateData}
                    />

                    <tbody>
                    {showData.map((item, index) => (
                        <tr key={index} className="border-b odd:bg-gray-100">
                            {checkAll && (
                                <TableItem>
                                    <input
                                        className="w-4 h-4 bg-gray-300 border-none rounded cursor-pointer form-checkbox focus:ring-0"
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={e => checkItem(e.target.checked, item.id)}
                                    />
                                </TableItem>
                            )}

                            {dataProperty.map((property, index) => (
                                <TableItem key={index}>
                                    {item[property].jsx}
                                </TableItem>
                            ))}

                            {((viewButton !== null) || (editButton !== null) || (deleteButton !== null)) && (
                                <TableItem position={"center"}>
                                    {(showViewButton(item) !== null || showEditButton(item) || showDeleteButton(item)) && (
                                        <div className="flex items-center justify-center">
                                            <Menu className="relative w-6 h-6">
                                                <div>
                                                    <Menu.Button className="focus:outline-none hover:outline-none">
                                                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                                                    </Menu.Button>

                                                    <Menu.Items className={`absolute focus:outline-none shadow-sm right-0 z-10 p-2 bg-white border rounded-md w-36 space-y-2 cursor-pointer ${css(styles.fadeInDown)}`}>
                                                        {showViewButton(item)}

                                                        {showEditButton(item)}

                                                        {showDeleteButton(item)}

                                                        {showGenerateButton(item)}
                                                    </Menu.Items>
                                                </div>
                                            </Menu>
                                        </div>
                                    )}
                                </TableItem>
                            )}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {loading && (
                <div className="w-full flex items-center justify-center py-5">
                    <Loader color={"indigo"} size={"lg"}/>
                </div>
            )}

            <DatatableFooter
                totalPage={totalPage}
                currentPage={currentPage}
                next={nextPage}
                previous={previousPage}
                gotoPage={gotoPage}
            />
        </Container>
    );
};

export default Datatable;

const Container = styled.div.attrs(props => ({
    className: 'bg-white w-full border rounded-md'
}))``;

const TableItem = styled.td.attrs(props => ({
    className: `px-4 py-5 font-normal text-${(['left', 'center', 'right'].includes(props.position)) ? props.position : 'left'} text-gray-600`
}))``;
