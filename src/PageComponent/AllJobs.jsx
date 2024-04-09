import React from 'react'
import { useJobContext } from '../context'
import { JobCard } from '../JobComponent';

const AllJobs = () => {
const {allJobData, allJobCategories, jobType, jobExperience} = useJobContext();
console.log("this is datap", allJobData)

  return (
    <>
        <div className="container-fluid">
            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-3 border-end">
                        <h4 className='text-secondary'>Filter jobs</h4>
                        <div className="col border rounded p-2 mb-2">
                            <h6>Location</h6>
                            <form action="">
                                <div className="form-group mb-2">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-secondary ms-2" for="flexCheckDefault">
                                        Delhi/NCR
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="col border rounded p-2 mb-2">
                            <h6>Experience Level</h6>
                            <form action="">
                                {jobExperience.map((items) => (
                                    <div key={items.id} className="form-group mb-2">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-secondary ms-2" for="flexCheckDefault">
                                        {items}
                                    </label>
                                </div>
                                ))}
                            </form>
                        </div>
                        <div className="col border rounded p-2 mb-2">
                            <h6>Job Category</h6>
                            <form action="">
                                {
                                    allJobCategories.map((items, idx) => (
                                    <div key={idx} className="form-group mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label text-secondary ms-2" for="flexCheckDefault">
                                            {items.name}
                                        </label>
                                    </div>
                                    ))
                                }
                            </form>
                        </div>
                        <div className="col border rounded p-2 mb-2">
                            <h6>Job Type</h6>
                            <form action="">
                                {jobType.map((items) => (
                                    <div key={items.id} className="form-group mb-2">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label ms-2 text-secondary" for="flexCheckDefault">
                                        {items}
                                    </label>
                                     </div>
                                ))}
                            </form>
                        </div>
                        <div className="col border rounded p-2 mb-2">
                            <h6>Qualification</h6>
                            <form action="">
                                <div className="form-group mb-2">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label ms-2" for="flexCheckDefault">
                                        1 - 2 years
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 border-end">
                        <h4 className='text-secondary'>Apply for job</h4>
                        {allJobData.map((job) => (
                            <JobCard item={job} key={job.id} />
                        ))}
                    </div>
                    <div className="col-lg-3">
                        <h4 className='text-secondary'>Similar jobs</h4>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AllJobs