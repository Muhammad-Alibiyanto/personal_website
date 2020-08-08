import React from 'react';
import '../styles/chart.css';
import { LineChart, Line, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

class ChartComponent extends React.Component
{
    constructor() {
        super();
        this.state = {
            data: [
                {name: 'Page A', uv: 400, pv: 200},
                {name: 'Page B', uv: 500, pv: 1000},
                {name: 'Page C', uv: 300, pv: 400},
                {name: 'Page D', uv: 200, pv: 245},
                {name: 'Page E', uv: 600, pv: 10},
                {name: 'Page F', uv: 900, pv: 100},
                {name: 'Page G', uv: 400, pv: 600},
                {name: 'Page H', uv: 1500, pv: 1000},
                {name: 'Page I', uv: 100, pv: 1900},
                {name: 'Page J', uv: 900, pv: 400},
                {name: 'Page K', uv: 1500, pv: 200},
                {name: 'Page L', uv: 1800, pv: 1000},
            ],
            width: window.innerWidth - (window.innerWidth * 22 / 100)

        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth - (window.innerWidth * 22 / 100) });
    }

    render() {
        return(
            <LineChart height={400} width={this.state.width} data={this.state.data}>
                <CartesianGrid strokeDasharray="0 0" stroke="#5a6378" />
                <Tooltip />
                <XAxis dataKey="name" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
        )
    }
}

export default ChartComponent;