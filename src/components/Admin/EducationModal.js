import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEducation, updateEducation } from "../../actions/educationAction";

const EducationModal = ({ id, header, edu, submitValue, colorButton }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === "editEducation") {
      setValue("title", edu.title);
      setValue("school", edu.school);
      setValue("city", edu.city);
      setValue("startDate", "24/03/2020");
      setValue("endDate", edu.endDate);
    }
  }, [edu, id, setValue]);

  const onClick = (data) => {
    if (id === "editEducation") {
      dispatch(updateEducation(edu._id, data));
    } else {
      dispatch(addEducation(data));
    }
    reset();
  };
  return (
    <div>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {header}
              </h5>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="row">
                  <div className="col-md-12 mb-md-0 mb-5 px-md-5">
                    <form>
                      <div className="row py-md-2">
                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <label htmlFor="title" className="">
                              Title
                            </label>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              className="form-control shadow-none"
                              {...register("title")}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <label htmlFor="school" className="">
                              School
                            </label>
                            <input
                              type="text"
                              id="school"
                              name="school"
                              className="form-control shadow-none"
                              {...register("school")}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <label htmlFor="city" className="">
                              City
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              className="form-control shadow-none"
                              {...register("city")}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="md-form mb-0">
                            <label htmlFor="school" className="">
                              Start Date
                            </label>
                            <input
                              className="form-control shadow-none"
                              type="date"
                              id="example-date-input"
                              {...register("startDate")}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="md-form mb-0">
                            <label htmlFor="school" className="">
                              End Date
                            </label>
                            <input
                              className="form-control shadow-none"
                              type="date"
                              id="example-date-input"
                              {...register("endDate")}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary shadow-none"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className={`btn btn-${colorButton} shadow-none`}
                data-bs-dismiss="modal"
                onClick={handleSubmit(onClick)}
              >
                {submitValue}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationModal;
