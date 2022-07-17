
export type DataType = string | Array<string> | boolean

export type StateType = {
  set: (newData: any) => void;
  get: () => any;
  data: any;
  changes: any;
  observable: any;
}

export const State = <T> (data: T): StateType => ({
  set(newData: T) {
    data = newData;
    this.data = newData;
    if (this.observable) this.changes.forEach((change: Function) => change());
  },
  get() {
    return data;
  },
  changes: [],
  observable: false,
  data: data
});