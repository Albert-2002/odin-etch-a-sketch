const canvas_tiles_container = document.querySelector(
  ".canvas-tiles-container"
);

const DEFAULT_GRID_SIZE = 16;

// Track if mouse is being dragged
let isMouseDown = false;

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

      // Add event listeners for coloring
      addTileEventListeners(tile);

      gridRow.appendChild(tile);
    }

    canvas_tiles_container.appendChild(gridRow);
  }
}

// Function to add event listeners to each tile
function addTileEventListeners(tile) {
  // Color on click
  tile.addEventListener("click", () => {
    colorTile(tile);
  });

  // Color on mouse enter (only if dragging)
  tile.addEventListener("mouseenter", () => {
    if (isMouseDown) {
      colorTile(tile);
    }
  });

  // Start drag on mousedown
  tile.addEventListener("mousedown", (e) => {
    e.preventDefault(); // Prevent text selection
    isMouseDown = true;
    colorTile(tile);
  });
}

// Function to color a tile
function colorTile(tile) {
  tile.style.backgroundColor = "#1f2937";
}

// Global event listeners for mouse up/leave
document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

// Stop dragging when mouse leaves the canvas area
canvas_tiles_container.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

// Prevent default drag behavior on the canvas
canvas_tiles_container.addEventListener("dragstart", (e) => {
  e.preventDefault();
});

// Create the initial 16x16 grid
createGrid();

// Clear button functionality
const clearButton = document.querySelector(".canvas-clear-button");
clearButton.addEventListener("click", () => {
  createGrid();
});
