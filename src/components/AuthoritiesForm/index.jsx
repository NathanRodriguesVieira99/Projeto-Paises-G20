import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css'

const G20_COUNTRIES = [
  { name: "Argentina", tld: ".ar" },
  { name: "Australia", tld: ".au" },
  { name: "Brazil", tld: ".br" },
  { name: "Canada", tld: ".ca" },
  { name: "China", tld: ".cn" },
  { name: "France", tld: ".fr" },
  { name: "Germany", tld: ".de" },
  { name: "India", tld: ".in" },
  { name: "Indonesia", tld: ".id" },
  { name: "Italy", tld: ".it" },
  { name: "Japan", tld: ".jp" },
  { name: "Mexico", tld: ".mx" },
  { name: "Russia", tld: ".ru" },
  { name: "Saudi Arabia", tld: ".sa" },
  { name: "South Africa", tld: ".za" },
  { name: "South Korea", tld: ".kr" },
  { name: "Turkey", tld: ".tr" },
  { name: "United Kingdom", tld: ".uk" },
  { name: "United States", tld: ".us" },
  { name: "European Union", tld: ".eu" },
];

const roles = ["Head of State", "Finance Minister", "Central Bank President"];

const AuthoritiesForm = ({ addAuthority }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(""); 

    if (!name.trim().includes(" ")) {
      setError("Please enter a full name.");
      return;
    }

    const selectedCountry = G20_COUNTRIES.find((c) => c.name === country);

    if (selectedCountry && !email.endsWith(selectedCountry.tld)) {
      setError(`The email must end with ${selectedCountry.tld}`);
      return;
    }

    const authorityData = { name, country, role, email };

    if (typeof addAuthority === "function" && addAuthority(authorityData)) {
      alert("Authority successfully registered!");
      navigate(`/authorities/${country}`);
    } else {
      setError(`There is already an authority registered as "${role}" in ${country}.`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Authority Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Represented Country:</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="" disabled>Select a country</option>
          {G20_COUNTRIES.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Role/Position:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="" disabled>Select a role</option>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default AuthoritiesForm;
