import { useState } from 'react';
import { DataGrid } from './components/DataGrid';
import { sampleRows } from './sampleData';

/**
 * React demo entry point — the component in a realistic page context,
 * distinct from Storybook's isolated per-story canvas. This is the
 * deliverable-quality demo (unlike devPreview.tsx, which is a dev-only
 * scratch harness not meant to be shown to anyone).
 *
 * Density and loading/error toggles are wired up here so a reviewer can
 * see those states without needing Storybook's Controls panel.
 */
export function App() {
  const [density, setDensity] = useState<'compact' | 'comfortable' | 'standard'>('comfortable');
  const [showLoading, setShowLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--grid-color-surface)',
        fontFamily: 'var(--grid-font-body)',
        padding: '40px 24px',
      }}
    >
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <header style={{ marginBottom: 24 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 500,
              color: 'var(--grid-color-on-surface)',
            }}
          >
            Clients &amp; Accounts Table
          </h1>
          <p
            style={{
              margin: '4px 0 0',
              fontSize: 13,
              color: 'var(--grid-color-on-surface-variant)',
            }}
          >
            Data Grid component — R11971 design exercise. React demo, built from the same
            source shown in Storybook and specified in Figma.
          </p>
        </header>

        <div
          role="group"
          aria-label="Demo controls"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            alignItems: 'center',
            marginBottom: 16,
            fontSize: 13,
            color: 'var(--grid-color-on-surface-variant)',
          }}
        >
          <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            Density
            <select
              value={density}
              onChange={(e) => setDensity(e.target.value as typeof density)}
              style={{
                padding: '2px 4px',
                border: '1px solid var(--grid-color-outline)',
                borderRadius: 4,
                font: 'inherit',
                color: 'inherit',
                background: 'var(--grid-color-surface)',
              }}
            >
              <option value="compact">Compact</option>
              <option value="comfortable">Comfortable</option>
              <option value="standard">Standard</option>
            </select>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input type="checkbox" checked={showLoading} onChange={(e) => setShowLoading(e.target.checked)} />
            Loading state
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input type="checkbox" checked={showError} onChange={(e) => setShowError(e.target.checked)} />
            Error state
          </label>
        </div>

        <DataGrid
          rows={sampleRows}
          density={density}
          loading={showLoading}
          error={showError ? 'Could not load accounts. Check your connection and try again.' : null}
        />
      </div>
    </div>
  );
}
