import { FormValues } from '@/pages/form';
import { useState, useEffect, FC } from 'react';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';

type AddressInputProps = {
  register: UseFormRegister<FormValues>,
  errors: FieldErrors<FormValues> ;
}

interface State {
  name: string;
  state_code: string;
}

interface Country {
  name: string;
  states: State[];
}

interface FormData {
  country: string;
  state: string;
}

interface ResponseData {
  error: boolean;
  msg: string;
  data: Country[];
}

const AddressInput: FC<AddressInputProps> = ({register, errors} : AddressInputProps) => {

  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const { setValue } = useForm<FormData>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries/states");
      const responseData: ResponseData = await response.json();
  
      const allStates: State[] = responseData.data.reduce(
        (states: State[], country: Country) => {
          return [...states, ...country.states];
        },
        []
      );
  
      const stateNames: string[] = allStates.map((state) => state.name);
  
      setCountries(responseData.data);
      setStates(stateNames);
    };
  
    fetchData();
  }, []);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    const selectedCountryObject = countries.find(country => country.name === selectedCountry);
    setStates(selectedCountryObject?.states.map((state) => state.name) || []);
    setValue('state', '');
  };

  register('country', {
    required: {
        value: true,
        message: "Country is required!"
    }
  });

  register('state', {
    required: {
        value: true,
        message: "State is required!"
    }
  });

  return (
    <>
      <div className='basis-1/2'>
        <label htmlFor="Country" className='text-black font-semibold'>
          Country:
        </label>
          <select 
            id='Country'
            {...register('country')} 
            onChange={handleCountryChange} 
            className='w-full shadow-sm rounded-md p-1 border-2 border-grey-500 bg-white text-black font-normal'>
              <option className="text-red-500" value="">Select a country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.name}>{country.name}</option>
                ))}
          </select>
          <p className='text-red-500'> {errors.country?.message}</p>
      </div>

      <div className='basis-1/2'>
        <label htmlFor="State" className='text-black font-semibold'>
          State:
        </label>  
          <select
          id='State' 
          {...register('state')}
          className='w-full shadow-sm rounded-md p-1 border-2 border-grey-500 bg-white text-black font-normal'>
            <option value="">Select a state</option>
            {states.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
          <p className='text-red-500'> {errors.state?.message}</p>
      </div>
    </>
  );
}

export default AddressInput;


// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';

// interface State {
//   name: string;
//   state_code: string;
// }

// interface Country {
//   name: string;
//   states: State[];
// }

// interface FormData {
//   country: string;
//   state: string;
// }

// interface ResponseData {
//   error: boolean;
//   msg: string;
//   data: Country[];
// }

// export default function CountryForm() {
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [states, setStates] = useState<string[]>([]);

//   const { register, setValue } = useForm<FormData>();

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://countriesnow.space/api/v0.1/countries/states");
//       const responseData: ResponseData = await response.json();
  
//       const allStates: State[] = responseData.data.reduce(
//         (states: State[], country: Country) => {
//           return [...states, ...country.states];
//         },
//         []
//       );
  
//       const stateNames: string[] = allStates.map((state) => state.name);
  
//       setCountries(responseData.data);
//       setStates(stateNames);
//     };
  
//     fetchData();
//   }, []);

//   const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedCountry = event.target.value;
//     const selectedCountryObject = countries.find(country => country.name === selectedCountry);
//     setStates(selectedCountryObject?.states.map((state) => state.name) || []);
//     setValue('state', '');
//   };


//   return (
//     <>
//       <label>
//         Country:
//         <select {...register('country')} onChange={handleCountryChange} className='text-white'>
//           <option value="">Select a country</option>
//           {countries.map((country, index) => (
//             <option key={index} value={country.name}>{country.name}</option>
//           ))}
//         </select>
//       </label>
//       <br />
//       <label>
//         State:
//         <select {...register('state')}>
//           <option value="">Select a state</option>
//           {states.map((state, index) => (
//             <option key={index} value={state}>{state}</option>
//           ))}
//         </select>
//       </label>
//     </>
//   );
// }