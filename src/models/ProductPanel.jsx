export function ProductPanel({ className, title, children }) {
   return (
      <section className={className}>
         <h2 className="text-center">{title}</h2>
         {children}
      </section>
   )
}
