function Button({ label, fn }) {
  return (
    <button
      className="bg-amber-400 px-4 py-2 rounded-md cursor-pointer hover:bg-amber-200 text-uppercase transition delay-150 hover:-translate-z-8"
      onClick={fn}
    >
      {label}
    </button>
  );
}

export default Button;
