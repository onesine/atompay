import config from "../config";

const Footer = () => {
    return (
        <footer className="flex items-center justify-between mt-4 mb-3 text-sm text-gray-600">
            <p>Copyright © 2023 {config.APP_NAME}, All rights reserved.</p>

            <p>Coded with ❤️</p>
        </footer>
    );
};

export default Footer;