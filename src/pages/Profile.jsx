import React, { useState } from 'react';
import ProfileForm from '../components/profile/ProfileForm';
import SkillsList from '../components/profile/SkillsList';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    avatar: '',
    location: '',
    skillsOffered: [],
    skillsWanted: []
  });

  const handleProfileUpdate = (updatedProfile) => {
    setProfile({ ...profile, ...updatedProfile });
  };

  const handleAddSkill = (skillType, skill) => {
    if (skillType === 'offered') {
      setProfile({
        ...profile,
        skillsOffered: [...profile.skillsOffered, skill]
      });
    } else {
      setProfile({
        ...profile,
        skillsWanted: [...profile.skillsWanted, skill]
      });
    }
  };

  const handleRemoveSkill = (skillType, skillIndex) => {
    if (skillType === 'offered') {
      const updatedSkills = [...profile.skillsOffered];
      updatedSkills.splice(skillIndex, 1);
      setProfile({
        ...profile,
        skillsOffered: updatedSkills
      });
    } else {
      const updatedSkills = [...profile.skillsWanted];
      updatedSkills.splice(skillIndex, 1);
      setProfile({
        ...profile,
        skillsWanted: updatedSkills
      });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Profile</h1>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-8">
            <ProfileForm profile={profile} onUpdateProfile={handleProfileUpdate} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills You Offer</h2>
              <SkillsList 
                skillType="offered"
                skills={profile.skillsOffered}
                onAddSkill={handleAddSkill}
                onRemoveSkill={handleRemoveSkill}
              />
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills You Want</h2>
              <SkillsList 
                skillType="wanted"
                skills={profile.skillsWanted}
                onAddSkill={handleAddSkill}
                onRemoveSkill={handleRemoveSkill}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <button 
            className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;