export default function Button({ children, Onclick }) {
  return (
    <>
      <button onClick={Onclick}>{children}</button>

      <style jsx>{`
        button > :global(svg) {
          margin-right: 8px;
        }
        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  )
}
