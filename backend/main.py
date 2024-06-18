# backend/main.py

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware  # Import CORS middleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow requests from localhost:3000
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    type: str
    position: Dict[str, float]
    data: Dict[str, str]

class Edge(BaseModel):
    source: str
    sourceHandle: str
    target: str
    targetHandle: str

class PipelineData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

class PipelineInfo(BaseModel):
    num_nodes: int
    num_edges: int
    is_dag: bool

@app.post("/pipelines/parse", response_model=PipelineInfo)
async def parse_pipeline(pipeline: PipelineData):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Check if the pipeline forms a Directed Acyclic Graph (DAG)
    is_dag = check_dag(nodes, edges)

    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": is_dag}

def check_dag(nodes, edges):
    graph = {}
    for edge in edges:
        source = edge.source
        target = edge.target
        if source not in graph:
            graph[source] = []
        graph[source].append(target)

    visited = set()
    stack = set()

    def dfs(node):
        if node in stack:
            return False
        if node in visited:
            return True

        visited.add(node)
        stack.add(node)

        if node in graph:
            for neighbor in graph[node]:
                if not dfs(neighbor):
                    return False

        stack.remove(node)
        return True

    for node in nodes:
        if not dfs(node.id):
            return False

    return True
