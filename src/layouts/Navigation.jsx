const Navigation = ({path = "Dashboard"}) => {
    return (
        <div className="flex items-center justify-between py-2 pl-6 pr-4 bg-gray-50 shadow-sm">
            <div className="flex items-center pl-2 space-x-4">
                <svg className="cursor-pointer w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>

                <p className="flex items-center text-sm space-x-2">
                    <span className="text-gray-600">{path}</span>
                </p>
            </div>
        </div>
    );
};

export default Navigation;