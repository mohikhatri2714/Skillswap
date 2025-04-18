import React, { createContext, useState, useContext } from 'react';

// Mock data for initial state
const initialState = {
  user: {
    id: '001',
    name: '',
    bio: '',
    avatar: '',
    location: '',
  },
  skillsOffered: [],
  skillsWanted: [],
  matches: [],
  activeExchanges: [],
  messages: []
};

const SkillContext = createContext();

export const useSkillContext = () => useContext(SkillContext);

export const SkillProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  // Add a skill (either offered or wanted)
  const addSkill = (skillType, skill) => {
    setState(prevState => ({
      ...prevState,
      [skillType === 'offered' ? 'skillsOffered' : 'skillsWanted']: [
        ...prevState[skillType === 'offered' ? 'skillsOffered' : 'skillsWanted'],
        { ...skill, id: Date.now().toString() }
      ]
    }));
  };

  // Remove a skill
  const removeSkill = (skillType, skillId) => {
    setState(prevState => ({
      ...prevState,
      [skillType === 'offered' ? 'skillsOffered' : 'skillsWanted']: 
        prevState[skillType === 'offered' ? 'skillsOffered' : 'skillsWanted']
          .filter(skill => skill.id !== skillId)
    }));
  };

  // Update user profile
  const updateProfile = (profileData) => {
    setState(prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
        ...profileData
      }
    }));
  };

  // Value object to be provided to consumers
  const value = {
    ...state,
    addSkill,
    removeSkill,
    updateProfile
  };

  return (
    <SkillContext.Provider value={value}>
      {children}
    </SkillContext.Provider>
  );
};