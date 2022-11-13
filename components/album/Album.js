import React from "react";

const Album = () => {
  return (
    <>
      <ul class="album">
        <li class="item">
          <img src="https://picsum.photos/600/600/?random=1" />
          <div class="txt">
            <h3>title1</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </li>
        <li class="item">
          <img src="https://picsum.photos/600/600/?random=2" />
          <div class="txt">
            <h3>title2</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </li>
        <li class="item">
          <img src="https://picsum.photos/600/600/?random=3" />
          <div class="txt">
            <h3>title3</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </li>
        /
        <li class="item">
          <img src="https://picsum.photos/600/600/?random=14" />
          <div class="txt">
            <h3>title14</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Album;
