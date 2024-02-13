import { useSelector } from "react-redux";

export function OrderTable({ children, total }) {
  const categories = useSelector(state => state.root.site.orderTable);

  return (
    <section className="cart">
      <h2 className="text-center">Корзина</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            {categories.map((item) => <th key={categories.indexOf(item)} scope="col">{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {children}
          <tr>
            <td colSpan="5" className="text-right">Общая стоимость</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
