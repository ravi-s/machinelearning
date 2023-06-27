class SketchPad {
    constructor(container, onUpdate = null, size = 400) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = size;
        this.canvas.height = size;
        this.canvas.style = `
        background-color: white;
        box-shadow: 0px 0px 10px 2px black;
        `;
        container.appendChild(this.canvas);
        const linebreak = document.createElement('br');
        container.appendChild(linebreak);

        // Undo functionality
        this.undoBtn = document.createElement("button");
        this.undoBtn.innerHTML = 'UNDO';
        container.appendChild(this.undoBtn);

        this.ctx = this.canvas.getContext("2d");
        this.#addEventListeners();
        this.onUpdate = onUpdate;
        this.reset();
    }
    reset() {
        this.paths = [];
        this.isDrawing = false;
        this.#redraw();
    }


    #addEventListeners() {
        this.canvas.onmousedown = (evt) => {
            const mouse = this.#getMouse(evt);
            /* console.log(mouse); */
            this.paths.push([mouse]);
            this.isDrawing = true;

        }
        this.canvas.onmousemove = (evt) => {
            if (this.isDrawing) {
                const mouse = this.#getMouse(evt);
                const lastPath = this.paths[this.paths.length - 1];
                /* console.log(mouse); */
                lastPath.push(mouse);
                /*                 console.log(this.path.length);
                 */
                this.#redraw();
            }
        }
        document.onmouseup = () => {
            this.isDrawing = false;
        }
        this.canvas.ontouchstart = (ev) => {
            const loc = ev.touches[0];
            this.canvas.onmousedown(loc);

        }
        this.canvas.ontouchmove = (ev) => {
            const loc = ev.touches[0];
            this.canvas.onmousemove(loc);
        }
        document.ontouchend = () => {
            this.canvas.onmouseup();
        }
        this.undoBtn.onclick = () => {
            this.paths.pop();
            this.#redraw();
        }
    }

    #redraw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        draw.paths(this.ctx, this.paths);
        if (this.paths.length > 0) {
            this.undoBtn.disabled = false;
        }
        else {
            this.undoBtn.disabled = true;
        }
        this.triggerUpdate();
    }
    triggerUpdate() {
        if (this.onUpdate) {
            this.onUpdate(this.paths);
        }
    }
    #getMouse(evt) {
        const rect = this.canvas.getBoundingClientRect();
        const mouse = [
            Math.round(evt.clientX - rect.left),
            Math.round(evt.clientY - rect.top)
        ];
        return mouse;
    }
}