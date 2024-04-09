import { Link } from "react-router-dom";
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

const JobCard = (job) => {
  return (
    <>
      <div className="col-lg border mb-2 rounded p-2 px-3">
        <div className="col d-flex justify-content-between align-items-center gap-3">
          <div className="col">
            <Link to={`/job/${job.item.id}/detail`} className="text-decoration-none"><h5 className="m-0">{job.item.title}</h5></Link>
            <p className="text-sm"><span className="fw-bold">Salary range :</span> <span className="text-uppercase">{job.item.salaryRange}</span></p>
          </div>
          <img src={"http://localhost:8080/api/job/" + job.item.companyLogo} className="navbar-brand" width={60} />
        </div>
        <div className="d-flex align-itmes-center gap-2">
          <span><BiSolidShoppingBags /></span>
          <span>{job.item.companyName}</span>
        </div>
        <div className="d-flex align-itmes-center gap-2">
          <span><IoLocationSharp /></span>
          <span>{job.item.address.city}</span>
        </div>
        <div className="">
          <p className="text-secondary">{job.item.experienceLevel} experice requires</p>
        </div>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to={`/job/${job.item.id}/detail`} className="btn btn-primary rounded-pill">Apply now</Link>
        </div>
      </div>
    </>
  );
};

export default JobCard;
