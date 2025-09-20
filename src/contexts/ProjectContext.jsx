import { createContext, useContext } from 'react';
import { projects, otherWorks } from '../data/projects';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  return (
    <ProjectContext.Provider value={{ projects, otherWorks }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error('useProjects는 ProjectProvider 내에서 사용');
  }
  return context;
};
