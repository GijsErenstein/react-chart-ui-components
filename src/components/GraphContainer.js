import React, { Component } from 'react';
import Graph from "./Graph";
import Button from "./Button";

class GraphContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shownValues : [0,0],
            activeGraph : ''
        };

        this.activateGraph = this.activateGraph.bind(this);
    }

    componentDidMount() {
        if (this.props.graphs) {
            this.setState({
                shownValues : this.props.graphs[0].values,
                activeGraph : this.props.graphs[0].name,
            })
        }

    }

    render() {
        return <div>
            {this.props.graphs.map((graph) => {
                return <Button key={graph.name}
                               text={graph.name}
                               active={graph.name === this.state.activeGraph}
                               onClick={() => {
                                   this.activateGraph(graph);
                               }}/>
            })}
            <Graph values={this.state.shownValues}/>
        </div>
    }

    activateGraph(graph) {

        this.setState({
            shownValues : graph.values,
            activeGraph : graph.name
        });
    }

}

export default GraphContainer;
