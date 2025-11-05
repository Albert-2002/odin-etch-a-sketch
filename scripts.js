const canvas_tiles_container = document.querySelector(
  ".canvas-tiles-container"
);

const DEFAULT_GRID_SIZE = 16;

// Function to create a grid of divs
function createGrid(gridSize = DEFAULT_GRID_SIZE) {
  // Clear any existing grid
  canvas_tiles_container.innerHTML = "";

  // Create rows
  for (let row = 0; row < gridSize; row++) {
    // Create a row container
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");

    // Create tiles for this row
    for (let col = 0; col < gridSize; col++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      gridRow.appendChild(tile);
    }

    canvas_tiles_container.appendChild(gridRow);
  }
}

// Create the initial 16x16 grid
createGrid();
