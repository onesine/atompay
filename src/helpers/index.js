import config from "../config";

export function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

export const toast = (type, message) => {
    (function () {
        const Toast = window.Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: toast => {
                toast.addEventListener("mouseenter", window.Swal.stopTimer);
                toast.addEventListener("mouseleave", window.Swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: type,
            title: message
        });
    })();
};

export const confirmAlert = (executing, confirmButtonText = "Yes, delete!") => {
    window.Swal.fire({
        title: "Are you sure?",
        text: "You can't go back !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ef4444",
        cancelButtonColor: "#52525b",
        confirmButtonText: confirmButtonText,
        cancelButtonText: "Cancel",
        showLoaderOnConfirm: true,
        preConfirm: executing
    }).then(result => {
        if (result.isConfirmed) {
            // toast('success', "Succès de la suppression");
        }
    });
};

export const checkPermissions = (permissions = []) => {
    let found = false;
    const userPermissions = ["add", "update", "delete"];
    if (userPermissions) {
        permissions.forEach(item => {
            found = found || userPermissions.includes(item);
        });
    }
    return found;
};

export const scrollTop = () => {
    const element = document.getElementById("top-page");
    if (element) {
        const position = getOffset(element);
        window.scrollTo(position.left, 0);
    }
};

export const formatToCurrency = value => {
    return new Intl.NumberFormat("de-DE", { style: "currency", currency: "XOF" }).format(
        parseFloat(value)
    );
};

export const checkUser = () => {
    return !!config.AUTH.DRIVER.getItem("user");
};

export const logout = navigate => {
    config.AUTH.DRIVER.removeItem("user");
    navigate("/", { replace: true });
    toast("success", "Successful logout");
};
