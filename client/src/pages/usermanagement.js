import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminSidebar from '../components/admin/AdminSidebar';
import { getUsers, blockUser, unblockUser } from '../redux/actions/usermanagementAction';

const UserManagement = () => {
  const { users } = useSelector((state) => state.usermanagement);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(auth));
  }, [dispatch]);

  const toggleBlockUser = (userId, blocked, token) => {
    console.log("usr mngile toggle auth ", token)
    console.log("usr mngile toggle auth ", userId)
    console.log("usr mngile toggle auth ", blocked)    
    if (blocked) {
      dispatch(unblockUser(userId,token));
    } else {
      dispatch(blockUser(userId,token));
    }
  };

  // Filter users whose role is not "admin"
  const filteredUsers = users.filter((user) => user.role !== 'admin');

  return (
    <div className="admin-dashboard">
      <h3>User Management</h3>
      <AdminSidebar />
      <div className="admin-dashboard-content">
        <div className="user-management">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.blocked ? 'Blocked' : 'Active'}</td>
                  <td>
                    <button onClick={() => toggleBlockUser(user._id, user.blocked, auth.token)}>
                      {user.blocked ? 'Unblock' : 'Block'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
