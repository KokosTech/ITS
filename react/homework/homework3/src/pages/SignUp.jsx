import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useUserContext } from "../contexts/userContext";
import { formFields } from "../constants/formFields";

import Input from "../components/Input";

const SignUp = () => {
  const [form, setForm] = useState(
    formFields
      .map((field) => ({
        [field.name]: "",
      }))
      .reduce((acc, curr) => ({ ...acc, ...curr }), {})
  );
  const [error, setError] = useState(null);

  const { user, signUp } = useUserContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !error && signUp(form);
  };

  useEffect(() => {
    if (user.firstName) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    console.log(form);
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
    }
    if (form.password === form.confirmPassword) {
      setError(null);
    }
  }, [form]);

  return (
    <div className="flex p-5 w-full items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full sm:w-3/5 md:w-1/2 lg:w-2/5 max-w-lg p-5 rounded-xl space-y-5 bg-gray-900 text-white"
      >
        <h1 className="font-bold text-center text-xl">Sign Up</h1>
        {formFields.map((field) => (
          <Input
            key={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={handleChange}
          />
        ))}
        <button
          type="submit"
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700"
        >
          Sign Up
        </button>
        <p className={`text-red-600 ${!error ? "hidden" : null}`}>{error}</p>
      </form>
    </div>
  );
};

export default SignUp;
