import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, TextField } from '../../../components';
import { addUser, getUserList } from '../../../redux/slices/userSlice';

const UserForm = () => {
  const [searchParams] = useSearchParams();
  const { userList } = useSelector(state => state.user);
  const id = searchParams.get('id');
  const findUseListByID = userList?.find(item => item.id === id);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    Name: findUseListByID?.Name,
    Age: findUseListByID?.Age,
    Email: findUseListByID?.Email,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateUserById = (id, updatedData) => {
    return userList.map(user => (user.id === id ? { ...user, ...updatedData } : user));
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    for (const field in formData) {
      if (!formData[field]) {
        formErrors[field] = 'This field is required';
        isValid = false;
      }
    }
    if (formData.Age && isNaN(formData.Age)) {
      formErrors.Age = 'Age must be a number';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (validateForm()) {
      if (id) {
        const updatedData = updateUserById(id, formData);
        dispatch(getUserList(updatedData));
      } else {
        dispatch(addUser(formData));
      }
      navigate('/');
    }
  };

  return (
    <Card>
      <div className='container mt-5'>
        <h2>User Detail Form</h2>
        <form onSubmit={handleSubmit}>
          <TextField label='Name' name='Name' value={formData.Name} placeholder={'Enter Name'} onChange={handleChange} required={true} />
          {errors.Name && <div className='text-danger'>{errors.Name}</div>}

          <TextField
            label='Age'
            name='Age'
            type='number'
            min={1}
            max={100}
            value={formData.Age}
            placeholder={'Enter Age'}
            onChange={handleChange}
            required={true}
          />
          {errors.Age && <div className='text-danger'>{errors.Age}</div>}

          <TextField
            label='Email'
            name='Email'
            type='email'
            value={formData.Email}
            placeholder={'Enter Email'}
            onChange={handleChange}
            required={true}
          />
          {errors.Email && <div className='text-danger'>{errors.Email}</div>}
          <div style={{ display: 'flex', flexDirection: 'row ', gap: '10px' }}>
            <Button label={id ? 'Edit' : 'Add'} type={'submit'} variant='secondary' icon={'jam:plus'} />
            <Button label={'Cancel'} type={'button'} variant='secondary' icon={'weui:back-outlined'} onClick={() => navigate('/')} />
          </div>
        </form>
      </div>
    </Card>
  );
};
export default UserForm;
