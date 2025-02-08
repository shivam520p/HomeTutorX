import React, { useContext } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

export const AddressDetail = () => {
  const { selectedClass, setSelectedClass,submitQuary, setPopUp, setMode } = useContext(AdminContext);
  return (
    <>
      <div className="pt-4 h-[300px] overflow-y-auto">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="street"
            className="text-lg font-semibold text-gray-600"
          >
            Street:
          </label>
          <input
            type="text"
            name="street"
            onChange={(e) => {
              setSelectedClass({
                ...selectedClass,
                addressDetails: {
                  ...selectedClass.addressDetails,
                  street: e.target.value,
                },
              });
            }}
            placeholder="Enter your street name"
            className="bg-slate-100 px-3 py-3 border rounded-lg placeholder:text-lg outline-slate-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="city" className="text-lg font-semibold text-gray-600">
            City:
          </label>
          <input
            type="city"
            name="city"
            onChange={(e) => {
                setSelectedClass({
                  ...selectedClass,
                  addressDetails: {
                    ...selectedClass.addressDetails,
                    city: e.target.value
                  }
                })
              }}
            placeholder="Enter your city name"
            className="bg-slate-100 px-3 py-3 border rounded-lg placeholder:text-lg outline-slate-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="pinCode"
            className="text-lg font-semibold text-gray-600"
          >
            PinCode:
          </label>
          <input
            type="text"
            name="pinCode"
            onChange={(e) => {
                setSelectedClass({
                  ...selectedClass,
                  addressDetails: {
                    ...selectedClass.addressDetails,
                    pinCode: e.target.value
                  }
                })
              }}
            placeholder="Enter your mobile number"
            className="bg-slate-100 px-3 py-3 border rounded-lg placeholder:text-lg outline-slate-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="state"
            className="text-lg font-semibold text-gray-600"
          >
            State :
          </label>
          <select
            name="state"
            className="bg-slate-100 px-3 py-3 border rounded-lg placeholder:text-lg outline-slate-500"
            onChange={(e) => {
                setSelectedClass({
                  ...selectedClass,
                  addressDetails: {
                    ...selectedClass.addressDetails,
                    state: e.target.value
                  }
                })
              }}
          >
            <option value="" disabled selected>
              Select a State
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">
              Dadra and Nagar Haveli and Daman and Diu
            </option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Delhi">Delhi</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="mobile"
            className="text-lg font-semibold text-gray-600"
          >
            Country:
          </label>
          <select
            name="country"
            className="bg-slate-100 px-3 py-3 border rounded-lg placeholder:text-lg outline-slate-500"
            onChange={(e) => {
                setSelectedClass({
                  ...selectedClass,
                  addressDetails: {
                    ...selectedClass.addressDetails,
                    country: e.target.value
                  }
                })
              }}
          >
            <option value="" disabled selected>
              Select a Country
            </option>
            <option value="United States<">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
            <option value="Italy">Italy</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-6 pt-5">
        <button
          onClick={(e)=>{
            submitQuary(e);
            setPopUp(false);
            setMode("");
          }}
          type="button"
          className="rounded-md bg-blue-500 px-10 py-2 text-sm font-semibold text-white hover:shadow-md"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AddressDetail;
