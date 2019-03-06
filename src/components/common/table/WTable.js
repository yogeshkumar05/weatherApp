import React, { Component } from 'react';
import { Table} from 'react-bootstrap';

export default class TableComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tableHead = [];
        let subHead = [];
        let tableBody = [];
        let entry = this.props.tableData[0];
        let columns = [];
        let subcolumns = [];

        const hideStyle = { 'display': 'none'};
        const showStyle = { 'display': 'table-cell'};
        const {checkColumns} = this.props;
        if (entry != undefined)
            for (let name in entry) {
                if (typeof entry[name] == 'object') {
                    let count = 0;
                    const checkedHeaders = [];
                    let mainStyle = showStyle;
                    for (let i in entry[name]) {
                        count++;
                        let subStyle = showStyle;
                        if(checkColumns && checkColumns[i] === true)
                        {
                            subStyle= hideStyle;
                            count--;
                            checkedHeaders.push(i);
                        }
                        subcolumns.push(<th colSpan={1} style={subStyle}>{i}</th>)
                    }
                    const mainColLength = Object.keys(entry[name]).length;
                    if(checkedHeaders.length === mainColLength)
                    {
                        mainStyle = hideStyle;
                    }

                    tableHead.push(<th style={mainStyle} colSpan={count}>{name}</th>)

                }
                else {
                    const style = (checkColumns && checkColumns[name] === true) ? hideStyle : showStyle;
                    tableHead.push(<th style={style} className="no-border-tcell" rowSpan={2}>{name}</th>)
                }


                columns.push(name);


            }

        subHead.push(<tr>{subcolumns}</tr>)

        const sortColumns = columns.map((item, index) => <option key={index} name={item}>{item}</option>)
        this.props.tableData.map((item, index) => {
            let rowEntries = [];
            for (let name in item) {
                if (typeof item[name] == 'object') {
                    let value = "";

                    for (let i in item[name]) {
                        const style = (checkColumns && checkColumns[i] === true) ? hideStyle : showStyle;
                        rowEntries.push(<td key={index + i} style={style}>{item[name][i]}</td>)
                    }
                }


                else {
                    if (name == "picture") {
                        rowEntries.push(<td key={index}><img alt="pic" src={item[name]} /></td>)

                    }
                    else{
                        const style = (checkColumns && checkColumns[name] === true) ? hideStyle : showStyle;
                        rowEntries.push(<td style={style}>{item[name]}</td>)
                    }
                        
                }
            }
            tableBody.push(<tr key={index}>{rowEntries}</tr>)
        })

        return (<div className="table-container">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        {tableHead}
                    </tr>
                    {subHead}
                </thead>

                <tbody>
                    {tableBody}
                </tbody>

            </Table>
        </div>)
    }
}
