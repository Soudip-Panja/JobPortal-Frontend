import Header from "../components/Header";

export default function JobPost() {
  return (
    <>
      <Header />
      <main className="container">
        <h1 className="py-3">Post a Job</h1>

        <form>
          <label htmlFor="Job Title" className="form-label">
            Job Title:
          </label>
          <input type="text" id="Job Title" className="form-control" />
          <br />

          <label htmlFor="Comapny Name" className="form-label">
            Comapny Name:
          </label>
          <input type="text" id="Comapny Name" className="form-control" />
          <br />

          <label htmlFor="Location" className="form-label">
            Location:
          </label>
          <input type="text" id="Location" className="form-control" />
          <br />

          <label htmlFor="Salary" className="form-label">
            Salary:
          </label>
          <input type="text" id="Salary" className="form-control" />
          <br />

          <label htmlFor="Job Type" className="form-label">
            Job Type:
          </label>
          <select id="Job Type" className="form-control">
            <option value=""></option>
            <option value="Full-time (On-site)">Full-time (On-site)</option>
            <option value="Part-time (On-site)">Part-time (On-site)</option>
            <option value="Full-time (Remote)">Full-time (Remote)</option>
            <option value="Part-time (Remote)">Part-time (Remote)</option>
          </select><br />

          <label htmlFor="Job Description">Job Description:</label>
          <br />
          <textarea className="form-control" id="Job Description"></textarea>
          <br />

          <label htmlFor="Job Qualifications">Job Qualifications:</label>
          <br />
          <textarea className="form-control" id="Job Qualifications"></textarea>
          <br />

          <button className="btn btn-primary">Post Job</button>
        </form>
      </main>
    </>
  );
}
