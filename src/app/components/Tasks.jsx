import React from 'react';

const EditButton = ({ onClick }) => (
  <button onClick={onClick}>Edit</button>
);

const DeleteButton = ({ onClick }) => (
  <button onClick={onClick}>Delete</button>
);

const IndexPage = () => {
  const handleEdit = () => {
    console.log('Edit button clicked');
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
  };

  return (
    <div>
      <p> <EditButton onClick={handleEdit} /></p>
     <p><DeleteButton onClick={handleDelete} /></p>
      
    </div>
  );
};

export default IndexPage;
