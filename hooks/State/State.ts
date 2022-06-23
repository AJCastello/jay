
export type DataType = string | Array<string>

export type StateType = {
  set: (newData: any) => void;
  get: () => any;
  data: DataType;
  changes: any;
  observable: any;
}

export const State = (data: DataType): StateType => ({
  set(newData: DataType) {
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