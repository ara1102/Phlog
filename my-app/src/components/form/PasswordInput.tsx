    import React, { useState } from 'react'
    import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
    import { FormValues } from '../../pages/Form';
    import { FaEye, FaEyeSlash } from 'react-icons/fa';
    import { IconType } from 'react-icons';

    type PasswordInputProps = {
        register: UseFormRegister<FormValues>,
        errors: FieldErrors<FormValues> ;
        icon?: string;
        watch: UseFormWatch<FormValues>;
    }

    const iconMapping: { [key: string]: IconType } = {
        eye: FaEye,
        eyeSlash: FaEyeSlash,
    };

    const PasswordInput = ({register, errors, icon, watch}: PasswordInputProps) => {

        const IconComponent = icon && iconMapping[icon];
        const [openPass, setOpenPass] = useState(false)
        const [openConfirmPass, setOpenConfirmPass] = useState(false)

        const passwordInput = watch("password");
        
        register("password", {
            minLength:{
                value: 8,
                message: 'Your password is too short!'
            },
            maxLength:{
                value: 15,
                message: 'Your password is too long!'
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#&*_]).{8,15}$/,
                message: "Password should contain at least 1 uppercase, 1 lowercase, 1 number, and 1 symbol(!#&*_)"
            },
            required: {
                value: true,
                message: "Password is required!"
            }
        });

        register("confirmPassword", {
            required: {
              value: true,
              message: "Please confirm your password",
            },
            validate: (value) =>
              value === passwordInput || "The passwords do not match",
        });

        return (
            <>
                        <div className='basis-1/2'>

                            <label htmlFor='password' className='text-black font-semibold text-md'>Password</label>
                            <div className='inline relative'>

                                <input type={openPass ?"text" : "password"}
                                    {...register('password')}
                                    id='password'
                                    placeholder='Set up your password' 
                                    className='bg-white shadow-sm w-full text-black placeholder-black rounded-md p-1 border-2' 
                                    />

                                {IconComponent && (
                                    <span className='placeholder-icon'>
                                        <button type='button' onClick={() => {
                                            setOpenPass(!openPass);
                                        }}>
                                            {openPass ? <FaEye color='black' /> : <FaEyeSlash color='black' />}
                                        </button>
                                    </span>
                                )}

                            </div>

                            <p className='text-red-500' >{errors.password?.message}</p>
                            
                        </div>

                        <div className='basis-1/2'>
                            <label htmlFor='confirmPassword' className='text-black font-semibold text-md'>Confirm Password</label>
                            <div className='inline relative'>

                                <input type={openConfirmPass ? "text" : "password"}
                                    id='confirmPassword'
                                    placeholder='Confirm your password' 
                                    className='bg-white shadow-sm w-full text-black placeholder-black rounded-md p-1 border-2' 
                                    {...register("confirmPassword")}
                                    />

                                {IconComponent && (
                                    <span className='placeholder-icon'>
                                        <button type='button' onClick={() => {
                                            setOpenConfirmPass(!openConfirmPass);
                                        }}>
                                            {openConfirmPass ? <FaEye color='black' /> : <FaEyeSlash color='black' />}
                                        </button>
                                    </span>
                                )}

                            </div>

                            <p className='text-red-500' >{errors.confirmPassword?.message}</p>
                            
                        </div>

            </>
        );
    };

    export default PasswordInput;