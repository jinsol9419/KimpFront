import styled from 'styled-components'
import React, { useState }  from 'react'
import Logo from './Logo';
import { NavLink } from "react-router-dom";
import { MenuOutlined, CloseOutlined, DownOutlined } from '@ant-design/icons';

function MenuBar() {

    const BREAK_POINT_MEDIUM = 768;

    const Menu = styled.header`
        postion: relative;
        top:0;
        z-index: 90;
        box-shadow: 0 0 4px #373737;
        width: 100%;

        background: #fff;
        display : flex;
        justify-content: space-between;
        align-items: center;
        nav{
            ul{
                display: inline-block;
                float: right;
                padding: 0;
                margin: 0;
                list-style: none;
                // background: #fff;
                z-index: 99;
                li{
                    float: left;
                    margin: 10px;  
                    &:hover{
                        div{
                            visibility: visible;
                            ul{
                                float: left;
                            }
                        }
                    }
                    a{
                        padding: 5px 20px;
                        text-align: center;
                        position: relative;
                        z-index: 1;
                        &::after {
                            position: absolute;
                            content: "";
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: #102A3E;
                            transform: scaleY(0);
                            transform-origin: right;
                            transition: transform 0.5s;
                            z-index: -1;
                          }
                        &:hover{
                            color: #fff;
                             .line{
                                transform: rotate(-90deg);
                                transition: transform .5s;
                            }
                            div{
                                display: block;
                            }
                        }
                        &:hover::after {
                            transform: scaleY(1);
                            transform-origin: left;
                          }
                    }
                    .active{
                        background: #102A3E;
                        color: #fff;
                        width: 100%
                    }
                }
            }
        }

        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            height:  95px;
            display : block;
            background: #fff;
            ul{
                flex-direction: column;
                align-items: flex-start;
                visibility: hidden;
                width: 100%;
                opacity: 0;
                height: 0vh;
                transition: all 0.3s;
                li{
                    width: 100%;
                    
                    text-align: center;
                    background: #EBEBEB;
                    &:hover{
                        div{
                            ul{
                                width: 100% !important;
                            }
                        }
                    }
                    div{
                        ul{
                            display: none;
                        }
                    }
                }
                
            }
            .mobile {
                ul{
                    visibility: visible;
                    opacity: 1;
                    height: 100%; 
                    li{
                        width: 100%;
                        z-index: 99;
                        margin: 0;
                        line-height: 50px;
                        &:hover{
                            div{
                                margin-top: 10px;
                                ul{
                                    display: block;
                                    li{
                                        background: #CECECE;
                                        color: #102A3E;
                                    }
                                }
                            }
                        }
                    }
            }
        
        }
    `
        const Icon = styled.div`
        display: none;
        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            position: absolute;
            display: block;
            text-align: right;
            font-size: 20px;
            top: 30px;
            right: 20px;
        }
    `

    const SubMenu = styled.div`
        cursor: pointer;
        visibility: hidden;
        position: absolute;
        background: #fff;
        width: 140px;
        
        ul{
            li{
                display: block;
                line-height: 30px;
                // &:hover{
                //     .line{
                //         transform: rotate(-90deg);
                //         transition: transform .5s;
                //     }
                //     div{
                //         display: block;
                //     }
                // }
            }
        }
        @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
            position: static;
            width: 100%;
        }
    `

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <Menu>
                <Logo/>
                <nav className={click ? "mobile" : "nav-menu"}>
                    <ul>
                    <li><NavLink to="/list" onClick={closeMobileMenu}>
                            Sell List
                            &nbsp;<DownOutlined className="line" />
                        </NavLink>
                        <SubMenu>
                            <ul>
                                <li><NavLink to="/list/open" onClick={closeMobileMenu}>공개정보</NavLink></li>
                                <li><NavLink to="/list/secret" onClick={closeMobileMenu}>비공개정보</NavLink></li>
                            </ul>
                        </SubMenu>
                        </li>
                    <li><NavLink to="/buy" onClick={closeMobileMenu}>Buy List</NavLink></li> 
                    <li><NavLink to="/aboutUs" onClick={closeMobileMenu}>About Us</NavLink></li>
                    <li><NavLink to="/logIn" onClick={closeMobileMenu}>Log In</NavLink></li>
                    <li><NavLink to="/register" onClick={closeMobileMenu}>Register</NavLink></li>
                    </ul>
                    <Icon className="icon" onClick={handleClick}>
                        { click ?  <CloseOutlined /> : <MenuOutlined />}
                    </Icon>
                </nav>
            </Menu>
        </>
    )
}

export default MenuBar
