import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';


const Login = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || user1) {
            navigate(from, { replace: true });
            console.log(user || user1)
        };
    }, [user, user1, location, navigate, from]);

    if (loading1 || loading) {
        return <Loading></Loading>
    };

    const onSubmit = data => {
        console.log(data.email)
        signInWithEmailAndPassword(data.email, data.password);
        reset();
    };


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='card w-96 shadow-2xl '>
                <h1 className='text-center pt-8 font-bold text-2xl' >User Login</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Input Your email address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid email address'
                                        }
                                    })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Input Your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters'
                                        }
                                    })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors?.password?.message}</span>}
                            </label>
                            <input className='btn' type="submit" value={'Login'} />
                            <small className='text-red-600 my-2'>{error?.message || error1?.message}</small>
                            <small>New to Doctors Portal ? <Link className='text-secondary' to='/register'>Create a new account.</Link></small>
                        </div>

                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
                    <button className="btn btn-outline">Continue with GitHub</button>

                </div>
            </div>

        </div>
    );
};

export default Login;