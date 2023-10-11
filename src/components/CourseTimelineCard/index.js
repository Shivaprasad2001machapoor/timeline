import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {item} = props
  const {title, courseTitle, description, duration, tagsList} = item

  return (
    <div className="course-timeline-card">
      <div className="card-header">
        <h2>{title}</h2>
        <AiFillClockCircle className="icon" />
        <p>{duration}</p>
      </div>
      <h3 className="course-title">{courseTitle}</h3>
      <p className="description">{description}</p>
      <div className="tags">
        {tagsList.map(tag => (
          <span key={tag.id} className="tag">
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
