import { createContext, useContext } from 'react';
import { projects } from '../data/projects';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  return (
    <ProjectContext.Provider value={{ projects }}>
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
