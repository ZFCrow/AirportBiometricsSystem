class Timer {
    constructor() {
        this.startTime = null;
        this.endTime = null;
        this.elapsedTime = 0; // In seconds
        this.timerInterval = null;
    }

    // Start the timer
    start() {
        if (this.timerInterval) {
            console.warn("Timer is already running!");
            return;
        }

        this.startTime = Date.now();
        this.timerInterval = setInterval(() => {
            const now = Date.now();
            this.elapsedTime = Math.floor((now - this.startTime) / 1000);
            console.log(`Elapsed Time: ${this.elapsedTime} seconds`);
        }, 1000);
    }

    // Stop the timer
    stop() {
        if (!this.timerInterval) {
            console.warn("Timer is not running!");
            return;
        }

        clearInterval(this.timerInterval);
        this.timerInterval = null;
        this.endTime = Date.now();
        this.elapsedTime = Math.floor((this.endTime - this.startTime) / 1000);
        console.log(`Timer stopped. Total Time: ${this.elapsedTime} seconds`);
    }

    // Get the elapsed time
    getElapsedTime() {
        if (this.startTime) {
            return Math.floor((Date.now() - this.startTime) / 1000);
        }
        return this.elapsedTime;
    }

    // Reset the timer
    reset() {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        this.startTime = null;
        this.endTime = null;
        this.elapsedTime = 0;
    }
}

// Singleton instance
const timerInstance = new Timer();
export default timerInstance;
