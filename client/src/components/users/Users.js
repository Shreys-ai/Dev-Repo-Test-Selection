import React, { useState } from 'react';
import { toast } from 'react-toastify';
import API from '../../services/api';

function Users({ users, loading, fetchUsers, fetchAnalytics }) {
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'user', gender: 'male' });
  
  const handleAddUser = async (e) => {
    e.preventDefault();
    
    // Validate form fields
    if (!newUser.name && !newUser.email) {
      toast.error('Name and Email are required!');
      return;
    }

    if (!newUser.name) {
      toast.error('Name is required!');
      return;
    }
    
    if (!newUser.email) {
      toast.error('Email is required!');
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newUser.email)) {
      toast.warn('Valid Email is required!');
      return;
    }

    try {
      const response = await API.users.create(newUser);
      setNewUser({ name: '', email: '', role: 'user', gender: 'male' });
      fetchUsers();
      fetchAnalytics();
      toast.success('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
      toast.error(`Error: ${error.message || 'Error adding user'}`);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    
    try {
      await API.users.delete(userId);
      fetchUsers();
      fetchAnalytics();
      toast.success('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Error deleting user');
    }
  };

  return (
    <div className="tab-content">
      <div className="form-section">
        <h2>Add New User</h2>
        <form onSubmit={handleAddUser} className="user-form" noValidate>
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            disabled={loading}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            disabled={loading}
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            disabled={loading}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <select
            value={newUser.gender}
            onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
            disabled={loading}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button type="submit" disabled={loading}>
            {loading ? 'Adding...' : 'Add User'}
          </button>
        </form>
      </div>

      <div className="users-section">
        <h2>Users ({users.length})</h2>
        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <span className={`role-badge ${user.role}`}>{user.role}</span>
              <button 
                className="delete-btn"
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <button onClick={fetchUsers} className="refresh-btn">
          Refresh Users
        </button>
      </div>
    </div>
  );
}

export default Users;
