import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const Register = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user || user1) {
        console.log(user || user1)
    };
    if (loading1 || loading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        console.log(data.email)
        createUserWithEmailAndPassword(data.email, data.password)
        reset();
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='card w-96 shadow-2xl '>
                <h1 className='text-center pt-8 font-bold text-2xl' >User Registration</h1>
                <div class="card-body">
                    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Input Your Full Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        }

                                    })} />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors?.name?.message}</span>}

                            </label>
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Input Your email address"
                                class="input input-bordered w-full max-w-xs"
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
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors?.email?.message}</span>}
                            </label>
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Input Your password"
                                class="input input-bordered w-full max-w-xs"
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
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors?.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600">{errors?.password?.message}</span>}
                            </label>
                            <input className='btn' type="submit" value={'Register'} />
                            <small className='text-red-600 my-2'>{error?.message || error1?.message}</small>
                            <small>Already have an account ? <Link className='text-secondary' to='/login'>Visit login page.</Link></small>
                        </div>

                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline">Continue with Google</button>
                    <button class="btn btn-outline">Continue with GitHub</button>

                </div>
            </div>

        </div>
    );
};

export default Register;