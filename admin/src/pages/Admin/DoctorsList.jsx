import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
  const { doctors, changeAvailability, aToken, getAllDoctors } =
    useContext(AdminContext);

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  const filteredDoctors = doctors.filter((doc) => {
    if (filter === "available") return doc.available;
    if (filter === "unavailable") return !doc.available;
    return true;
  });

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-lg font-semibold text-[#1F2937]">All Doctors</h1>
        <div className="flex space-x-2 bg-[#f3f4f6] p-1 rounded-full">
          {["all", "available", "unavailable"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
                filter === type
                  ? "bg-[#336ecc] text-white shadow"
                  : "text-[#374151] hover:bg-[#e5e7eb]"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-6 min-h-[400px]">
        {filteredDoctors.length === 0 ? (
          <div className="flex justify-center items-center h-full text-gray-500 italic">
            No doctors found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredDoctors.map((item, index) => (
              <div
                className="border border-[#C9D8FF] rounded-xl w-full overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-all duration-300"
                key={index}
              >
                <img
                  className="bg-[#EAEFFF] group-hover:bg-[#336ecc] transition-all duration-500 w-full h-36 object-cover"
                  src={item.image}
                  alt=""
                />
                <div className="p-4">
                  <p className="text-[#262626] text-lg font-medium">
                    {item.name}
                  </p>
                  <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <input
                      onChange={() => changeAvailability(item._id)}
                      type="checkbox"
                      checked={item.available}
                    />
                    <p>Available</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsList;
