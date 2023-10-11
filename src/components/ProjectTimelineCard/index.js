import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {item} = props
  const {
    title,
    projectTitle,
    description,
    duration,
    projectUrl,
    imageUrl,
  } = item

  return (
    <div className="project-timeline-card">
      <div className="card-header">
        <h1>{title}</h1>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <button type="button" className="visit-button">
            Visit
          </button>
        </a>
        <AiFillCalendar className="icon" />
        <p>{duration}</p>
      </div>
      <h1 className="project-title">{projectTitle}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img src={imageUrl} alt={title} className="project-image" />
      </div>
    </div>
  )
}

export default ProjectTimelineCard
