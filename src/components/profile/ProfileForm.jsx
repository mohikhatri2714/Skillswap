import React from 'react';
import { UserCircle } from 'lucide-react';

const ProfileForm = ({ profile, onUpdateProfile }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdateProfile({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Personal Information</h2>
      
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mb-4 sm:mb-0 sm:mr-6">
          {profile.avatar ? (
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
          ) : (
            <UserCircle className="w-20 h-20 text-gray-400" />
          )}
        </div>
        
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={profile.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="New York, NY"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label htmlFor="avatar" className="block text-sm font-medium text-gray-700 mb-1">
              Profile Picture URL
            </label>
            <input
              type="text"
              id="avatar"
              name="avatar"
              value={profile.avatar}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="https://example.com/your-image.jpg"
            />
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={4}
          value={profile.bio}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          placeholder="Tell us about yourself, your background, and your learning goals..."
        />
      </div>
    </div>
  );
};

export default ProfileForm;