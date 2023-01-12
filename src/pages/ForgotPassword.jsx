import AuthLayout from "../layouts/AuthLayout";
import {Input} from "../components/field";
import {PrimaryButton} from "../components/buttons";
import {Link} from "../components/utils";

const ForgotPassword = () => {
    return (
        <AuthLayout
            title={
                <>
                    Welcome to <br /> our community
                </>
            }
        >
            <h3 className="text-center text-xl font-semibold text-gray-700">Reset password</h3>
            <p className="text-center text-sm mt-2 mb-10">
                If you forgot your password, don't worry! we’ll email you <br /> instructions to
                reset your password.
            </p>

            <form className="space-y-5">
                <div>
                    <Input label={"Email"} id="email" type="email" placeholder="Enter email" />
                </div>

                <PrimaryButton>Send Reset Link</PrimaryButton>

                <p className="text-sm text-center">
                    <Link href="/login">Back to Login</Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default ForgotPassword;