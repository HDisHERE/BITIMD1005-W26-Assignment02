export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '3rem',
        maxWidth: '600px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          Portfolio HTML/CSS Files Ready! 📁
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: '#4b5563',
          marginBottom: '1.5rem',
          lineHeight: '1.7'
        }}>
          Your portfolio website has been exported as simple HTML and CSS files.
        </p>
        <div style={{
          background: '#f3f4f6',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '0.75rem',
            color: '#1f2937'
          }}>
            Download these 4 files from the /export/ folder:
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{ padding: '0.5rem 0', color: '#6b7280' }}>✓ index.html</li>
            <li style={{ padding: '0.5rem 0', color: '#6b7280' }}>✓ projects.html</li>
            <li style={{ padding: '0.5rem 0', color: '#6b7280' }}>✓ project-detail.html</li>
            <li style={{ padding: '0.5rem 0', color: '#6b7280' }}>✓ styles.css</li>
          </ul>
        </div>
        <p style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          lineHeight: '1.5'
        }}>
          Place all files in the same folder and open <strong>index.html</strong> in your browser. No server or build tools required!
        </p>
      </div>
    </div>
  );
}
