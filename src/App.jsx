import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useFetch from "./useFetch";
import Header from "./components/Header";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://job-portal-backend-delta.vercel.app/jobs"
  );

  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = data?.jobs?.filter((job) =>
    job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await fetch(`https://job-portal-backend-delta.vercel.app/jobs/${id}`, {
        method: "DELETE",
      });
      
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete job:", error);
      alert("Failed to delete job.");
    }
  };

  return (
    <>
      <Header />
      <main className="container py-3">
        <input
          className="form-control"
          placeholder="Search by job title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <h1 className="py-3">All Jobs</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error loading job data.....</p>}

        <div className="row">
          {filteredJobs?.length > 0 &&
            filteredJobs.map((job) => (
              <div className="col-md-4 mb-4" key={job._id}>
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">{job.jobTitle}</h2>
                    <p className="card-text">
                      <strong>Company name:</strong> {job.companyName}
                    </p>
                    <p className="card-text">
                      <strong>Location:</strong> {job.companyLocation}
                    </p>
                    <p className="card-text">
                      <strong>Job Type:</strong> {job.jobType}
                    </p>
                    <div className="d-flex gap-1">
                      <button
                        className="btn btn-primary w-50"
                        onClick={() => navigate(`/${job._id}`)}
                      >
                        See Details
                      </button>

                      <button
                        className="btn btn-danger w-50"
                        onClick={() => handleDelete(job._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
