class Queue {
    private tasks: Task[] = [];
    private delay: number = 10;
  
    runQueue() {
      setTimeout(() => this.doJob(), this.delay);
    }
  
    private doJob() {
      const task: Task | undefined = this.tasks.shift();
      if (task != null) {
        console.log(task.value);
      }
      this.runQueue();
    }
  
    addJob(task: Task) {
      this.tasks.push(task);
    }
  
    run() {
      this.runQueue();
    }
  
    set jobDelay(time: number) {
      this.delay = time;
    }
  }
  
  class Task {
    value: string;
  
    constructor(value: string | number) {
      this.value = value.toString();
    }
  }
  
  const queue = new Queue();
  
  const task1 = new Task('task#1');
  const task2 = new Task(1);
  
  queue.jobDelay = 1000;
  
  queue.addJob(task1);
  queue.addJob(task2);
  
  queue.run();
  