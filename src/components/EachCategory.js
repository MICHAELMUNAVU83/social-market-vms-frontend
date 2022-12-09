import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EachCategory() {
  const params = useParams();

  const [vendorCategory, setVendorCategory] = useState({});
  useEffect(() => {
    fetch(
      `https://social-market-vms-backend.herokuapp.com/api/v1/vendor_categories/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVendorCategory(data);
      });
  }, [params.id]);

  const eachVendorCategory = (
    <div className="container d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{vendorCategory.category}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <span>Number of slots available: </span>
            {vendorCategory.number_of_slots}
          </h6>
          <p className="card-text">
            You will receive {vendorCategory.vendor_passes_per_slot} passes to
            the event at a cost of {vendorCategory.cost_per_slot} {""} . You
            will be provided with {vendorCategory.amenities_provided} {""} . to
            vend under the {vendorCategory.category} category
          </p>
          <Link
            to={`/add-reservation/${vendorCategory.id}`}
            className="btn btn-primary d-flex justify-content-center"
          >
            Reserve a slot
          </Link>
        </div>
      </div>
    </div>
  );

  return <div>{eachVendorCategory}</div>;
}

export default EachCategory;
