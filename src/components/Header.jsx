import React from "react";
import StatusBadge from "./StatusBadge.jsx";

export default function Header({ title }) {
  return (
    <header className="topbar">
      <div className="topbar__title"><span aria-hidden="true">✦</span><h1>{title}</h1></div>
      <StatusBadge label="실습 04" />
    </header>
  );
}
