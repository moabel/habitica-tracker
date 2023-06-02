export var OK = (id: any) => (
  <td className="daily-cell success" key={"chave" + id}>
    <div className="center-wrapper">
      <div className="daily-cell">✓</div>
    </div>
  </td>
);
export var FAIL = (id: any) => (
  <td className="daily-cell fail" key={"chave" + id}>
    <div className="center-wrapper">
      <span className="symbol">✖</span>
    </div>
  </td>
);
export const EMPTY = (id: any) => (
  <td className="daily-cell pass" key={"chave" + id}>
    <div className="daily-cell">&nbsp;</div>
  </td>
);
