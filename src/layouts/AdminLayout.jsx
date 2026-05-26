import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* SIDEBAR */}
      <aside style={{ width: "220px", background: "#111", color: "#fff", padding: "20px",  }}>
        <h3 className="mb-12">Admin</h3>

        <nav>
          <ul>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/projects">Projects</Link></li>
            <li><Link to="/admin/skills">Skills</Link></li>
            <li><Link to="/admin/messages">Messages</Link></li>
          </ul>
        </nav>
      </aside>

      {/* CONTENT */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>

    </div>
  );
}