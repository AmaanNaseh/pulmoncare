import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8cad7eaf-eddb-494f-9a6c-97cef3d3eeb7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold italic text-center mx-auto mb-10">
        Contact Us
      </h1>

      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-8 w-fit mx-auto min-w-[300px] max-w-[650px]"
      >
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            className="px-4 py-2 text-black w-full"
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="resize-none px-4 py-2 text-black w-full"
            rows={10}
            placeholder="Your message"
          ></textarea>
        </div>

        <button
          className="px-4 py-2 bg-white text-black font-bold rounded-full hover:scale-110 transition-transform duration-100"
          type="submit"
        >
          Send
        </button>
      </form>

      <p className="text-center my-4">{result}</p>
    </>
  );
};

export default Contact;
