const env = (key) => {
    if ("REACT_APP_"+key in process.env)
        return process.env["REACT_APP_"+key];
    return null;
};

export default env;