export default function Card({ title, value }) {
  return (
    <div style={{
      background: "#f5f5f5",
      padding: "20px",
      borderRadius: "10px",
      width: "200px"
    }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
