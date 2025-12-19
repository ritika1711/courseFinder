import { useState } from "react";
import coursesData from "./data/courses";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CourseList from "./components/CourseList";
import QuoteBox from "./components/QuoteBox";
import "./index.css";

export default function App() {
  const [search, setSearch] = useState("");

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <QuoteBox />
      <SearchBar search={search} setSearch={setSearch} />
      <CourseList courses={filteredCourses} />
    </div>
  );
}
