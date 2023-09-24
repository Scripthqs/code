class Queue<T> {
  private data: T[] = [];

  public push(item: T) {
    this.data.push(item);
  }

  public pop(): T | undefined {
    return this.data.shift();
  }

  public size(): number {
    return this.data.length;
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }
}

export default Queue;
