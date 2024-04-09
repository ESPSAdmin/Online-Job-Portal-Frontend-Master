import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddCategoryForm from "./AddCategoryForm";

const ViewAllCategories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");

  let navigate = useNavigate();

  useEffect(() => {
    const getAllCategory = async () => {
      const allCategories = await retrieveAllCategory();
      if (allCategories) {
        setAllCategories(allCategories.categories);
      }
    };

    getAllCategory();
  }, []);

  const retrieveAllCategory = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/job/category/fetch/all"
    );
    console.log(response.data);
    return response.data;
  };

  const deleteCategory = (categoryId, e) => {
    fetch(
      "http://localhost:8080/api/job/category/delete?categoryId=" + categoryId,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + admin_jwtToken,
        },
      }
    )
      .then((result) => {
        result.json().then((res) => {
          if (res.success) {
            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
          } else if (!res.success) {
            toast.error(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload(true);
        }, 1000); // Redirect after 3 seconds
      });
  };

  const updateCategory = (category) => {
    navigate("/admin/job/category/update", { state: category });
  };

  return (
    <div className="container-fluid">
      <div className="container-sm">
        <AddCategoryForm />
      </div>
      <div  className="container-sm">
        <div className="row pt-3">
          <h6>See List</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead className="bg-secondary-subtle">
                <tr>
                  <th className="semi-bold">Category Id</th>
                  <th className="semi-bold">Category Name</th>
                  <th className="semi-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {allCategories.map((category) => {
                  return (
                    <tr>
                      <td className="semi-bold">
                        {category.id}
                      </td>
                      <td className="semi-bold">
                        {category.name}
                      </td>
                      <td className="d-flex gap-2">
                        <Link
                          onClick={() => updateCategory(category)}
                          className="nav-link text-primary"
                        >
                          Update
                        </Link>

                        <Link
                          onClick={() => deleteCategory(category.id)}
                          className="nav-link text-primary"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllCategories;
