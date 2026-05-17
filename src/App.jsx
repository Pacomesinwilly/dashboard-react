import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Bar, Line, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const stats = [
  { label: 'Visiteurs', value: '1,284', change: '+12%', color: '#F97316' },
  { label: 'Projets actifs', value: '6', change: '+2 ce mois', color: '#22C55E' },
  { label: 'Commits GitHub', value: '48', change: '+8 cette semaine', color: '#818CF8' },
  { label: 'Competences', value: '15+', change: 'skills maitrisees', color: '#06B6D4' },
]

const barData = {
  labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Visites',
      data: [120, 190, 300, 250, 420, 380],
      backgroundColor: '#F9731688',
      borderColor: '#F97316',
      borderWidth: 1,
      borderRadius: 6,
    },
  ],
}

const lineData = {
  labels: ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4'],
  datasets: [
    {
      label: 'Commits',
      data: [8, 15, 12, 20],
      borderColor: '#22C55E',
      backgroundColor: '#22C55E22',
      fill: true,
      tension: 0.4,
    },
  ],
}

const donutData = {
  labels: ['Web', 'Reseaux', 'DevOps', 'Design'],
  datasets: [
    {
      data: [40, 25, 20, 15],
      backgroundColor: ['#F97316', '#22C55E', '#818CF8', '#06B6D4'],
      borderWidth: 0,
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { labels: { color: '#888' } },
  },
  scales: {
    x: { ticks: { color: '#666' }, grid: { color: '#1f1f1f' } },
    y: { ticks: { color: '#666' }, grid: { color: '#1f1f1f' } },
  },
}

const donutOptions = {
  responsive: true,
  plugins: {
    legend: { labels: { color: '#888' } },
  },
}

const projects = [
  { name: 'Portfolio React', status: 'En cours', progress: 85, color: '#F97316' },
  { name: 'Network Monitor', status: 'En cours', progress: 60, color: '#22C55E' },
  { name: 'E-commerce Laravel', status: 'En cours', progress: 70, color: '#EF4444' },
  { name: 'API Node.js', status: 'En cours', progress: 65, color: '#D4A843' },
  { name: 'Dashboard Firebase', status: 'En cours', progress: 50, color: '#818CF8' },
  { name: 'Automation Reseau', status: 'En cours', progress: 75, color: '#06B6D4' },
]

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0A',
      color: '#E8E8E8',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem',
    }}>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '2rem', borderBottom: '1px solid #1f1f1f', paddingBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F97316', marginBottom: '4px' }}>
            Dashboard — Pacome SINWILLY
          </h1>
          <p style={{ color: '#555', fontSize: '0.85rem' }}>
            Vue d ensemble de mon activite de developpeur
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {stats.map(function(s) {
            return (
              <div key={s.label} style={{
                background: '#111',
                border: '1px solid #1f1f1f',
                borderRadius: '12px',
                padding: '1.25rem',
                borderLeft: '3px solid ' + s.color,
              }}>
                <p style={{ color: '#555', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  {s.label}
                </p>
                <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#E8E8E8', marginBottom: '4px' }}>
                  {s.value}
                </p>
                <p style={{ fontSize: '0.75rem', color: s.color }}>
                  {s.change}
                </p>
              </div>
            )
          })}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '1rem',
          marginBottom: '1rem',
        }}>
          <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '1.5rem' }}>
            <p style={{ color: '#555', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Visites mensuelles
            </p>
            <Bar data={barData} options={chartOptions} />
          </div>
          <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '1.5rem' }}>
            <p style={{ color: '#555', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Repartition competences
            </p>
            <Doughnut data={donutData} options={donutOptions} />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
        }}>
          <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '1.5rem' }}>
            <p style={{ color: '#555', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Commits GitHub par semaine
            </p>
            <Line data={lineData} options={chartOptions} />
          </div>

          <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '1.5rem' }}>
            <p style={{ color: '#555', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
              Avancement projets
            </p>
            {projects.map(function(p) {
              return (
                <div key={p.name} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#888', fontSize: '0.8rem' }}>{p.name}</span>
                    <span style={{ color: p.color, fontSize: '0.75rem' }}>{p.progress}%</span>
                  </div>
                  <div style={{ background: '#1a1a1a', borderRadius: '4px', height: '4px' }}>
                    <div style={{
                      width: p.progress + '%',
                      height: '4px',
                      borderRadius: '4px',
                      background: p.color,
                      transition: 'width 0.8s ease',
                    }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
