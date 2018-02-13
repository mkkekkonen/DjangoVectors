class MVector3 {
    
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = 1;
    }
    
    add(vector) {
        return new MVector3(
            this.x + vector.x,
            this.y + vector.y,
            this.z + vector.z
        );
    }
    
    sub(vector) {
        return new MVector3(
            this.x - vector.x,
            this.y - vector.y,
            this.z - vector.z
        );
    }
    
    mul(scalar) {
        return new MVector3(
            this.x * scalar,
            this.y * scalar,
            this.z * scalar
        );
    }
    
    div(scalar) {
        return new MVector3(
            this.x / scalar,
            this.y / scalar,
            this.z / scalar
        );
    }
    
    len() {
        console.dir(this);
        return Math.sqrt(
            Math.pow(this.x, 2) +
            Math.pow(this.y, 2) +
            Math.pow(this.z, 2)
        );
    }
    
    norm() {
        return this.div(this.len());
    }
    
    dot(vector) {
        return this.x * vector.x +
            this.y * vector.y +
            this.z * vector.z;
    }
    
    opposite() {
        return new MVector3(
            -this.x,
            -this.y,
            -this.z
        );
    }
    
    // assuming z is 0
    toPolarCoords() {
        return {
            r: this.len(),
            theta: toDegrees(Math.atan(this.y / this.x))
        };
    }
    
    scalarProjection(vector) {
        return (this.dot(vector) / vector.len());
    }
    
    vectorProjection(vector) {
        return vector.mul(this.dot(vector) / Math.pow(vector.len(), 2));
    }
    
    static polar(r, theta) {
        return new MVector3(
            r * Math.cos(toRadians(theta)),
            r * Math.sin(toRadians(theta)),
            0
        );
    }
    
    // theta: angle in x,y plane
    // phi: angle from positive z axis
    static spherical(r, theta, phi) {
        return new MVector3(
            r * Math.cos(toRadians(theta)) * Math.sin(toRadians(phi)),
            r * Math.sin(toRadians(theta)) * Math.sin(toRadians(phi)),
            r * Math.cos(toRadians(phi))
        );
    }
}

function toRadians(deg) {
    return (deg * (Math.PI / 180));
}

function toDegrees(rad) {
    var res = (rad * (180 / Math.PI));
    return res;
}