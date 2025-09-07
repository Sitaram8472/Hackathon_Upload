import React, { useEffect, useState } from "react";

const FallingFlowers = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const flowerTypes = ["🌸", "🌼", "🌺", "💐", "🌻", "🥀"];
    const jhunriTypes = ["🎐", "✨", "🌟", "🎋"];

    const combinedArray = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 20 + 20,
      type: Math.random() < 0.7 ? "flower" : "jhunri",
      emoji:
        Math.random() < 0.7
          ? flowerTypes[Math.floor(Math.random() * flowerTypes.length)]
          : jhunriTypes[Math.floor(Math.random() * jhunriTypes.length)],
    }));
    setItems(combinedArray);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-40">
      {items.map((item) => (
        <div
          key={item.id}
          className={`absolute animate-fall ${
            item.type === "jhunri" ? "animate-sway" : ""
          }`}
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            fontSize: `${item.size}px`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};

export default FallingFlowers;
