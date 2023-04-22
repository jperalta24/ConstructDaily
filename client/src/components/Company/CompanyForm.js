import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_COMPANY, UPDATE_COMPANY } from '../../utils/mutations';

const CompanyForm = ({ company = null, onFinished }) => {
  const isNewCompany = company === null;
  const [formData, setFormData] = useState({
    name: company?.name || '',
  });

  const [saveCompany] = useMutation(isNewCompany ? CREATE_COMPANY : UPDATE_COMPANY);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const variables = isNewCompany ? formData : { _id: company._id, ...formData };
      await saveCompany({ variables });
      onFinished();
    } catch (error) {
      console.error('Error saving company:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Company name"
      />
      <button type="submit">{isNewCompany ? 'Create Company' : 'Update Company'}</button>
    </form>
  );
};

export default CompanyForm;
