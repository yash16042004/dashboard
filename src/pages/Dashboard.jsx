import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  const deleteProject = (id) => {
    if (window.confirm("Delete this project?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <div>
          <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full" />
          <p>{user.displayName}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-lg">Logout</button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold">Your Projects</h2>
        <button onClick={() => navigate("/project")} className="bg-green-500 text-white px-4 py-2 rounded mt-4">
          + Add Project
        </button>
        <div className="grid gap-4 mt-4">
          {projects.map((project) => (
            <div key={project.id} className="p-4 border rounded shadow">
              <h3 className="font-semibold">{project.title}</h3>
              <p>{project.description}</p>
              <div className="flex gap-2 mt-2">
                <button onClick={() => navigate(`/project/${project.id}`)} className="text-blue-600">Edit</button>
                <button onClick={() => deleteProject(project.id)} className="text-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;