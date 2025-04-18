import React, { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';

// These are just samples, in a real application these would be fetched from an API
const SKILL_CATEGORIES = [
  "Programming",
  "Design",
  "Language",
  "Music",
  "Cooking",
  "Business",
  "Marketing",
  "Photography",
  "Fitness",
  "Writing"
];

const SkillsList = ({ skillType, skills, onAddSkill, onRemoveSkill }) => {
  const [newSkill, setNewSkill] = useState({
    name: '',
    category: '',
    level: 'beginner',
    description: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSkill({
      ...newSkill,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSkill.name && newSkill.category) {
      onAddSkill(skillType, {
        ...newSkill,
        id: Date.now().toString()
      });
      setNewSkill({
        name: '',
        category: '',
        level: 'beginner',
        description: ''
      });
      setShowForm(false);
    }
  };

  return (
    <div>
      {skills.length > 0 ? (
        <ul className="space-y-3 mb-6">
          {skills.map((skill, index) => (
            <li key={skill.id || index} className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <span className="font-medium text-gray-800">{skill.name}</span>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">{skill.category}</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full capitalize">{skill.level}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onRemoveSkill(skillType, index)}
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mb-6">No skills added yet.</p>
      )}

      {!showForm && (
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-200"
        >
          <PlusCircle size={20} className="mr-1" />
          <span>Add Skill</span>
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`${skillType}-name`} className="block text-sm font-medium text-gray-700 mb-1">
                Skill Name
              </label>
              <input
                type="text"
                id={`${skillType}-name`}
                name="name"
                value={newSkill.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="e.g., JavaScript, Cooking, Spanish"
                required
              />
            </div>

            <div>
              <label htmlFor={`${skillType}-category`} className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id={`${skillType}-category`}
                name="category"
                value={newSkill.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                required
              >
                <option value="">Select a category</option>
                {SKILL_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor={`${skillType}-level`} className="block text-sm font-medium text-gray-700 mb-1">
              Proficiency Level
            </label>
            <select
              id={`${skillType}-level`}
              name="level"
              value={newSkill.level}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor={`${skillType}-description`} className="block text-sm font-medium text-gray-700 mb-1">
              Description (optional)
            </label>
            <textarea
              id={`${skillType}-description`}
              name="description"
              rows={3}
              value={newSkill.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Brief description of your skill level and experience..."
            />
          </div>

          <div className="mt-4 flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Add Skill
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SkillsList;