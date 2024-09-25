import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

function Sideshow() {
  return (
    <div className="w-full">
      <Slide
        autoplay={false}
        onChange={function noRefCheck(){}}
        onStartChange={function noRefCheck(){}}
      >
        <div className="each-slide-effect">
          <div
            className="bg-cover bg-center h-[500px]"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)',
            }}
          />
        </div>
        <div className="each-slide-effect">
          <div
            className="bg-cover bg-center h-[500px]"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80)',
            }}
          />
        </div>
        <div className="each-slide-effect">
          <div
            className="bg-cover bg-center h-[500px]"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)',
            }}
          />
        </div>
      </Slide>
    </div>
  );
}

export default Sideshow;
