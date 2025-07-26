import "./GlassPage.css";
import type { GlassPageProps } from "../../Types/Types";

function GlassPage({ onClick, zIndex }: GlassPageProps) {
  return (
    <div className="glass" onClick={onClick} style={{ zIndex: zIndex }}>
      5
    </div>
  );
}
export default GlassPage;
