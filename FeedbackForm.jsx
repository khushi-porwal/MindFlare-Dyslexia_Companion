import React from "react";

const FeedbackForm = () => {
    return (
        <div className="bg-black text-white flex justify-center items-center min-h-screen p-5">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
                <h2 className="text-2xl font-bold">Parent Feedback - Dyslexia Companion</h2>
                <p className="mt-2 text-gray-300">
                    We value your feedback! Please share your experience after using our Dyslexia Companion, especially after exploring the outdoor games page.
                </p>
                <form className="mt-4 space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <textarea
                        rows="5"
                        placeholder="How did your child respond to the outdoor games? What improvements did you notice?"
                        required
                        className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded transition"
                    >
                        Submit Feedback
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;