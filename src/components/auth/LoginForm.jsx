import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import Field from "../common/Field.jsx";


function LoginForm() {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();

    const submitForm = (formData) =>{
        console.log(formData)
        navigate("/");
    }
    return (
        <form onSubmit={handleSubmit(submitForm)}>

            <div className="mb-6">
                <Field label="Email" error={errors.email}>
                    <input {...register("email", {required: "Email is required"})}
                        className={`w-full p-3 bg-[#030317] border ${!!errors.email ? "border-red-500": "border-white/20 focus:border-indigo-500"} rounded-md focus:outline-none focus:border-indigo-500`}
                        type="email" name="email" id="email"
                    />
                </Field>
            </div>

            <div className="mb-6">
                <Field label="Password" error={errors.password}>
                    <input {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message:"your password must be at least 8 characters"
                        },
                    })}
                           className={`w-full p-3 bg-[#030317] border ${!!errors.password ? "border-red-500": "border-white/20"} rounded-md focus:outline-none focus:border-indigo-500`}
                           type="password" name="password" id="password"
                    />
                </Field>
            </div>

            <div className="mb-6">
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
                    Login
                </button>
            </div>

        </form>
    );
}

export default LoginForm;
