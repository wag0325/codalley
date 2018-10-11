# SVG
## Key Points
- vector images. Hence, SVGs are scaleable without affecting resolutions unlike canvas.
- built using XML markup
- easy to animate

## SVG Elements
- text
- circle
- rect
- line
- path: a path between two points
- textPath: a path between two points, and a linked text element
- polygon
- g: group elements

## Path
Path is the most useful and powerful element to draw using SVG.

`d` contains directional commands. Commands consist of the command name and a set of coordinates.
- `M` Move To - accepts x,y coordinates
- `L` Line To - accepts x,y coordinates to draw the line to
- `H` Horizontal Line To - accepts an x coordinate
- `V` Vertical Line To - accepts an y coordinate
- `C` Curve To
- `S` Smooth Curve To 
- `Q` Quadratic Bezier Curve
- `T` Smooth Quadratic Bezier Curve To
- `Z` Close Path - puts a line back to the start
- `A` Arch

## References
1. https://flaviocopes.com/svg/#path