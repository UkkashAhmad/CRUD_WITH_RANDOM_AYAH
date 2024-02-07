import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteData() {
  const navigate = useNavigate();
  const { id } = useParams();

  function handleDeleteData() {
    axios
      .delete(`https://6579a51f1acd268f9af99c00.mockapi.io/posts/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold mb-4">Delete Data</h1>
      </div>

      <h3 className="text-xl mb-4">Are you sure you want to delete this data?</h3>

      <button
        onClick={handleDeleteData}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Yes, Delete it
      </button>
    </div>
  );
}

export default DeleteData;
