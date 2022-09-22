import type { StyleUpdateType } from "./models";

export class TicketSdk {
    private id: string = 'nft-ticket';
    private element?: HTMLDivElement;

    private styleOptions = {
        zoom: 1,
        translate: {
            x: 20,
            y: 90
        },
        rotate: {
            x: 0,
            y: 0,
        }
    }

    private dragMovement = {
        start: { x: 0, y: 0 },
    };

    constructor(id: string) {
        this.id = id;
    }

    private updateStyle(styleUpdating: StyleUpdateType): TicketSdk {
        if (!this.element) this.element = document.getElementById(this.id) as HTMLDivElement;

        const { zoom, translate, rotate } = this.styleOptions;

        if (styleUpdating === 'zoom' || styleUpdating === 'rotate') {
            this.element.style.transition = 'transform 0.5s ease 0s';
        } else {
            this.element.style.transition = 'inherit';
        }

        this.element.style.transform = `scale(${zoom}) translate(${translate.x}px, ${translate.y}px) rotateY(${rotate.y}deg)`;

        return this;
    }

    /* ROTATE HANDLER */
    public addRotate(x: number, y: number): TicketSdk {
        this.setRotate(this.styleOptions.rotate.x + x, this.styleOptions.rotate.y + y);
        return this;
    }

    private setRotate(x: number, y: number): TicketSdk {
        this.styleOptions.rotate.x = x;
        this.styleOptions.rotate.y = y;

        return this.updateStyle('rotate');
    }

    public rotateController(rotateDivider: number = 10): (e: WheelEvent) => TicketSdk {
        return (e) => {
            if (e.shiftKey) {
                const newRotate = e.deltaY / rotateDivider;

                this.addRotate(0, newRotate);
            }

            return this;
        }
    }
    /* END ROTATE HANDLER */

    /* TRANSLATE HANDLER */
    public addTranslate(x: number, y: number): TicketSdk {
        this.setTranslate(this.styleOptions.translate.x + x, this.styleOptions.translate.y + y);
        return this;
    }

    private setTranslate(x: number, y: number): TicketSdk {
        this.styleOptions.translate.x = x;
        this.styleOptions.translate.y = y;

        return this.updateStyle('translate');
    }

    public translateController(translateDivider: number = 1): (e: MouseEvent) => TicketSdk {
        if (translateDivider === -1) {
            return (e) => {
                this.dragMovement.start.x = e.clientX;
                this.dragMovement.start.y = e.clientY;
                return this;
            };
        }

        return (e) => {
            const { clientX, clientY } = e;

            if (clientX === 0 && clientY === 0) return this;

            const movementX = (clientX - this.dragMovement.start.x) / this.styleOptions.zoom;
            const movementY = (clientY - this.dragMovement.start.y) / this.styleOptions.zoom;

            this.dragMovement.start.x = clientX;
            this.dragMovement.start.y = clientY;

            this.addTranslate(movementX / translateDivider, movementY / translateDivider);
            return this;
        };
    }
    /* END TRANSLATE HANDLER */

    /* ZOOM HANDLER */
    public addZoom(zoom: number): TicketSdk {
        this.setZoom(this.styleOptions.zoom + zoom);
        return this;
    }

    private setZoom(zoom: number): TicketSdk {
        let newZoom = zoom;

        if (zoom < 0.1) newZoom = 0.1;
        if (zoom > 5) newZoom = 5;

        this.styleOptions.zoom = Number.parseFloat(newZoom.toFixed(2));

        return this.updateStyle('zoom');
    }

    public zoomController(zoomDivider: number = 1000): (e: WheelEvent) => TicketSdk {
        return (e) => {
            if (!e.shiftKey) {
                const newZoom = e.deltaY / zoomDivider;
                this.addZoom(newZoom);
            }
            return this;
        };
    }
    /* END ZOOM HANDLER */
}