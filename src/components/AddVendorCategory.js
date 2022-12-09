import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AddVendorCategory() {
  const params = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [vendorPassesPerSlot, setVendorPassesPerSlot] = useState("");
  const [ammenities, setAmmenities] = useState("");
  const [cost, setCost] = useState("");
  const [number_of_slots, setNumber_of_slots] = useState("");

  const vendorCategoris = [
    "Main Bar",
    " Cocktail Bar",
    " Food",
    "Soft Drinks",
    "  Hot Beverage",
    "Sheesha",
    "  Vape Pens",
    " Jaba Juice ",
    " Hangover Patches",
    "Activation Space",
    "Gaming Stations",
    " Tattoo Stations",
    " Photobooth",
    " Fashion, Clothing & Apparel",
    " Health,Beauty & Cosmetic",
    " Arts & Crafts",
    "  Home & Office Decor",
    "Body Art",
  ];

  const addVendorCategory = (e) => {
    e.preventDefault();
    fetch("/api/v1/vendor_categories", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
        number_of_slots: number_of_slots,
        cost_per_slot: cost,
        vendor_passes_per_slot: vendorPassesPerSlot,
        amenities_provided: ammenities,
        event_id: Number(params.id),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setTimeout(() => {
      navigate(`/events/${params.id}`);
    }, [2000]);
  };

  return (
    <div className="container d-flex justify-content-center flex-column">
      <form onSubmit={addVendorCategory}>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <label>Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              {vendorCategoris.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <label>Cost:</label>
            <input
              type="number"
              value={cost}
              className="form-control"
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <label>Number of Slots</label>
            <input
                type="number"
              value={number_of_slots}
              onChange={(e) => setNumber_of_slots(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <label>Vendor Passes Per Slot</label>
            <input
              type="number"
              value={vendorPassesPerSlot}
              className="form-control"
              onChange={(e) => setVendorPassesPerSlot(e.target.value)}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <label>Ammenities</label>
            <input
              type="text"
              value={ammenities}
              className="form-control"
              onChange={(e) => setAmmenities(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center my-3">
          <button type="submit" className="btn btn-primary">
            Add Vendor Category
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddVendorCategory;
