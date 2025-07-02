import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "../components/Header";

export default function JobDetails() {
  const { jobId } = useParams();

  const { data, loading, error } = useFetch(
    `https://job-portal-backend-delta.vercel.app/jobs/${jobId}`
  );

  const job = data?.job;

  return (
    <>
      <Header />
      <main className="container py-3">
        {loading && <p>Loading...</p>}
        {error && <p>Error loading job details...</p>}

        {job && (
          <>
            <h1 className="pb-3">{job.jobTitle}</h1>
            <div className="card">
              <div className="card-body">
                <p>
                  <strong>Company:</strong> {job.companyName}
                </p>
                <p>
                  <strong>Location:</strong> {job.companyLocation}
                </p>
                <p>
                  <strong>Salary:</strong> {job.salary}
                </p>
                <p>
                  <strong>Job Type:</strong> {job.jobType}
                </p>
                <p>
                  <strong>Description:</strong> {job.jobDescription}
                </p>
                <p>
                  <strong>Qualifications:</strong>{" "}
                  <ol>
                    {job.qualifications
                      .split(".")
                      .map((q) => q.trim())
                      .filter((q) => q.length > 0)
                      .map((item, index) => (
                        <li key={index}>{item}.</li>
                      ))}
                  </ol>
                </p>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
