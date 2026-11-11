function Sidebar({ menus, selected, onSelect }) {
  return (
    <nav className="w-48 shrink-0 border-r border-gray-200 p-4">
      <ul className="flex flex-col gap-1 text-left">
        {menus.map((menu) => (
          <li key={menu.id}>
            <button
              onClick={() => onSelect(menu.id)}
              className={`w-full px-3 py-2 rounded text-left cursor-pointer ${
                selected === menu.id
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {menu.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
