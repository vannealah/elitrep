function flatArray(points, fx, fy, that) {
    // Check if `that` is defined, otherwise default to `null`
    that = that || null;

    // Initialize an empty array to store the transformed points
    const result = [];

    // Iterate over each point in the `points` array
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        
        // Apply the transformation functions `fx` and `fy` to the x and y coordinates of the point
        const newX = fx.call(that, point[0], i, points);
        const newY = fy.call(that, point[1], i, points);

        // Push the transformed coordinates into the result array
        result.push(newX, newY);
    }

    return result;
}
