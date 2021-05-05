import styled from 'styled-components';
import globalStyle from '../../assets/global-style';

export const SliderContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: auto;
    background: white;
    .before {
        position: absolute;
        top: 0;
        height: 60%;
        width: 100%;
        background: ${globalStyle["theme-color"]};
    }
    .slider-container {
        position: relative;
        width: 98%;
        height: 180px;
        overflow: hidden;
        margin: auto;
        border-radius: 6px;
        .slider-nav {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        }
        .swiper-pagination-bullet-active {
        background: ${globalStyle["theme-color"]};
        }
    }
`;