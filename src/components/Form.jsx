'use client'

import React, { useState, cloneElement, Children } from 'react';

const Form = ({ children, handleSubmit,className }) => {

  const initialFormState = Children.toArray(children).reduce((acc, child) => {
    const formData = {}

    if(child.props.name)
        formData[child.props.name] = '';
    return formData;
  });

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const submit=()=>handleSubmit(formData)

  const enhancedChildren = Children.map(children, (child) => {
    return cloneElement(child, {
      value: formData[child.props.name],
      onChange: handleChange
    });
  });

  return (
    <form className={className} onSubmit={submit}>
      {enhancedChildren}
      
    </form>
  );
};

export default Form;