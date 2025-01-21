import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '../../components';
import { Button } from '../../components';
import { getUserList } from '../../redux/slices/userSlice';

const HomePage = () => {
  const navigation = useNavigate();
  const { userList } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const columns = ['Name', 'Age', 'Email'];

  const actions = [
    {
      label: 'Update',
      icon: 'tabler:edit',
      onClick: row => navigation(`/Edit?id=${row.id}`),
      variant: 'secondary',
    },
    {
      label: 'Remove',
      icon: 'iconamoon:trash',
      onClick: row => {
        const filterdData = userList.filter(item => item.id !== row.id);
        dispatch(getUserList(filterdData));
      },
      variant: '',
    },
  ];
  return (
    <div>
      <div style={{ paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row', gap: '5px' }}>
        <Button label='Add User' icon={'gridicons:add'} onClick={() => navigation('/Add')} />
        <h2>User Table</h2>
      </div>
      <div style={{ width: '100%' }}>
        <Table columns={columns} rows={userList} rowsPerPage={10} actions={actions} />
      </div>
    </div>
  );
};

export default HomePage;
