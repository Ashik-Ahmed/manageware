import React, { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';



const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [authUser, authLoading, authError] = useAuthState(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);
    

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }

    const [token] = useToken(emailUser || googleUser);

    // getting the redirect location from Require Auth 
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    // user sign in successful and failed notification 
    useEffect(() => {
        if (token) {
            toast.success("Successfully Logged in");
            navigate(from, { replace: true });
        }
        if (emailError || googleError) {
            switch (emailError?.code) {
                case "auth/user-not-found":
                    toast.warn("No account with this email")
                    break;
                case "auth/wrong-password":
                    toast.warn("Wrong Password")
                    break;
                default:
                    toast.warn("Login failed")
                    break;
            }
        }
    }, [emailError, googleError, token, from, navigate])



    if (emailLoading || googleLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="hero  bg-gray-200">
            <div class="hero-content flex-col  md:h-3/4 lg:flex-row w-3/4">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    {/* <form onSubmit={handleSignInWithEmailAndPassword}> */}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title mx-auto text-3xl font-bold text-primary border-b-4 pb-1">Login</h2>

                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                //previous regex
                                                // ^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2, 3})+$
                                                value: /\S+@\S+\.\S+/,
                                                message: 'Email not valid'
                                            }
                                        })}
                                    />
                                    <label class="label">
                                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                                    </label>
                                </div>


                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is required'
                                            },
                                            minLength: {
                                                //previous regex
                                                // \S+@\S+\.\S+
                                                value: 6,
                                                message: 'Minimum 6 characters required'
                                            }
                                        })}
                                    />
                                    <label class="label">
                                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                                    </label>
                                    <label class="label">
                                        {/* <button class="label-text-alt link link-hover">Forgot password?</button> */}
                                        <p class="label-text-alt text-right">New here? <Link to='/signup' className='text-primary font-semibold  link link-hover'>Signup now.</Link></p>
                                    </label>
                                </div>
                                <div class="card-actions justify-end">
                                    <input type='submit' class="btn bg-indigo-500 hover:bg-indigo-600 border-0 w-full" value='Login'></input>
                                </div><div class="divider">OR</div>
                                <div class="form-control">
                                    <button onClick={handleSignInWithGoogle} class="btn bg-indigo-500 hover:bg-indigo-600 border-0 gap-3"><FaGoogle />  Sign in using Google</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Login;