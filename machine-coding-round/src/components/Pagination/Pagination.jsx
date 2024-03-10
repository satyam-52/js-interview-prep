import React, { useCallback, useEffect, useState } from 'react'
import useWindowConfirm from '../../hooks/useWindowConfirm/useWindowConfirm';

export default function Pagination() {
  const [page, setPage] = useState(1);
  const [productsData, setProductsData] = useState(null);
  const {isConfirmed} = useWindowConfirm();

  const fetchProducts = useCallback(async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${10*(page-1)}`);
      if (res?.ok) {
        const formattedRes = await res.json();
        setProductsData(formattedRes);
      } else {
        throw Error("Response not ok");
      }
    } catch (err) {
      throw Error(err);
    }
  }, [page]);

  const handlePageChange = useCallback((e) => {
    if(e.target.classList.contains("pagination--btn")) {
      if(e.target.id === "lt") {
        if(page > 1)
          setPage(prevPage => prevPage - 1);
      } else if (e.target.id === "gt") {
        if(page < productsData.total / productsData.limit)
          setPage(prevPage => prevPage + 1);
      } else {
        setPage(+e.target.id);
      }
    }
  },[page, productsData])

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, page])

  const handleAlert = async () => {
    const confirmed = await isConfirmed("Are you able to see all products?");
    if(confirmed) alert("Yes!!")
    else alert("No!!")
  }

  return productsData?.products?.length ? (
    <div className='pagination--wrapper'>
      <h2>PRODUCTS: <button onClick={handleAlert}>(Alert)</button></h2>
      <div className="products">
        {productsData.products.map(product => (
          <div className="product--card" key={product.id}>
            <img className='product--img' src={product.thumbnail} alt={product.title} />
            <div className="product title">{product.title}</div>
          </div>
        ))}
      </div>
      <div className="pagination--buttons" onClick={handlePageChange}>
        <button className={`pagination--btn`} disabled={page === 1} id="lt">&lt;</button>
        {productsData.products.length &&
          Array(productsData.total / productsData.limit)
            .fill(undefined)
            .map((_, idx) => (
              <button
                className={`pagination--btn ${page === idx + 1 ? "active" : ""}`}
                id={idx+1}
                key={`pagination-btn-${idx}`}
              >
                {idx + 1}
              </button>
            ))}
        <button className="pagination--btn" disabled={page === productsData.total / productsData.limit} id="gt">&gt;</button>
      </div>
    </div>
  ) : null
}
