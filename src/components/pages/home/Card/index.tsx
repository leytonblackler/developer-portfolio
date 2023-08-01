import { FunctionComponent } from "react";

interface CardProps {
  title: string;
  colSpan: number;
}

const Card: FunctionComponent<CardProps> = ({ title, colSpan = 1 }) => (
  <div
    className="h-64 bg-sky-400 rounded-5xl py-6 px-8 COL-"
    style={{ gridColumn: `span ${colSpan} / span ${colSpan}` }}
  >
    <h2 className="text-white font-semibold text-3xl">{title}</h2>
  </div>
);

export default Card;
