import { ArrowLeft, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
const ContactForm = () => {
  return (
    <div className="w-full flex justify-center py-10 px-4 mt-30 md:px-8">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left - Contact Information */}
        <div className="bg-black text-white p-6 md:w-[40%] flex flex-col justify-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none relative">
          <button className="absolute left-6 top-6">
            <Link to='/'>
            <ArrowLeft className="h-5 w-5" /> 
            </Link>
          </button>
          <h2 className="text-xl font-semibold mb-6 text-center md:text-left">Contact Information</h2>
          <div className="space-y-4 text-gray-300 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Phone className="h-5 w-5" />
              <span>+91 9090909909</span>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Mail className="h-5 w-5" />
              <span>anamikairl123@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="p-6 md:w-[60%] flex flex-col justify-center">
          {/* Header section */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-gray-700">
                Your Name
              </label>
              <input
                id="name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="feedback" className="block text-gray-700">
                Send Feedback
              </label>
              <textarea
                id="feedback"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <div className="text-center">
              <button className="bg-black text-white rounded-lg px-6 py-2 hover:bg-gray-800 transition">
                Send Feedback
                
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;