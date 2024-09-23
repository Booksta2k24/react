import { InputFieldProps } from "../types/inputField";

const InputField = ({ label, type, id, placeholder, value, onChange, name }: InputFieldProps) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                className="w-full px-3 py-2 md:py-3 border border-gray-200 shadow-xs focus:outline-none focus:ring-secondary focus:border-secondary text-sm rounded-lg"
                placeholder={placeholder}
                name={name}
            />
        </div>
    );
};

export default InputField;
