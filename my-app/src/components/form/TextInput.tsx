import React, { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../pages/Form';
import { FaBeer, FaUser, FaEnvelope} from 'react-icons/fa';
import { FormRules } from './FormRules';
import { IconType } from 'react-icons';

type InputProps = {
    label: string,
    name: string,
    type: string,
    placeholder?: string,
    register: UseFormRegister<FormValues>,
    errors: FieldErrors<FormValues>;
    icon?: string;
}

const iconMapping: { [key: string]: IconType } = {
    beer: FaBeer,
    user: FaUser,
    envelope: FaEnvelope,
};

const TextInput: FC<InputProps> = ({ label, name, type, errors, register, placeholder = `Enter your ${label.toLowerCase()}`, icon }) => {

    const IconComponent = icon && iconMapping[icon]; 
    const rules = FormRules[name];

    return (
        <>
            <div className='block'>
                <label htmlFor={name} className='text-black font-semibold text-md'>{label}</label>
                <div className='inline relative'>
                    <input type={type}
                        {...register(name as keyof FormValues, rules)}
                        id={name}
                        placeholder={placeholder} 
                        className='bg-white shadow-sm w-full text-black placeholder-black rounded-md p-1 border-2' />
                    {IconComponent && // only render the icon if it exists in the mapping object
                        <span className='placeholder-icon'>
                            <IconComponent color='black' />
                        </span>
                    }
                </div>
                <p className='text-red-500' >{errors[name as keyof FormValues]?.message}</p>
            </div>
        </>
    );
};

export default TextInput;