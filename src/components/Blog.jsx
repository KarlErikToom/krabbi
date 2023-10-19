import React from "react";

function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="row">
          <h1 className="header">Our Blog</h1>
          <div className="blog__wrapper">
            <div className="blog">
              <h2 className="blog__title">Blog title</h2>
              <p className="blog__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                illum explicabo enim a nulla deserunt quas itaque, qui
                temporibus omnis voluptates! Ipsam nemo rem minima.
              </p>
              <a className="blog__link" href="">Click here to learn more</a>
            </div>
            <div className="blog">
              <h2 className="blog__title">Blog title</h2>
              <p className="blog__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                illum explicabo enim a nulla deserunt quas itaque, qui
                temporibus omnis voluptates! Ipsam nemo rem minima.
              </p>
              <a className="blog__link" href="">Click here to learn more</a>
            </div>
            <div className="blog">
              <h2 className="blog__title">Blog title</h2>
              <p className="blog__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                illum explicabo enim a nulla deserunt quas itaque, qui
                temporibus omnis voluptates! Ipsam nemo rem minima.
              </p>
              <a className="blog__link" href="">Click here to learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
