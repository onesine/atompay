import React, {useState} from "react";
import ModalContainer from "./modal/ModalContainer";
import ModalTitle from "./modal/ModalTitle";
import ModalBody from "./modal/ModalBody";
import {Input} from "./field";
import ModalFooter from "./modal/ModalFooter";
import {Loader} from "./utils";
import {Button} from "./buttons";
import {formatToCurrency, toast} from "../helpers";

const ReloadAccountForm = ({loadData, isOpen, setIsOpen, type = null, resetType, balance = 10000}) => {
    const [validationMessage, setValidationMessage] = useState([]);
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            if (amount) {
                if (amount > 10000) {
                    toast('error', 'Failed to reload account');
                    setValidationMessage([`This amount cannot exceed your balance which is ${formatToCurrency(balance)}`]);
                } else {
                    toast('success', 'Successful account reloading');
                    loadData(amount);
                    setAmount("");
                    setValidationMessage([]);
                    setIsOpen(false);
                }
            } else {
                toast('error', "Failed to reload account");
                setValidationMessage(["This field is required"]);
            }
        }, 3000);
    };

    return (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen} size="sm">
            <ModalTitle>Reload Account</ModalTitle>

            <ModalBody>
                <Input
                    id={"label"}
                    type="number"
                    label={"Amount"}
                    value={amount}
                    onChange={e => {setAmount(e.target.value)}}
                    placeholder={"Please enter the amount"}
                    error={validationMessage}
                />
            </ModalBody>

            <ModalFooter>
                <Button color={"secondary"} disabled={loading} onClick={() => {
                    setIsOpen(false);
                    setValidationMessage([]);
                    setAmount("");
                    setTimeout(() => {
                        if (type !== null) {
                            resetType();
                        }
                    }, 300);
                }}>
                    Close
                </Button>

                <Button color={"primary"} disabled={loading} onClick={onSubmit}>
                    {loading && (
                        <Loader color={"white"}/>
                    )}
                    <span>{type === null ? "Reload" : "Update"}</span>
                </Button>
            </ModalFooter>
        </ModalContainer>
    );
};

export default ReloadAccountForm;
