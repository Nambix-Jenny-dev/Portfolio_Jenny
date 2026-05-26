export default function ProjectTable() {
  return (
    <div>
      <h3>Liste des projets</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Portfolio React</td>
            <td>
              <button>Modifier</button>
              <button>Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}