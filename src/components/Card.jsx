import React from 'react';
import styled from 'styled-components';

const Card = ({ title, feature }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="first-content">
          <span>{title}</span>
        </div>
        <div className="second-content">
          <span>{feature}</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 20rem;
    height: 25rem;
    background: #D3D5FD;
    transition: all 0.4s;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 21rem;
  }

  .card:hover {
    border-radius: 15px;
    cursor: pointer;
    transform: scale(1.05);
    background: #0B032D;
  }

  .first-content,
  .second-content {
    transition: all 0.4s;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .first-content {
    opacity: 1;
    color: #0B032D;
  }

  .card:hover .first-content {
    height: 0;
    opacity: 0;
  }

  .second-content {
    height: 0;
    opacity: 0;
    font-size: 0;
    transform: rotate(90deg) scale(-1);
  }

  .card:hover .second-content {
    opacity: 1;
    height: 100%;
    font-size: 1.2rem;
    transform: rotate(0deg);
  }
`;

export default Card;
