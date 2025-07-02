import { useState } from "react";
import Header from "../components/Header";

export default function JobPost() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    companyLocation: "",
    salary: "",
    jobType: "",
    jobDescription: "",
    qualifications: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://job-portal-backend-delta.vercel.app/jobs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to post job.");
      }

      const data = await response.json();
      console.log("Job posted successfully:", data);


      setSuccessMessage("✅ Job posted successfully!");


      setFormData({
        jobTitle: "",
        companyName: "",
        companyLocation: "",
        salary: "",
        jobType: "",
        jobDescription: "",
        qualifications: "",
      });
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="py-3">Post a Job</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="jobTitle" className="form-label">
            Job Title:
          </label>
          <input
            required
            type="text"
            id="jobTitle"
            name="jobTitle"
            className="form-control"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="companyName" className="form-label">
            Company Name:
          </label>
          <input
            required
            type="text"
            id="companyName"
            name="companyName"
            className="form-control"
            value={formData.companyName}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="companyLocation" className="form-label">
            Location:
          </label>
          <input
            required
            type="text"
            id="companyLocation"
            name="companyLocation"
            className="form-control"
            value={formData.companyLocation}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="salary" className="form-label">
            Salary:
          </label>
          <input
            required
            type="number"
            id="salary"
            name="salary"
            className="form-control"
            value={formData.salary}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="jobType" className="form-label">
            Job Type:
          </label>
          <select
            required
            id="jobType"
            name="jobType"
            className="form-control"
            value={formData.jobType}
            onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option value="Full-time (On-site)">Full-time (On-site)</option>
            <option value="Part-time (On-site)">Part-time (On-site)</option>
            <option value="Full-time (Remote)">Full-time (Remote)</option>
            <option value="Part-time (Remote)">Part-time (Remote)</option>
          </select>
          <br />

          <label htmlFor="jobDescription" className="form-label">
            Job Description:
          </label>
          <textarea
            required
            id="jobDescription"
            name="jobDescription"
            className="form-control"
            value={formData.jobDescription}
            onChange={handleChange}
          ></textarea>
          <br />

          <label htmlFor="qualifications" className="form-label">
            Job Qualifications:
          </label>
          <textarea
            required
            id="qualifications"
            name="qualifications"
            className="form-control"
            value={formData.qualifications}
            onChange={handleChange}
          ></textarea>
          <br />

          <button className="btn btn-primary">Post Job</button>
        </form>

        {successMessage && (
          <p className="mt-3 text-success fw-bold">{successMessage}</p>
        )}
      </main>
    </>
  );
}
