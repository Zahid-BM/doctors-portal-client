import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    if (user) {
        console.log(user)
    };
    const onSubmit = data => {
        console.log(data)
        reset();
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='card w-96 shadow-2xl '>
                <h1 className='text-center pt-8 font-bold text-2xl' >User Login</h1>
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
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
                            <input className='btn' type="submit" value={'Login'} />
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

export default Login;