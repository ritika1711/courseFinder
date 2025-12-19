import CourseCard from "./CourseCard";

export default function CourseList({ courses }) {
  if (courses.length === 0) {
    return <p className="no-result">No courses found</p>;
  }

  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
