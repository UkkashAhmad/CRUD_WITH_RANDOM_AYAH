import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditData() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://6579a51f1acd268f9af99c00.mockapi.io/posts/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setBody(response.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function handleEditData() {
    const data = {
      title,
      body,
    };
    axios
      .put(`https://6579a51f1acd268f9af99c00.mockapi.io/posts/${id}`, data)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Edit Post</h1>

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
        onClick={handleEditData}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}

export default EditData;
