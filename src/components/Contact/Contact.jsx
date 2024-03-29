import { IoIosMail, IoIosSend, IoLogoGameControllerA } from "react-icons/io";
import { BsExclamationCircle } from "react-icons/bs";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const text = {
  port: [
    "Contato",
    "Se você tiver alguma dúvida ou apenas quiser dizer oi, não hesite em usar o formulário.",
    "Nome",
    "Email",
    "Como posso ajudar?",
    "Enviar",
    "Email enviado com sucesso",
    "Algo deu errado, tente novamente mais tarde ou tente pelas redes sociais",
    "Entendido!",
  ],
  eng: [
    "Contact",
    "Whether you have a question or just want to say hi, don't hesitate to use the form.",
    "Name",
    "Email",
    "How can I help you?",
    "Submit",
    "Email submitted successfully",
    "Something went wrong, please try again later or try via social media",
    "Understood",
  ],
};

const Contact = ({ lan }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.user_name) {
      newErrors.user_name = "Name is required";
    }
    if (!formData.user_email) {
      newErrors.user_email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.user_email)) {
      newErrors.user_email = "Invalid email format";
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
    }
    setFormErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      emailjs
        .send("service_g90c3ih", "contact_form", formData, "iVbQtaNPwK8m04oyQ")
        .then(
          (result) => {
            console.log(result.text);
            setIsOpen(true);
            setIsError(false);
            setFormData({
              user_name: "",
              user_email: "",
              message: "",
            });
          },
          (error) => {
            setIsOpen(true);
            setIsError(true);
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="pb-36 flex flex-col justify-center items-center gap-10 sm:text-lg transition-colors"
    >
      <h2 className="text-4xl sm:text-6xl text-center text-blue-800 font-black">
        <IoIosMail className="inline-block align-top" /> {text[lan][0]}
      </h2>
      <p className="text-center px-2">{text[lan][1]}</p>
      <div className="bg-zinc-100 p-8 rounded-lg drop-shadow-lg text-lg xl:w-1/2 border border-stone-400">
        <form
          onSubmit={sendEmail}
          className="grid grid-cols-2 gap-10 text-xl pt-4"
        >
          <label htmlFor="">
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className={`px-4 py-2 border-2 ${
                formErrors.user_name
                  ? "border-red-400 hover:border-red-500 focus:border-red-700"
                  : "border-stone-400 hover:border-stone-700 focus:border-stone-700"
              } outline-none w-full duration-300`}
              placeholder={text[lan][2]}
            />
            {formErrors.user_name && (
              <p className="text-red-500 mt-2">{formErrors.user_name}</p>
            )}
          </label>

          <label htmlFor="">
            <input
              type="text"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className={`px-4 py-2 border-2 ${
                formErrors.user_email
                  ? "border-red-400 hover:border-red-500 focus:border-red-700"
                  : "border-stone-400 hover:border-stone-700 focus:border-stone-700"
              } outline-none w-full duration-300`}
              placeholder={text[lan][3]}
            />
            {formErrors.user_email && (
              <p className="text-red-500 mt-2">{formErrors.user_email}</p>
            )}
          </label>
          <label htmlFor="" className="col-span-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`px-4 py-2 border-2 ${
                formErrors.message
                  ? "border-red-400 hover:border-red-500 focus:border-red-700"
                  : "border-stone-400 hover:border-stone-700 focus:border-stone-700"
              } outline-none w-full duration-300 min-h-32`}
              placeholder={text[lan][4]}
            />
            {formErrors.message && (
              <p className="text-red-500">{formErrors.message}</p>
            )}
          </label>
          <button
            type="submit"
            value="Submit"
            name="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded-md block w-fit hover:bg-blue-600 duration-300"
          >
            <IoIosSend className="inline-block align-middle" /> {text[lan][5]}
          </button>
        </form>
      </div>
      {isOpen && (
        <div className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer">
          <div className="bg-blue-700 p-6 rounded-lg text-white text-large flex flex-col justify-center items-center">
            <p>
              <BsExclamationCircle className="inline-block align-top text-8xl" />
            </p>
            <p className="text-2xl sm:text-4xl py-6">
              {isError ? text[lan][7] : text[lan][6]}
            </p>
            <button
              className="bg-white text-blue-600 rounded-lg w-fit py-2 px-4 hover:bg-blue-800 hover:text-white duration-200"
              onClick={() => setIsOpen(false)}
            >
              {text[lan][8]}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
export default Contact;
