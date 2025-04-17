import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProjectForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [form, setForm] = useState({ title: "", description: "", tags: "" });

  useEffect(() => {
    // Optional: Load data from mock backend/state using the id
    if (isEdit) {
      const existing = JSON.parse(localStorage.getItem("projects")) || [];
      const found = existing.find((p) => p.id === id);
      if (found) setForm(found);
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("projects")) || [];
    let updated;
    if (isEdit) {
      updated = existing.map((p) => (p.id === id ? { ...form, id } : p));
    } else {
      updated = [...existing, { ...form, id: Date.now().toString() }];
    }
    localStorage.setItem("projects", JSON.stringify(updated));
    navigate("/dashboard");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{isEdit ? "Edit" : "Add"} Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full border p-2 rounded" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full border p-2 rounded" required />
        <input name="tags" value={form.tags} onChange={handleChange} placeholder="Tags (comma-separated)" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{isEdit ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default ProjectForm;