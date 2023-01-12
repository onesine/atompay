import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import AuthLayout from "../layouts/AuthLayout";
import {Checkbox, Input} from "../components/field";
import {PrimaryButton, SecondaryButton} from "../components/buttons";
import {Link} from "../components/utils";

const Register = () => {
    return (
        <AuthLayout
            title={
                <>
                    Welcome to <br /> our community
                </>
            }
        >
            <h3 className="text-center text-xl font-semibold text-gray-700">Create New Account</h3>
            <p className="text-center text-sm mt-2 mb-10">
                Use your remail email continue with Nioboard (it's free)!
            </p>

            <form className="space-y-5">
                <div>
                    <Input
                        label={"Username"}
                        id="username"
                        type="text"
                        placeholder="Enter username"
                    />
                </div>

                <div>
                    <Input label={"Email"} id="email" type="email" placeholder="Enter email" />
                </div>

                <div>
                    <Input
                        label={"Password"}
                        id="password"
                        type="password"
                        placeholder="Enter password"
                    />
                </div>

                <div>
                    <Checkbox id="remember" label="I agree to privacy policy & terms" />
                </div>

                <PrimaryButton>Sign up</PrimaryButton>

                <div className="flex items-center justify-center space-x-3">
                    <hr className="w-12" />
                    <span className="font-bold uppercase text-xs text-gray-400">Or</span>
                    <hr className="w-12" />
                </div>

                <div className="flex items-center space-x-4 lg:space-x-2 xl:space-x-4 text-sm font-semibold">
                    <SecondaryButton as="a" href="#auth-google">
                        <FcGoogle className="h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5" />

                        <span className="text-[0.7rem] md:text-sm lg:text-[0.7rem] xl:text-sm">
                            Continue with Google
                        </span>
                    </SecondaryButton>

                    <SecondaryButton as="a" href="#auth-facebook">
                        <RiFacebookCircleFill className="h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5 text-blue-600" />

                        <span className="text-[0.7rem] md:text-sm lg:text-[0.7rem] xl:text-sm">
                            Continue with Facebook
                        </span>
                    </SecondaryButton>
                </div>

                <p className="text-sm text-center">
                    Already have an account? <Link href="/login">Login</Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default Register;