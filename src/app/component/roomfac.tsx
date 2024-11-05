import { SetStateAction, useState } from "react";

function Roomfac() {
  const [facilities, setFacilities] = useState([
    { id: 1101, name: "Ac" },
        { id: 1102, name: "Wifi" },
        { id: 1103, name: "Tv" },
        { id: 1104, name: "Kamar mandi" },
        { id: 1105, name: "Kulkas" },
  ]);

  const [newFacilityName, setNewFacilityName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editFacilityName, setEditFacilityName] = useState("");

  // Fungsi untuk menambah fasilitas baru
  const handleAddFacility = () => {
    if (newFacilityName.trim()) {
      const newFacility = {
        id: facilities.length + 1101, // Penomoran sederhana
        name: newFacilityName,
      };
      setFacilities([...facilities, newFacility]);
      setNewFacilityName(""); // Reset input setelah fasilitas ditambahkan
    }
  };

  // Fungsi untuk mengedit nama fasilitas
  const handleEdit = (id: number | SetStateAction<null>, name: SetStateAction<string>) => {
    setEditingId(id);
    setEditFacilityName(name);
  };

  const handleSaveEdit = (id: number) => {
    setFacilities(facilities.map(facility =>
      facility.id === id ? { ...facility, name: editFacilityName } : facility
    ));
    setEditingId(null);
    setEditFacilityName("");
  };

  // Fungsi untuk menghapus fasilitas
  const handleDelete = (id: number) => {
    setFacilities(facilities.filter(facility => facility.id !== id));
  };

  return (
    <div className="p-6 bg-white font-sans rounded-lg">
      <div className="flex justify-between items-center p-6 bg-white ">
        <h1 className="text-2xl font-semibold">Room Facilities List</h1>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newFacilityName}
            onChange={(e) => setNewFacilityName(e.target.value)}
            placeholder="New Facility Name"
            className="border border-gray-300 rounded-md p-2 text-sm"
          />
          <button
            className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 text-sm"
            onClick={handleAddFacility}
          >
            Add Facilities
          </button>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="flex-1 overflow-auto p-6">
        <div className=" mx-auto bg-white p-2 rounded-lg ">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-black bold font-medium text-sm border-b">Facilities Id</th>
                  <th className="px-6 py-3 text-left text-black bold font-medium text-sm border-b">Facilities Name</th>
                  <th className="px-6 py-3 text-left text-black bold font-medium text-sm border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {facilities.map((facility) => (
                  <tr key={facility.id} className="bg-white">
                    <td className="px-4 py-2 border-b text-sm text-gray-700">{facility.id}</td>
                    <td className="px-4 py-2 border-b text-sm text-gray-700">
                      {editingId === facility.id ? (
                        <input
                          type="text"
                          value={editFacilityName}
                          onChange={(e) => setEditFacilityName(e.target.value)}
                          className="border border-gray-300 rounded-md p-1 text-sm"
                        />
                      ) : (
                        facility.name
                      )}
                    </td>
                    <td className="px-4 py-2 border-b text-sm text-gray-700 flex space-x-2">
                      {editingId === facility.id ? (
                        <button
                          className="text-green-600 hover:text-green-800"
                          onClick={() => handleSaveEdit(facility.id)}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() => handleEdit(facility.id, facility.name)}
                        >
                          Edit
                        </button>
                      )}
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(facility.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Roomfac