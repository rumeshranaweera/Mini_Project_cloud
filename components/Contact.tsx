"use client";

type Props = {};

function Contact({}: Props) {
  return (
    <section className="#contact">
      <div className="flex flex-col items-center justify-center text-center md:mt-32 mt-12 ">
        <h1 className="text-5xl font-semibold text-secondary-100">
          Contact with us to be informed <br />
          about news
        </h1>
        <p className="font-medium text-xl py-4">
          Recieve latest news, update, and many other <br />
          things every week.{" "}
        </p>
        <div className="flex gap-3">
          <input
            placeholder="Enter Your Email Adress"
            type="email"
            className="text-secondary-300 h-20 pl-4 md:pr-40 pr-12 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
