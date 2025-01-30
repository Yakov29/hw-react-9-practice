import React, { Component } from "react";
import styled from "styled-components";

const List = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const ListItem = styled.li`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #2D9CDB;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
`;

const StickerImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
`;

const Choice = styled.div`
    padding: 10px 20px;
    background-color: #2D9CDB;
    color: white;
    font-size: 18px;
    border-radius: 8px;
    text-align: center;
    margin-top: 10px;
`;

class StickerList extends Component {
    state = {
        selectedSticker: null
    };

    stickerClick = (sticker) => {
        this.setState({ selectedSticker: sticker });
    };

    render() {
        return (
            <div>
                <List>
                    {this.props.data.map((element) => (
                        <ListItem onClick={() => this.stickerClick(element)}>
                            <StickerImage src={element.img} alt={element.label} />
                        </ListItem>
                    ))}
                </List>
                <Choice>
                    {this.state.selectedSticker ? this.state.selectedSticker.label : "Оберіть стікер"}
                </Choice>
            </div>
        );
    }
}

export default StickerList;
