import PasswordInput from '@/components/form/PasswordInput';
import TextInput from '@/components/form/TextInput';
import React from 'react'
import { useForm } from 'react-hook-form'
import AddressInput from '@/components/form/AddressInput';

export interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
    country: string,
    state: string,
}

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<FormValues>({mode:"onChange"});

    const onSubmit = async (data: FormValues) => {
        
        console.log(data)
        reset()
        
    }
    
    return (
        <>
            <main className=''>
                <section className='bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center min-h-screen items-center'>
                    <div className='bg-white rounded-lg flex flex-col p-5 my-10 mx-10 sm:w-[35rem]'>
                        <form onSubmit={handleSubmit(onSubmit)} className=''>
                            
                            <div className='flex flex-col gap-2'>

                            <div className='flex flex-col justify-center'>
                                <p className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 font-bold text-2xl sm:text-5xl md:text-3xl self-center sm:p-3'>Welcome to Phlog!</p>
                                <p className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 font-bold text-lg sm:text-2xl self-center'>Fill out this form to sign up</p>
                            </div>
                            
                            <div>
                                <TextInput label="Email" name="email" register={register} type="email" errors={errors} icon="envelope"/>
                            </div>

                            <div className='sm:flex justify-between md:gap-2'>

                                <div className='basis-1/2'>
                                    <TextInput label="First Name" name="firstName" register={register} type="text" errors={errors}/>
                                </div>

                                <div className='basis-1/2'>
                                    <TextInput label="Last Name" name="lastName" register={register} type="text" errors={errors} />
                                </div>

                            </div>

                            <div>
                                <TextInput label="Username" name="username" register={register} type="text" placeholder='Set up your username' errors={errors} icon="user"/>
                            </div>

                            <div className='flex flex-col sm:flex-row justify-between md:gap-2'>
                                <PasswordInput register={register} errors={errors} icon="eye" watch={watch}/>   
                            </div>

                            <div className='flex flex-col sm:flex-row justify-between md:gap-2'>
                                <AddressInput register={register} errors={errors}/>
                            </div>
                            
                            <div>
                               <input type="submit" className='font-semibold p-2 cursor-pointer w-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl shadow-lg' /> 
                            </div>

                            </div>
                            
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Form;
