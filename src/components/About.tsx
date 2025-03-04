'use client'
import { useState, ChangeEvent } from "react";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

// Define the type for the African countries list
interface Country {
  code: string;
  name: string;
}

const africanCountries: Country[] = [
  { code: "DZ", name: "Algeria" },
  { code: "AO", name: "Angola" },
  { code: "BJ", name: "Benin" },
  { code: "BW", name: "Botswana" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "CM", name: "Cameroon" },
  { code: "CV", name: "Cape Verde" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo (Brazzaville)" },
  { code: "CD", name: "Congo (Kinshasa)" },
  { code: "DJ", name: "Djibouti" },
  { code: "EG", name: "Egypt" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "SZ", name: "Eswatini" },
  { code: "ET", name: "Ethiopia" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GH", name: "Ghana" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "KE", name: "Kenya" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "ML", name: "Mali" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "NA", name: "Namibia" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "RW", name: "Rwanda" },
  { code: "ST", name: "Sao Tome and Principe" },
  { code: "SN", name: "Senegal" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SO", name: "Somalia" },
  { code: "ZA", name: "South Africa" },
  { code: "SS", name: "South Sudan" },
  { code: "SD", name: "Sudan" },
  { code: "TZ", name: "Tanzania" },
  { code: "TG", name: "Togo" },
  { code: "TN", name: "Tunisia" },
  { code: "UG", name: "Uganda" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" },
];

function About() {
  // Define the state with type 'string' for selectedCountry
  const [selectedCountry, setSelectedCountry] = useState<string>("ET");

  // Handle the change event for the select element
  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="bg-[#022] text-white h-96 ">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex p-4 justify-between">
          <div className="flex">
            <h1 className="text-2xl font-bold">Afrihot</h1>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="w-64 p-2 px-4">
          <select
            id="african-countries"
            className="block w-full mt-2 px-8 py-2 bg-[#022] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            {africanCountries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-4 p-4">
          <div className="flex flex-col gap-3">
            <a href="#">Company</a>
            <a href="#">Jobs</a>
            <a href="#">Affiliate</a>
            <a href="#">Jobs</a>
            <a href="#">AfroHot Business Studio</a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#">Privacy & Cookies</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Partner Dispute</a>
            <a href="#">Legal Information</a>
            <a href="#">DSA Information</a>
          </div>

          <div className="col-span-2">
            <h1 className="text-2xl">
              Get exclusive inspiration for your next stay – subscribe to our newsletter.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
