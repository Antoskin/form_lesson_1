import { templateTimer } from './template';
import { millisToMinutesAndSeconds } from '../../utils';

class Timer {
    constructor(options) {
        this.options = options;
        this.timerRoot = null;
        this.timeRange = 1800000
        this.templateTimer = templateTimer

        this.toHtml = this.toHtml.bind(this)
        this.onChange()
    }

    onChange() {
        const interval = setInterval(() => {

            if (this.timeRange === 0) {
                clearInterval(interval);
                this.options.update();
            }

            this.timeRange = this.timeRange - 1000;
            this.timerRoot.innerText = (millisToMinutesAndSeconds(this.timeRange))

        }, 1000)
    }

    toHtml() {
        const {root, timer} = this.templateTimer(this.timeRange)
        this.timerRoot = timer;

        return root;
    }
}

export default Timer;