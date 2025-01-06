export default function Spinner() {
  return (
    <div className="center-flex h-screen">
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem",color:'#713f12' }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
