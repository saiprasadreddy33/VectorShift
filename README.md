# Pipeline Builder

The Pipeline Builder is a web-based tool that allows users to visually create and analyze data processing pipelines.

## Features

- **Visual Pipeline Building**: Users can create data processing pipelines by dragging and dropping various types of nodes onto a canvas.
- **Node Abstraction**: An abstraction layer is provided for creating different types of nodes, allowing for easier maintenance and extension of the application.
- **Styling**: The app provides a unified design for a better user experience, with options to customize and style different components.
- **Text Node Logic**: The Text node allows users to input text, with features such as dynamic size adjustment and variable definition.
- **Backend Integration**: The frontend and backend are integrated to calculate the number of nodes and edges in the pipeline and determine if it's a Directed Acyclic Graph (DAG).

## Installation

To run the Pipeline Builder App locally, follow these steps:

1. Clone this repository:

    ```
    git clone https://github.com/your/repository.git
    ```

2. Navigate to the `frontend` directory:

    ```
    cd frontend
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Start the frontend server:

    ```
    npm start
    ```

5. In a new terminal, navigate to the `backend` directory:

    ```
    cd ../backend
    ```

6. Install backend dependencies:

7. Start the backend server:

    ```
    uvicorn main:app --reload
    ```

8. Open your web browser and go to `http://localhost:3000` to use the app.

## Usage

### Scenario 1: Building a Simple Data Processing Pipeline

1. **Adding Nodes**:
   - Click and drag the desired node types (Input, Output, LLM, Text) from the toolbar onto the canvas.
   - Connect the nodes by dragging a connection line from one node's handle to another.

2. **Customizing Nodes**:
   - Double-click on a node to customize its properties.
   - Modify the input/output names, types, and other parameters as required.

3. **Viewing Pipeline Details**:
   - Click the "Submit" button to analyze the pipeline.
   - An alert will display the number of nodes, number of edges, and whether the pipeline is a Directed Acyclic Graph (DAG).

### Scenario 2: Defining Text Variables in the Text Node

1. **Entering Text with Variables**:
   - Double-click on a Text node to enter text.
   - Define variables using double curly brackets, e.g., `{{input}}`.

2. **Viewing Created Handles**:
   - As you define variables, handles will automatically appear on the left side of the Text node for each variable.

3. **Dynamic Text Node Size**:
   - The Text node's size will adjust dynamically based on the entered text, providing better visibility and user experience.
  
![image](https://github.com/saiprasadreddy33/VectorShift/assets/74254400/fb0625f9-ca14-4bea-9dbd-e1b22ad24696)

