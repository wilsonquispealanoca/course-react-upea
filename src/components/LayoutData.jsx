import "./styles/LayoutData.css";

function LayoutData({ title, children }) {
  return (
    <div className="LayoutData">
      <div className="LayoutData__container">
        <h1 className="LayoutData__container-title">{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default LayoutData;
