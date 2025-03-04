'use client'
import { useState, useRef, useEffect } from "react";
import { cities, destinations } from "../lib/data";

export default function SearchList() {
  const [activeTab, setActiveTab] = useState("cities"); // Default is "Cities"
  const data = activeTab === "cities" ? cities : destinations;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    // Detect card width dynamically for responsiveness
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector("div");
      if (firstCard) {
        setCardWidth(firstCard.clientWidth + 16); // Add gap spacing
      }
    }
  }, [data]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && cardWidth) {
      const { scrollLeft } = scrollRef.current;
      const containerWidth = cardWidth * 3; // Show exactly 3 cards

      if (direction === "left") {
        scrollRef.current.scrollTo({ left: scrollLeft - containerWidth, behavior: "smooth" });
      } else {
        scrollRef.current.scrollTo({ left: scrollLeft + containerWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 my-12">
      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === "cities" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("cities")}
        >
          Cities
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "destinations" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("destinations")}
        >
          Destinations
        </button>
      </div>

      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10"
          onClick={() => scroll("left")}
        >
          ❮
        </button>

        <div 
          ref={scrollRef} 
          className="flex overflow-x-scroll scrollbar-hide space-x-4 scroll-smooth snap-x snap-mandatory"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {data.map((item) => (
            <div key={item.id} className="min-w-[300px] border rounded-lg shadow-lg flex-shrink-0 snap-start">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-t" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>{item.hotels} Hotels</p>
                <p className="text-gray-500">${item.avgPrice} Avg.</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10"
          onClick={() => scroll("right")}
        >
          ❯
        </button>
      </div>
    </div>
  );
}
