export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <span>{course.category}</span>
    </div>
  );
}
