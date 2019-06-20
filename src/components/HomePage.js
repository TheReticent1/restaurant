import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import images from '../images/food1.png';
import { ModalContext } from '../contexts/ModalContext';

export default function Homepage() {
  return (
    <ModalContext.Consumer>
      {
        value => {
          const { handleModal } = value;
          return (
            <BannerWrapper>
              <img src={images} alt="" />
              <div className="title">
                <h1>Live Love Eat Healthy</h1>
                <Button variant="primary" size="sm" className="button" onClick={handleModal}>SignUp</Button>
              </div>
            </BannerWrapper>
          )
        }
      }
    </ModalContext.Consumer>
  )
}

const BannerWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    min-height:100vh;
    align-items:center;
    background:#000;
  img{
          width: 100%;
        height:100vh;
      }
  .title {
        padding: 2rem 2rem 2rem 2rem;
        font-size: 3rem;
        font-family:"Times New Roman";
        text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
        position:absolute;
        color:#f3f3f3;
        width:100%;
        background:rgba(0,0,0,0.3);
      }
  
@media only screen and (max-width: 600px) {
          img{
        height:60vh;
      }
  .title{
          font - size: 2rem;
      }
    }
    `;
