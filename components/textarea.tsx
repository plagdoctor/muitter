import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function TextArea({ label, name, register, ...rest }: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name} 
        className="mt-1 shadow-sm w-full focus:ring-cyan-500 rounded-md border-2 border-gray-500 focus:border-cyan-500 "
        rows={4}
        {...register}
        {...rest}
      />
    </div>
  );
}
