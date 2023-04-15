export class SingletonCounter {
    private static instance: SingletonCounter;

    private counter: number = 0;

    private constructor() {}

    public static getInstance(): SingletonCounter {
        if (!SingletonCounter.instance) {
            SingletonCounter.instance = new SingletonCounter();
        }
        return SingletonCounter.instance;
    }

    public inc(): number {
        this.counter++;
        return this.counter;
    }

    public getCounter(): number {
        return this.counter;
    }
}