import React, { useMemo } from "react";
import styled from "styled-components";

import { scrollTop } from "../../helpers";

const DatatableFooter = ({ currentPage = 0, totalPage = 0, next, previous, gotoPage }) => {
    const scrollToPagination = () => {
        document.getElementById("table_pagination").scrollIntoView();
        scrollTop();
    };

    const onNext = async () => {
        await next();
        scrollToPagination();
    };

    const onPrevious = async () => {
        await previous();
        scrollToPagination();
    };

    const onGotoPage = async item => {
        await gotoPage(item);
        scrollToPagination();
    };

    const active =
        "px-3 py-1.5 bg-indigo-600 font-medium rounded-md text-sm text-white hover:outline-none focus:outline-none hover:bg-indigo-700";
    const notActive =
        "px-3 py-1.5 text-gray-600 font-medium hover:text-indigo-500 hover:bg-indigo-100 rounded-md text-sm hover:outline-none focus:outline-none";
    const buttonHover =
        "w-8 h-8 text-gray-500 px-1 py-0.5 rounded-md hover:bg-indigo-100 hover:text-indigo-500";
    const buttonNotHover = "w-8 h-8 text-gray-300  px-1 py-0.5";

    const pages = useMemo(() => {
        let result = [];
        let i;
        for (i = 0; i < totalPage; i++) {
            result[i] = i + 1;
        }
        if (result.length === 0) {
            return [1];
        }
        return result;
    }, [totalPage]);
    const pagesLength = pages.length;
    const firstPage = pages[0];
    const lastPage = pages[pagesLength - 1];
    const firstNextPages = [...pages].splice(1, 4);
    const lastPreviousPages = [...pages].splice(pagesLength - 5, 4);
    const previousCurrent = pages[pages.indexOf(currentPage) - 1];
    const nextCurrent = pages[pages.indexOf(currentPage) + 1];
    const centerPages =
        previousCurrent && nextCurrent ? [previousCurrent, currentPage, nextCurrent] : [];
    const showFirstNextPages = currentPage <= 4;
    const showLastPreviousPages = currentPage >= lastPreviousPages[1];

    return (
        <Container id="table_pagination">
            <ShowingInfo>
                Affichage page {currentPage} sur {totalPage}
            </ShowingInfo>

            <div className="flex items-center space-x-2">
                <button
                    className={`hover:outline-none focus:outline-none ${
                        currentPage === 1 ? "cursor-not-allowed" : ""
                    }`}
                    disabled={currentPage === 1}
                    onClick={onPrevious}
                >
                    <svg
                        className={currentPage === 1 ? buttonNotHover : buttonHover}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {pagesLength <= 7 &&
                    pages.map((item, index) => (
                        <button
                            key={index}
                            className={item === currentPage ? active : notActive}
                            onClick={() => onGotoPage(item)}
                        >
                            {item}
                        </button>
                    ))}

                {pagesLength >= 8 && (
                    <>
                        <button
                            className={firstPage === currentPage ? active : notActive}
                            onClick={() => onGotoPage(firstPage)}
                        >
                            {firstPage}
                        </button>

                        {showFirstNextPages &&
                            firstNextPages.map((item, index) => (
                                <button
                                    key={index}
                                    className={item === currentPage ? active : notActive}
                                    onClick={() => onGotoPage(item)}
                                >
                                    {item}
                                </button>
                            ))}

                        {!showLastPreviousPages && (
                            <button className="px-3 py-1.5 text-gray-600 font-medium rounded-md text-sm hover:outline-none focus:outline-none cursor-text">
                                ...
                            </button>
                        )}

                        {!showLastPreviousPages &&
                            !showFirstNextPages &&
                            centerPages.map((item, index) => (
                                <button
                                    key={index}
                                    className={item === currentPage ? active : notActive}
                                    onClick={() => onGotoPage(item)}
                                >
                                    {item}
                                </button>
                            ))}

                        {!showFirstNextPages && (
                            <button className="px-3 py-1.5 text-gray-600 font-medium rounded-md text-sm hover:outline-none focus:outline-none cursor-text">
                                ...
                            </button>
                        )}

                        {showLastPreviousPages &&
                            lastPreviousPages.map((item, index) => (
                                <button
                                    key={index}
                                    className={item === currentPage ? active : notActive}
                                    onClick={() => onGotoPage(item)}
                                >
                                    {item}
                                </button>
                            ))}

                        <button
                            className={lastPage === currentPage ? active : notActive}
                            onClick={() => onGotoPage(lastPage)}
                        >
                            {lastPage}
                        </button>
                    </>
                )}

                <button
                    className={`hover:outline-none focus:outline-none ${
                        currentPage === totalPage || totalPage === 0 ? "cursor-not-allowed" : ""
                    }`}
                    disabled={currentPage === totalPage || totalPage === 0}
                    onClick={onNext}
                >
                    <svg
                        className={
                            currentPage === totalPage || totalPage === 0
                                ? buttonNotHover
                                : buttonHover
                        }
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </Container>
    );
};

export default DatatableFooter;

const Container = styled.div.attrs(() => ({
    className: "p-5 flex items-center justify-between"
}))``;

const ShowingInfo = styled.div.attrs(() => ({
    className: "inline-block px-6 py-2 text-sm tracking-wide text-indigo-400 border rounded-md"
}))``;
