import React, { useState, useEffect, useCallback } from "react";
import { FiSearch } from "react-icons/fi";
import debounce from "lodash/debounce";
import Button from "../../components/ui/button";
import { Link } from "react-router-dom";

const entrepreneurData = [
  {
    id: 1,
    name: "Sarah Chen",
    startupName: "TechVision AI",
    pitchSummary:
      "Revolutionizing enterprise AI solutions with cutting-edge machine learning algorithms.",
    profileImage: "/enterprenuer1.jpeg",
  },
  {
    id: 2,
    name: "Michael Stewart",
    startupName: "GreenEnergy Solutions",
    pitchSummary:
      "Sustainable energy solutions for residential and commercial applications.",
    profileImage: "/enterprenuer2.jpeg",
  },
  {
    id: 3,
    name: "Emma Watson",
    startupName: "HealthTech Pro",
    pitchSummary:
      "Digital health platform for remote patient monitoring and care.",
    profileImage: "/enterprenuer3.jpeg",
  },
];

const EntrepreneurCard = React.memo(({ entrepreneur }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg p-3 md:p-6 transition-all duration-300 hover:shadow-xl">
      <img
        className="aspect-square object-cover rounded-lg"
        src={entrepreneur.profileImage}
        alt={entrepreneur.name}
      />
      {/* Entrepreneur Details */}
      <div className="space-y-1">
        <h3 className="text-xl font-semibold mt-3">{entrepreneur.name}</h3>
        <p className="text-gray-600">
          <strong>Startup:</strong> {entrepreneur.startupName}
        </p>
        <p className="text-gray-600">{entrepreneur.pitchSummary}</p>
      </div>
      {/* View Profile Button */}
      <div className="mt-4 flex items-center justify-between gap-2">
        <Button
          onClick={() =>
            console.log(`Viewing profile for ${entrepreneur.name}`)
          }
          className="w-full cursor-pointer"
        >
          <Link to={"/dashboard/chat"}>Message Now</Link>
        </Button>
        <Button
          onClick={() =>
            console.log(`Viewing profile for ${entrepreneur.name}`)
          }
          className="w-full cursor-pointer"
        >
          <Link to={`/dashboard/guest-profile/${entrepreneur.name}`}>
            View Full Profile
          </Link>
        </Button>
      </div>
    </div>
  );
});

export default function InvestorIndex({ userData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEntrepreneurs, setFilteredEntrepreneurs] =
    useState(entrepreneurData);

  const debouncedSearch = useCallback(
    debounce((term) => {
      const filtered = entrepreneurData.filter(
        (entrepreneur) =>
          entrepreneur.name.toLowerCase().includes(term.toLowerCase()) ||
          entrepreneur.startupName.toLowerCase().includes(term.toLowerCase()) ||
          entrepreneur.pitchSummary.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredEntrepreneurs(filtered);
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  return (
    <div className="w-full md:w-[90vw] mx-auto min-h-screen p-2 md:p-8">
      <div className="">
        {/* Header and Search */}
        <div className="">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            View List of Entrepreneurs
          </h1>
          <div className="w-full relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search by name, startup, or pitch summary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 transition-all duration-300"
            />
          </div>
        </div>

        {/* Entrepreneur Cards */}
        {filteredEntrepreneurs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No entrepreneurs found matching your search criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEntrepreneurs.map((entrepreneur) => (
              <EntrepreneurCard
                key={entrepreneur.id}
                entrepreneur={entrepreneur}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
