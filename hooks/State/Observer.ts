export type DataType = string | Array<string>

export type StateType = {
  set: (newData: any) => void;
  get: () => any;
  data: DataType;
  changes: any;
  observable: any;
}

export const Observer = (state: StateType, change: undefined | (() => any) = undefined) => (
  state.observable = true,
  function setObserver(setProp: Function, obj: any) {
    const dataToChange = change ? change : state.get;
    state.changes.push(() => {
      setProp(obj, dataToChange())
    })
    setProp(obj, dataToChange());
  }
);