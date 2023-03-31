type FormRulesType = {
    [key: string]: {
      [key: string]: {
        value: number | string | RegExp | Boolean;
        message: string;
      };
    };
  };

export const FormRules:FormRulesType = {
    email: {
        required: {
            value: true,
            message: `Email is required!`,
        },
        pattern: {
          value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          message: "Please enter a valid email!"
        }
    },
      firstName: {
        required: {
            value: true,
            message: `First Name is required!`,
        },
        minLength: {
          value: 6,
          message: 'Your first name is too short!'
        },
        maxLength: {
          value: 30,
          message: 'Your first name is too long!'
        }
      },
      lastName: {
        required: {
            value: true,
            message: `Last Name is required!`,
        },
        minLength: {
          value: 6,
          message: 'Your last name is too short!'
        },
        maxLength: {
          value: 30,
          message: 'Your last name is too long!'
        }
      },
      username: {
        required: {
            value: true,
            message: `Username is required!`,
        },
        minLength: {
          value: 6,
          message: 'Your username is too short!'
        },
        maxLength: {
          value: 30,
          message: 'Your username is too long!'
        }
      },
      password: {
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
        }
    }
}