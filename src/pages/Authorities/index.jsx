import { useState } from 'react';
import AuthoritiesForm from '../../components/AuthoritiesForm'; 

export default function AuthoritiesPage() {
  const [authorities, setAuthorities] = useState([]);

  const addAuthority = (newAuthority) => {
    const authorityExists = authorities.some(
      (auth) => auth.country === newAuthority.country && auth.role === newAuthority.role
    );

    if (authorityExists) {
      return false;
    }

    
    setAuthorities([...authorities, newAuthority]);
    return true; 
  };

  return (
    <div>
      <h2>Register Authority</h2>
      <AuthoritiesForm addAuthority={addAuthority} />
      <div>
        <h3>Registered Authorities:</h3>
        <ul>
          {authorities.map((authority, index) => (
            <li key={index}>
              {authority.name} - {authority.role} ({authority.country})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
