import { JobDetailPage } from "../JobComponent";
import { AboutUs, ContactUs, AllJobs } from "../PageComponent";
import { ForgotPassword } from "../popupModals";

const contentRoutes =[
    {
      path : "/aboutus",
      element : <AboutUs />   
    },
    {
      path : '/contactus',
      element : <ContactUs />
    },
    {
      path : '/job/:jobId/detail',
      element : <JobDetailPage/>
    },
    {
      path : '/jobs',
      element : <AllJobs/>
    },
];

export {contentRoutes}