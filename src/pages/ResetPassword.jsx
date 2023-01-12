import AuthLayout from "../layouts/AuthLayout";
import {Input} from "../components/field";
import {PrimaryButton} from "../components/buttons";
import {Link} from "../components/utils";

const ResetPassword = () => {
    return (
        <AuthLayout
            title={
                <>
                    Welcome to <br /> our community
                </>
            }
        >
            <h3 className="text-center text-xl font-semibold text-gray-700">Update password</h3>
            <p className="text-center text-sm mt-2 mb-10">
                Enter and confirm the new password to make the change.
            </p>

            <form className="space-y-5">
                <div>
                    <Input
                        label={"New password"}
                        id="new_password"
                        type="password"
                        placeholder="Enter new password"
                    />
                </div>

                <div>
                    <Input
                        label={"Confirm password"}
                        id="confirm_password"
                        type="password"
                        placeholder="Confirm password"
                    />
                </div>

                <PrimaryButton>Update Password</PrimaryButton>

                <p className="text-sm text-center">
                    <Link href="/login">Back to Login</Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default ResetPassword;