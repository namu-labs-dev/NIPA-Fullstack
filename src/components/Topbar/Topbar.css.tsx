import styled from "@emotion/styled";

export const TopHeader = styled.div`
  .navigation{
    width: 375px;
    text-align: center;
    background-color: #fff;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding:4px;
    img{
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    h1{
        font-size:20px;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 1px;
    }
  }
  .navigation-second{
    width: 375px;
    text-align: center;
    background-color: #fff;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:4px;
    margin-top: 20px;
    h1{
        font-size:20px;
        margin: 0;
        font-family: 'Roboto', sans-serif;   
        letter-spacing: 1px;
    }
    button{
        color: #1890FF;
        background: transparent;
        border: 0;
        font-size: 16px;
        font-weight: 500;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
  }
`;
