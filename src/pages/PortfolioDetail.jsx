import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function PortfolioDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) return <div>프로젝트를 찾을 수 없습니다.</div>;

  return (
    <div>
      <h1>{project.label} 컨텐츠 페이지</h1>
    </div>
  );
}
