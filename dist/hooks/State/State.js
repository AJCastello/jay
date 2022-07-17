export const State = (data) => ({
    set(newData) {
        data = newData;
        this.data = newData;
        if (this.observable)
            this.changes.forEach((change) => change());
    },
    get() {
        return data;
    },
    changes: [],
    observable: false,
    data: data
});
//# sourceMappingURL=State.js.map