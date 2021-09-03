import React, { useState } from "react";

export const Form = () => {
  const [city, setCity] = useState<string>("");
  return (
    <>
      <form>
        <input
          type="text"
          name="city"
          placeholder="都市名"
          onChange={e => setCity(e.target.value)}
        />

        <button type="submit">Get Weather</button>
      </form>
    </>
  );
};
