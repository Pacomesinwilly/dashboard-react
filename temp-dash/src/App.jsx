import { useState, useEffect } from 'react'
import { db } from './firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement,
  LineElement, PointElement, Title, Tooltip, Legend, ArcElement
} from 'chart.js'
import { Bar, Line, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  LineElement, PointElement, Title, Tooltip, Legend, ArcElement
)

const COLORS = {
  orange: '#F97316',
  green: '#22C55E',
  purple: '#818CF8',
  blue: '#06B6D4',
  dark: '#111',
  darker: '#0A0A0A',
  border: '#1f1f1f',
  text: '#E8E8E8',
  muted: '#666',
}

const stats = [
  { label: 'Visiteurs', value: '1,284', change: '+12%', color: COLORS.orange },
  { label: 'Projets actifs', value: '6', change: '+2', color: COLORS.green },
  { label: 'Commits GitHub', value: '48', change: '+8', color: COLORS.purple },
  { label: 'Compétences', value: '15+', change: 'skills', color: COLORS.blue },
]

const barData = {
  labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
  datasets: [{
    label: 'Visites',
    data: [120, 190, 300, 250, 420, 380],
    backgroundColor: '#F97316aa',
    borderColor: '#F97316',
    borderWidth: 1,
    borderRadius: 6,
  }]
}

const lineData = {
  labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
  datasets: [{
    label: 'Commits',
    data: [8, 15, 12, 20],
    borderColor: '#22C55E',
    backgroundColor: '#22C55E22',
    fill: true,
    tension: 0.4,
  }]
}

const donutData = {
  labels: ['Web', 'Réseaux', 'DevOps', 'Design'],
  datasets: [{
    data: [40, 25, 20, 15],
    backgroundColor: ['#F97316', '#22C55E', '#818CF8', '#06B6D4'],
    borderWidth: 0,
  }]
}

const chartOptions = {
  responsive: true,
  plugins: { legend: { labels: { color: '#888' } } },
  scales: {
    x: { ticks: { color: '#666' }, grid: { color: '#1f1f1f' } },
    y: { ticks: { color: '#666' }, grid: { color: '#1f1f1f' } },
  }
}

const donutOptions = {
  responsive: true,
  plugins: { legend: { labels: { color: '#888' } } },
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: COLORS.darker, color: COLORS.text, fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: COLORS.orange, marginBottom: '4px' }}>
          Dashboard — Pacôme SINWILLY
        </h1>
        <p style={{ color: COLORS.muted, fontSize: '0.85rem' }}>Vue d'ensemble de mon activité</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {stats.map(s => (
          <div key={s.label} style={{
            background: COLORS.dark, border: `1px solid ${COLORS.border}`,
            borderRadius: '12px', padding: '1.25rem',
            borderLeft: `3px solid ${s.color}`,
          }}>
            <p style={{ color: COLORS.muted, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{s.label}</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 700, color: COLORS.text, marginBottom: '4px' }}>{s.value}</p>
            <p style={{ fontSize: '0.75rem', color: s.color }}>{s.change}</p>
          </div>
        ))}
      </div>

      {/* Graphiques */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ background: COLORS.dark, border: `1px solid ${COLORS.border}`, borderRadius: '12px', padding: '1.5rem' }}>
          <p style={{ color: COLORS.muted, fontSize: '0.8rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Visites mensuelles</p>
          <Bar data={barData} options={chartOptions} />
        </div>
        <div style={{ background: COLORS.dark, border: `1px solid ${COLORS.border}`, borderRadius: '12px', padding: '1.5rem' }}>
          <p style={{ color: COLORS.muted, fontSize: '0.8rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Compétences</p>
          <Doughnut data={donutData} options={donutOptions} />
        </div>
      </div>

      <div style={{ background: COLORS.dark, border: `1px solid ${COLORS.border}`, borderRadius: '12px', padding: '1.5rem' }}>
        <p style={{ color: COLORS.muted, fontSize: '0.8rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Commits GitHub (par semaine)</p>
        <Line data={lineData} options={chartOptions} />
      </div>

    </div>
  )
}