import './index.css'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const items = timelineItemsList.map(item => {
    if (item.categoryId === 'COURSE') {
      console.log(item)
      return {
        title: item.title,
        card: <CourseTimelineCard item={item} />,
      }
    }

    if (item.categoryId === 'PROJECT') {
      return {
        title: item.title,
        card: <ProjectTimelineCard item={item} />,
      }
    }

    return null
  })

  return (
    <div className="timeline-container">
      <Chrono items={items} mode="VERTICAL_ALTERNATING" />
    </div>
  )
}

export default TimelineView
