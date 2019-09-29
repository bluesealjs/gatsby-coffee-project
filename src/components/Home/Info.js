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
              <p className="lead text-muted mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus libero enim natus voluptates veritatis consectetur, id
                quisquam quaerat! Magnam, nam consectetur aut atque molestiae
                velit veritatis quibusdam perferendis cum suscipit accusantium
                quas sequi, iure praesentium maiores earum. Vitae sequi optio
                quam enim in quisquam sed, ad repellendus. Veritatis, quibusdam
                perferendis?
              </p>
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
