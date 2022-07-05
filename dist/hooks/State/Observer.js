export const Observer = (state, change = undefined, execute = false) => (state.observable = true,
    execute && (change ?
        (change(), state.changes.push(() => { change(); }))
        :
            false),
    function setObserver(setProp, obj) {
        const dataToChange = change ? change : state.get;
        state.changes.push(() => {
            setProp(obj, dataToChange());
        });
        setProp(obj, dataToChange());
    });
//# sourceMappingURL=Observer.js.map