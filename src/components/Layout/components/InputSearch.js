import React from 'react';
import {
    Input
} from 'antd';

const {
    Search
} = Input;

export default class InputSearch extends React.Component {
    render() {
        return ( <
            Search placeholder = "Tìm kiếm trong tài khoản GHTK"
            onSearch = {
                value => console.log(value)
            }
            className="input-search-custom"
            style = {
                {
                 
                    background: "#f1f3f4",
                    background: "#f1f3f4",
                    border: "1px solid transparent",
                    WebkitBorderRadius: "8px",
                    borderRadius: "8px",
                    /* margin-left: auto; */
                    /* margin-right: auto; */
                    maxWidth: "663px",
                    position: "relative",
                    WebkitTransition: "background 100ms ease-in,width 100ms ease-out",
                    transition:" background 100ms ease-in,width 100ms ease-out"
                }
            }
            />
        )
    }
}