import { useNavigate } from 'react-router-dom';

import './styles.css'

const AgendamentoForm = ({ autoridades, agendamentos, setAgendamentos }) => {
  const [autoridade, setAutoridade] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [conflito, setConflito] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const horaAgendada = new Date(`${data}T${hora}`);
    const horaLimiteAntes = new Date(horaAgendada.getTime() - 15 * 60000); // 15 minutos antes
    const horaLimiteDepois = new Date(horaAgendada.getTime() + 15 * 60000); // 15 minutos depois

    const existeConflito = agendamentos.some((agendamento) => {
      const horarioExistente = new Date(agendamento.dataHora);
      return horarioExistente >= horaLimiteAntes && horarioExistente <= horaLimiteDepois;
    });

    if (existeConflito) {
      setConflito(true);
      return;
    }

    const novaApresentacao = {
      autoridade,
      dataHora: horaAgendada.toISOString(),
    };

    setAgendamentos((prev) => [...prev, novaApresentacao]);
    navigate('/agendas');
  };

  return (
    <div className='odinAgenda'>
      <h2>Agendar Apresentação</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Autoridade</label>
          <select value={autoridade} onChange={(e) => setAutoridade(e.target.value)} required>
            <option value="">Selecione uma autoridade</option>
            {autoridades.map((item, index) => (
              <option key={index} value={`${item.pais}/${item.nome}/${item.cargo}`}>
                {item.pais} / {item.nome} / {item.cargo}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Data</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            min="2025-11-18"
            max="2025-11-19"
            required
          />
        </div>

        <div>
          <label>Hora</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </div>

        {conflito && <p style={{ color: 'red' }}>Conflito de horário! Tente outro horário.</p>}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default AgendamentoForm;
