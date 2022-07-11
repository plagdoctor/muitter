import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "name";
  type:string;
  required: boolean;
  placed?: string;
  register: UseFormRegisterReturn;
  //[key: string]: any;
}

export default function Input({
  label,
  name,
  kind = "text",
  register,
  type,
  required,
  placed,
}: InputProps) {
  return (
    <div className="flex flex-col pt-4">

      <label
        className=" block text-lg font-medium text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      {kind === "text" ? (
        <div className="rounded-md relative flex  items-center shadow-sm">
          <input
            id={name}
            {...register}
            // {...rest}
            type={type}
            required={required}
            placeholder={placed}
            className=" mt-1 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow "
          />
        </div>
      ) : null}
      {kind === "name" ? (
        <div className="rounded-md relative flex  items-center shadow-sm">
          <input
            id={name}
            {...register}
            // {...rest}
            type={type}
            required={required}
            placeholder={placed}
            className=" mt-1 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow "
          />
        </div>
      ) : null}      
    </div>
  );
}
