export default function Sidebar() {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: "#111",
      color: "#fff",
      padding: "20px"
    }}>
      <h2>My Campus</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Dashboard</li>
        <li>Attendance</li>
        <li>Exams</li>
        <li>Fees</li>
        <li>Profile</li>
      </ul>
    </div>
  );
}
