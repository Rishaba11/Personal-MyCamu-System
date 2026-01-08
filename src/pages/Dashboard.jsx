import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <div style={{ padding: "20px", flex: 1 }}>
        <h1>Student Dashboard</h1>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <Card title="Attendance" value="85%" />
          <Card title="Fees Due" value="₹12,000" />
          <Card title="Exams" value="3 Upcoming" />
        </div>
      </div>
    </>
  );
}
