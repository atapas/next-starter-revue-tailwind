import { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const subscribeMe = async (event) => {
    event.preventDefault();
    console.log(email);
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ email: email }),
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
    });

    const { error, message } = await res.json();

    if (error) {
      setError(error);
    } else {
      setSuccess(message);
    }
  };

  const changeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  }

  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Subscribe to the newsletter
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Get emails from me about web development, content creation, and how lead a motivated life.
      </p>
      <form className="relative my-4" onSubmit={subscribeMe}>
        <input
          onChange={changeEmail}
          aria-label="Email for newsletter"
          placeholder="john@email.com"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      {success 
        ? <span className="flex items-center text-sm font-bold text-green-700 dark:text-green-400">{success}</span> 
        : <span className="flex items-center text-sm font-bold text-red-800 dark:text-red-400">{error}</span>}
      <p className="text-sm text-gray-800 dark:text-gray-200">
        14 subscribers . 3 issues
      </p>
    </div>
  );
};

export default Subscribe;