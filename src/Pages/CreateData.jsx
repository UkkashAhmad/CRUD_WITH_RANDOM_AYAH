import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CreateData() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  function handleSubmit() {
    const data = {
      title,
      body,
    };

    axios
      .post('https://6579a51f1acd268f9af99c00.mockapi.io/posts', data)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Create Data</h1>

      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="body" className="block text-sm font-medium text-gray-600">
            Body
          </label>
          <input
            type="text"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateData;
