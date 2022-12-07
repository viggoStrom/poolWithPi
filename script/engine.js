/** @type {HTMLCanvasElement} */


class engine {
    constructor(canvas, bound, ...objectsThatWillCollide) {
        this.canvas = canvas
        this.bound = bound
        this.objects = objectsThatWillCollide
    }

    addVelocities = () => {
        this.objects.forEach(element => {
            element.xPosition -= element.xVelocity / 1000
            console.log(element.name, element.xPosition);
        });
    }

    check = () => {
        // untested
        objects.forEach(element => {
            if (element.xPosition < this.bound.xPosition + this.bound.width) {
                element.xVelocity *= -1
                this.canvas.nrOfCollisions++
            }
        });

        // Check if any of the objects are colliding
        for (let i = 0; i < objects.length; i++) {
            for (let j = i + 1; j < objects.length; j++) {
                // Check if the bounding boxes of objects[i] and objects[j] are overlapping
                if (objects[i].xPosition < objects[j].xPosition + objects[j].width &&
                    objects[i].xPosition + objects[i].width > objects[j].xPosition) {
                    // The objects are colliding
                    console.log(`Objects ${i} and ${j} are colliding!`);
                    const v1 = (objects[i].xVelocity * (objects[i].mass - objects[j].mass) + 2 * objects[j].mass * objects[j].xVelocity) / (objects[i].mass + objects[j].mass)
                    const v2 = (objects[j].xVelocity * (objects[j].mass - objects[i].mass) + 2 * objects[i].mass * objects[i].xVelocity) / (objects[i].mass + objects[j].mass)

                    i.xVelocity = v1;
                    // i.velocityInput.value = v1.toFixed(2);
                    j.xVelocity = v2;
                    // j.velocityInput.value = v2.toFixed(2);

                    this.canvas.nrOfCollisions++
                }
            }
        }
    }

    update = () => {
        this.addVelocities()
    }
}
