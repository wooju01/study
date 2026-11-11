const colors = {
  blue: 'bg-blue-500 hover:bg-blue-600',
  red: 'bg-red-500 hover:bg-red-600',
  green: 'bg-green-500 hover:bg-green-600',
}

function Button({ text, onClick, color = 'blue', className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`h-12 m-2 px-4 rounded text-white cursor-pointer ${colors[color]} ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
