import reducer, {CollapsedType, TOGGLE_COLLAPSED} from "./reducer";

test('Collapsed should be true', () => {

    const state: CollapsedType = {
        isCollapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED});

    expect(newState.isCollapsed).toBe(true);
});

test('Collapsed should be false', () => {

    const state: CollapsedType = {
        isCollapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED});

    expect(newState.isCollapsed).toBe(false);
});

test('Collapsed should be ERROR', () => {

    const state: CollapsedType = {
        isCollapsed: true
    }

    expect(()=> {
        reducer(state, {type: 'TEST_TOGGLE_COLLAPSED'});
    }).toThrowError();
});


export {};