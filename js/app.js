class CountdownTimer {
  constructor({selector, targetDate}){
    this.selector = selector;
    this.targetDate = targetDate;
    
    this.initSelectors();
    this.startTimer();
  }

  initSelectors() {
    this.selectorRef = document.querySelector(this.selector);
    this.daysRef = this.selectorRef.querySelector('.value[data-value="days"]');
    this.hoursRef = this.selectorRef.querySelector('.value[data-value="hours"]');
    this.minsRef = this.selectorRef.querySelector('.value[data-value="mins"]');
    this.secsRef = this.selectorRef.querySelector('.value[data-value="secs"]');

    this.daysTextRef = this.daysRef.nextElementSibling;
    this.hoursTextRef = this.hoursRef.nextElementSibling;
    this.minsTextRef = this.minsRef.nextElementSibling;
    this.secsTextRef = this.secsRef.nextElementSibling;
  }

  startTimer() {
    setInterval(this.renderTimer.bind(this), 1000);
    
  }

  renderTimer() {
    const time = this.targetDate - Date.now();
    const { days, hours, mins, secs } = this.calculateTimer(time);

    this.daysRef.textContent = days.toString().padStart(2, '0');
    this.hoursRef.textContent = hours.toString().padStart(2, '0');
    this.minsRef.textContent = mins.toString().padStart(2, '0');
    this.secsRef.textContent = secs.toString().padStart(2, '0');
    
    this.daysTextRef.textContent = (days > 1 || days === 0)? 'Days' : 'Day';
    this.hoursTextRef.textContent = (hours > 1 || hours === 0)? 'Hours' : 'Hour';
    this.minsTextRef.textContent = (mins > 1 || mins === 0)? 'Minutes' : 'Minute';
    this.secsTextRef.textContent = (secs > 1 || secs ===0)? 'Seconds' : 'Second';

    

  }

  calculateTimer(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      mins,
      secs
    }
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});