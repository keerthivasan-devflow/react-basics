// import contactus from "../../images/contactus.png";

const Contact = () => {
  return (
    <div>
      <div className="relative">
        {/* <img
          src={contactus}
          alt="contact-us"
          className="w-full object-cover h-80"
        /> */}
        <h1 className="absolute top-[35%] left-[35%] text-5xl text-white font-extrabold">
          Contact Us
        </h1>
      </div>

      <div className="border border-gray-300 w-[400px] mx-auto my-4 p-8">
        <h2 className="font-semibold text-3xl text-center text-gray-500">Have a question?</h2>
        <form className="flex flex-col space-y-3 m-4">
          <input
            type="text"
            value=""
            placeholder="Enter your name"
            className="border border-gray-300 w-80 text-center p-3"
          />
          <input
            type="email"
            value=""
            placeholder="Enter your email"
            className="border border-gray-300 w-80 text-center p-3"
          />
          <input
            type="text"
            value=""
            placeholder="Enter your message"
            className="border border-gray-300 w-80 text-center p-3 resize-none"
          />
          <button
            type="submit"
            className="w-80 text-center p-3 bg-gray-300 font-bold hover:bg-black hover:text-white cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
