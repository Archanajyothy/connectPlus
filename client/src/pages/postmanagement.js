import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminSidebar from '../components/admin/AdminSidebar';
import { getReportedPosts, blockPost, unblockPost } from '../redux/actions/postmanagementAction';

const PostManagement = () => {
  const { reportedPosts } = useSelector((state) => state.postmanagement);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("Reported post :",reportedPosts)

  useEffect(() => {
    dispatch(getReportedPosts(auth));
  }, [dispatch]);

  const toggleBlockPost = (postId, blocked, token) => {
    if (blocked) {
      dispatch(unblockPost(postId, token));
    } else {
      dispatch(blockPost(postId, token));
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Post Management</h2>
      <AdminSidebar />
      <div className="admin-dashboard-content">
        <div className="post-management">
          <table>
            <thead>
              <tr>
                <th><h4>Reported Posts</h4></th>
              </tr>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reportedPosts.map((post) => (
                <tr key={post._id}>
                  <td>{post._id}</td>
                  <td>{post.user}</td>
                  <td>{post.blocked ? 'Blocked' : 'Active'}</td>
                  <td>
                    <button onClick={() => toggleBlockPost(post._id, post.blocked, auth.token)}>
                      {post.blocked ? 'Unblock' : 'Block'}
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

export default PostManagement;
