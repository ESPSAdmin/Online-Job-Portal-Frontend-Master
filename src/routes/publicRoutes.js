import { JobDetailPage } from "../JobComponent";
import { AboutUs, ContactUs, HomePage, Home } from "../PageComponent";

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
      path : '/home',
      element : <HomePage/>
    },
    {
      path : '/job/:jobId/detail',
      element : <JobDetailPage/>
    },
    {
      path : '/home',
      element : <Home/>
    },
];

export {contentRoutes}