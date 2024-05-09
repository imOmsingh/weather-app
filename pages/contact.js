import Head from "next/head";
import { Navbar } from "@component/components/Navbar";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export const Contact = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <ChakraProvider>
        <Head>
          <title>Contact</title>
        </Head>
        <div className="bg-[#1A2238] relative h-full">
          <header>
            <Navbar />
          </header>
          <main>
            <section className="bg-[#1A2238] grid gap-4 auto-cols-max	 grid-cols-1 sm:grid-cols-2 justify-between sm:h-screen w-screen p-4">
              <div className=" text-white flex-1">
                <h1 className="text-6xl">Contact</h1>
                <p className="text-gray-500 pt-10 font-mono">
                  👋 Hey Everyone! I&apos;m Om singh a website developer.<br/>
                  As a MERN Stack Developer, I bring 1.5 years of web development experience in the MERN stack - MongoDB, Express.js, React, Node.js. Throughout my journey, I have contributed to various projects for both personal endeavors and corporate clients, showcasing my expertise in creating dynamic and user-friendly applications. check out my projects in project section.

In addition to my development skills, I founded a startup, providing me with valuable insights into the entrepreneurial world. Despite resource limitations, I successfully navigated challenges, including developing applications in React Native.
                  <br />
                </p>

              </div>
              <div>
                <form
                  className="px-10 pt-4 border border-gray-200 rounded-lg shadow-2xl bg-white lg:mr-10"
                >
                  <h1 className="text-2xl -ml-10 p-4">Get in Touch</h1>
                  <label className="block mb-6">
                    <span className="text-gray-700 text-lg">Your name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="px-2 py-1 text-md w-full border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                      required
                      maxLength={10}
                      value={username}
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </label>
                  <label className="block mb-6">
                    <span className="text-gray-700 text-lg">Email address</span>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="px-2 py-1 text-md border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </label>
                  <label className="block mb-6">
                    <span className="text-gray-700 text-lg">Message</span>
                    <textarea
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      name="message"
                      rows="10"
                      placeholder="Type your message here..."
                      className="px-2 py-1 text-md border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    ></textarea>
                  </label>
                  <div className="mb-8 flex items-center justify-center">
                    <button className="uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Contact
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </main>
        </div>
      </ChakraProvider>
    </>
  );
};

export default Contact;
