import React from 'react'

export default function Product({ plan, price, details }) {
  return (
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{ plan }</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">${ price }<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    {
                        details.map((detail, i) =>
                            <li key={ i }>{ detail }</li>
                        )
                    }
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-primary">More</button>
            </div>
            </div>
        </div>
  )
}
