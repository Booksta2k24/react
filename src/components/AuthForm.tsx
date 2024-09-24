// components/AuthForm.tsx
import { Formik, Form, ErrorMessage } from "formik";
import InputField from "./InputField";
import { AuthFormProps } from "../types/authForm";


const AuthForm = <T extends object>({
    initialValues,
    validationSchema,
    onSubmit,
    formFields,
    buttonText,
}: AuthFormProps<T>) =>{
    
    return (
        <Formik
            initialValues={initialValues.data}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="w-full space-y-4 lg:space-y-6">
                    {formFields.map(({ label, name, type, placeholder }) => (
                        <div key={name as string}>
                            <InputField
                                label={label}
                                type={type}
                                id={name as string}
                                placeholder={placeholder}
                                name={name as string}
                                onChange={handleChange}
                            />
                            <ErrorMessage name={name as string} component="div" className="text-red-500 text-sm h-3" />
                        </div>
                    ))}
                    <button type="submit" className="w-full py-2 md:py-3 text-white bg-secondary rounded-3xl hover:bg-indigo-700 text-sm md:text-base">
                        {buttonText}
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default AuthForm;
