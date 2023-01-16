import React, {useEffect, useCallback, useState} from "react";
import AdminLayout from "../layouts/AdminLayout";
import {PageTitle} from "../components/utils";
import Datatable from "../components/datatables/Datatable";
import {checkPermissions, formatToCurrency, toast} from "../helpers";
import {RELOAD_ACCOUNT_HISTORY} from "../constants";
import Analytics from "../components/Analytics";
import ReloadAccountForm from "../components/ReloadAccountForm";

const ReloadAccount = () => {
    const [balance, setBalance] = useState(10840);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setData(RELOAD_ACCOUNT_HISTORY.map(item => {
                return {
                    id: item.id,
                    registerNumber: {
                        text: item.registerNumber,
                        jsx: (
                            <div className="text-lg text-purple-500 cursor-pointer hover:cursor-pointer">
                                {item.registerNumber}
                            </div>
                        )
                    },
                    date: {
                        text: item.date,
                        jsx: (
                            <div className="flex items-center">
                                <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                <span className="font-light">{item.date}</span>
                            </div>
                        )
                    },
                    amount: {
                        text: item.amount,
                        jsx: (
                            <span className="font-light">{formatToCurrency(item.amount)}</span>
                        )
                    },
                    status: {
                        text: item.status,
                        jsx: (
                            <div className={`inline-block px-2 py-1 text-xs font-light text-${item.status === 'success' ? 'green' : 'red'}-500 bg-${item.status === 'success' ? 'green' : 'red'}-100 rounded`}>
                                {item.status}
                            </div>
                        )
                    }
                }
            }));
            setLoading(false)
        }, 3000);
    }, []);

    const deleteItem = useCallback((itemId) => {
        setData(data.filter(item => item.id !== itemId));
        toast('success', "Success of the suppression")
    }, [data]);

    const deleteItems = useCallback((itemsId) => {
        setData(data.filter(item => !itemsId.includes(item.id)));
        toast('success', "Success of the deletions")
    }, [data]);

    const addItem = useCallback((amount) => {
        setBalance(b => parseInt(b) + parseInt(amount))
        setData([
            {
                id: Date.now().toString(),
                registerNumber: {
                    text: Date.now().toString(),
                    jsx: (
                        <div className="text-lg text-purple-500 cursor-pointer hover:cursor-pointer">
                            #{Date.now().toString()}
                        </div>
                    )
                },
                date: {
                    text: window.moment().format('ll'),
                    jsx: (
                        <div className="flex items-center">
                            <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <span className="font-light">{window.moment().format('ll')}</span>
                        </div>
                    )
                },
                amount: {
                    text: amount,
                    jsx: (
                        <span className="font-light">{formatToCurrency(amount)}</span>
                    )
                },
                status: {
                    text: "success",
                    jsx: (
                        <div className={`inline-block px-2 py-1 text-xs font-light text-green-500 bg-green-100 rounded`}>
                            success
                        </div>
                    )
                }
            },
            ...data
        ]);
    }, [data]);

    return (
        <AdminLayout path={"Reload Account"}>
            <div className="mb-7">
                <Analytics balance={balance}/>
            </div>

            <PageTitle>Reload Account History</PageTitle>

            <Datatable
                head={['ID', 'Date', 'Amount', 'Status']}
                dataProperty={['registerNumber', 'date', 'amount', 'status']}
                list={data}
                checkAll={true}
                onDeleteItem={deleteItem}
                onDeleteItems={deleteItems}
                addButton={checkPermissions(['add']) ? {
                    type: 'button',
                    text: 'Reload Account',
                    url: '/add',
                    form: (
                        <ReloadAccountForm
                            loadData={addItem}
                            balance={balance}
                            isOpen={showForm}
                            setIsOpen={setShowForm}
                        />
                    ),
                    click: () => {setShowForm(!showForm)}
                } : null}
                deleteButton={checkPermissions(['delete']) ? {
                    text: 'Delete'
                } : null}
                loading={loading}
            />
        </AdminLayout>
    );
};

export default ReloadAccount;
