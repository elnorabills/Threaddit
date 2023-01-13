import QuestionListPage from "../Questions/QuestionListPage";
import Sidebar from "../Sidebar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="sidebar-questions">
        <Sidebar />
        <QuestionListPage />
      </div>
    </div>
  );
};

export default HomePage;
