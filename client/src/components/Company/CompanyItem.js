import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_COMPANY } from '../../utils/mutations';

const CompanyItem = ({ company, onEdit }) => {
  const [deleteCompany] = useMutation(DELETE_COMPANY);

  const handleDelete = async () => {
    try {
      await deleteCompany({ variables: { _id: company._id } });
      console.log('Company deleted successfully');
      // Perform any additional actions after successful deletion
    } catch (error) {
      console.error('Error deleting company:', error);
    }
  };

  return (
    <div>
      <h4>{company.name}</h4>
      <button onClick={() => onEdit()}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CompanyItem;
