import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="col-10 col-sm-8 mx-auto text-center">
          <Title title="our story"></Title>
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <p className="lead text-muted mb-5">Serving coffee since 1990.</p>
              <Link to="/about">
                <button className="btn text-uppercase btn-yellow">
                  About page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
