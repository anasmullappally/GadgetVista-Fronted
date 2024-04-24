import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login, loginErrorChange } from "../../redux/actions/authAction";
import CircleLoading from "../common/CircleLoading";

function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.loading);
    const error = useSelector(state => state.auth.error);

    const removeError = (errorState) => {
        setErrors(prevErrors => {
            // Create a copy of the previous errors object
            const newErrors = { ...prevErrors };
            // Remove error message for the changed field
            delete newErrors[errorState];
            // Return updated errors object
            return newErrors;
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email" && errors?.email) {
            removeError(name)
        }
        if (name === "password" && errors?.password) {
            removeError(name)
        }
        if (error) dispatch(loginErrorChange())
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const validationErrors = {};
        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Invalid email format";
        }
        if (!formData.password) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 5) {
            validationErrors.password = "Password must be at least 5 characters long";
        }
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(login(formData));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
                <label htmlFor="email" className="font-medium">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                {errors?.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password" className="font-medium">Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="password"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                {errors?.password && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.password}</p>}
            </div>
            {error && <p className="text-sm text-red-600 dark:text-red-500">{error}</p>}
            <button type="submit" disabled={isLoading} className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                {isLoading ? <CircleLoading size={6} /> : 'Login'}
            </button>
        </form>
    );
}

export default LoginForm;
