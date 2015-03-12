// graph = { nodes:{n1: {number: 1},
//                  n2: {number: *}},
//           edges:[(n1, n2), (n1, n3)],
//         }
function add_node(graph, name, number=1){
    graph = graph.clone();
    graph.nodes[name] = {number: number};
    return graph;
}

function remove_node(graph, name){
    graph = graph.clone();
    delete graph.nodes[name];
    return graph;
}

function change_number(graph, name, number){
    graph = graph.clone();
    graph.nodes[name][number] = number;
    return graph;
}

// start_node and end_node are string representing the name of the node.
function add_edge(graph, start_node, end_node){
    graph = graph.clone();
    graph.edges.append((start_node, end_node));
    return graph;
}

function remove_edge(graph, start_node, end_node){
    graph = graph.clone();
    graph = _filter(graph.edges, function(edge){
	return  !(edge[0] === start_node && edge[1] === end_node);
    });
    return graph;
}

function remove_edge_for_node(graph, node){
    graph = graph.clone();
    graph = _filter(graph.edges, function(edge){
	return  !(edge[0] === start_node || edge[1] === end_node);
    });
    return graph;
}

function pick_edge(edge){
    graph = graph.clone();
    // TODO
}
